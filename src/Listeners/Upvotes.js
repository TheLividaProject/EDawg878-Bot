const Listener = require('../Structures/Listener');

const UpVotesSchema = require('../models/upvotes');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Listener {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	async run() {
		const votes = await UpVotesSchema.findOne({
			_id: '734219399925334106'
		});

		if (votes) {
			this.client.on('message', async (message) => {
				if (message.channel.id === votes.channelID) {
					await message.react('<:upvote:737422006525624452>');
					await message.react('<:downvote:737422054533496873>');
				}

				if (message.type === 'PINS_ADD' && message.author.bot) message.delete();
			});

			this.client.on('messageReactionAdd', async (reaction) => {
				const limit = `${votes.upvotes}`;

				if (reaction.emoji.name === 'upvote' && reaction.count >= limit) {
					reaction.message.pin({ reason: `Hit the required upvotes - ${votes.upvotes}` });

					if (votes.ToDoChannelID) {
						const Jump = `https://discordapp.com/channels/${reaction.message.guild.id}/${reaction.message.channel.id}/${reaction.message.id}`;
						const List = this.client.channels.cache.get(votes.get('ToDoChannelID'));
						const { member } = reaction.message;
						const embed = new MessageEmbed()
							.setAuthor(`Popular Suggestion`)
							.setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
							.setColor('RANDOM')
							.setDescription(`\`${reaction.message.content}\`\n\n[jump to Message](${Jump})`)
							.setFooter(`Suggestion By: ${member.user.tag}`);

						List.send(embed);
					}
				}

				if (reaction.emoji.name === 'downvote' && reaction.count >= limit) {
					reaction.message.unpin();
				}
			});
		}
	}

};
