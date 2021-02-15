/* eslint-disable max-depth */
const Listener = require('../../Structures/Listener');
const TicketConfig = require('../../models/Tickets/TicketConfig');
const Ticket = require('../../models/Tickets/Ticket');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Listener {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	async run() {
		this.client.on('ready', () => {
			this.client.guilds.cache.get('509931628286443532').channels.cache.get('766616442325434368').messages.fetch('810396251333328896');
		});


		this.client.on('messageReactionAdd', async (reaction, user) => {
			if (user.bot) return;

			if (reaction.emoji.name === '🎫') {
				const ticketConfig = await TicketConfig.findOne({
					MessageID: reaction.message.id
				});

				reaction.users.remove(user.id);

				if (ticketConfig) {
					const findTicket = await Ticket.findOne({
						AuthorID: user.id,
						Resolved: false
					});

					if (findTicket) {
						const TicketHave = `https://discord.com/channels/${findTicket.GuildID}/${findTicket.ChannelID}/${findTicket.ClosedMessagedID}`;
						const embed = new MessageEmbed()
							.setTitle(`${reaction.message.guild.name} Ticket Support`)
							.setThumbnail(reaction.message.guild.iconURL())
							.setDescription(`You already have a Ticket\n\n[Please close your Ticket](${TicketHave})`)
							.setColor('RANDOM');

						user.send(embed);
					} else {
						try {
							const roleIdsString = ticketConfig.get('RoleIds');
							const roleIds = JSON.parse(roleIdsString);
							const permissions = roleIds.map((id) => ({ allow: 'VIEW_CHANNEL', id }));
							const channel = await reaction.message.guild.channels.create('ticket', {
								parent: ticketConfig.get('ParentID'),
								permissionOverwrites: [
									{ deny: 'VIEW_CHANNEL', id: reaction.message.guild.id },
									{ allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY'], id: user.id },
									...permissions
								]
							});

							const embed = new MessageEmbed()
								.setAuthor('Support Ticket')
								.setDescription(`Ping the Department needed\nYour IGN\nThe details of the ticket\n\nmake sure to include the necessary detials like plot IDs coordinates if needed`)
								.setColor('RANDOM')
								.setFooter('React to the lock emoji to close the Ticket');
							const msg = await channel.send(`Hello, ${user}, please follow this format:`, embed);
							await msg.react('🔒');
							const ticket = await Ticket.create({
								AuthorID: user.id,
								ChannelID: channel.id,
								GuildID: reaction.message.guild.id,
								Resolved: false,
								ClosedMessagedID: msg.id
							});

							const ticketId = String(ticket.get('TicketID')).padStart(4, 0);
							await channel.edit({ name: `ticket-${ticketId}` });
						} catch (err) {
							console.log(err);
						}
					}
				} else {
					console.log('No ticket config found!');
				}
			// eslint-disable-next-line no-dupe-else-if
			} else if (reaction.emoji.name === '🔒') {
				const ticket = await Ticket.findOne({
					ChannelID: reaction.message.channel.id
				});

				if (ticket) {
					const closedMessagedId = ticket.get('ClosedMessagedID');
					if (reaction.message.id === closedMessagedId) {
						await reaction.message.channel.updateOverwrite(ticket.get('AuthorID'), {
							VIEW_CHANNEL: false
						}).catch((err) => console.log(err));
						await ticket.delete();

						const channels = this.client.channels.cache.get(ticket.get('ChannelID'));

						setTimeout(async () => {
							await channels.delete();
						}, 5000);
					}
				}
			}
		});
	}

};
