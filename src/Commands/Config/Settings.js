const Command = require('../../Structures/Command');

const { MessageEmbed } = require('discord.js');

const UpVotesSchema = require('../../models/upvotes');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			category: 'Admin',
			userPerms: ['MANAGE_GUILD']
		});
	}


	// eslint-disable-next-line consistent-return
	async run(message, args) {
		const { channel, guild } = message;

		const toggling = ['votes', 'channel', 'disable'];
		if (!toggling.includes(args[0])) {
			const embed = new MessageEmbed()
				.setAuthor('Admin Settings Commands')
				.setDescription(`${this.client.prefix}settings votes <Amount>\n\n${this.client.prefix}settings <channel>`);

			message.channel.send(embed);
		}

		if (args[0] === 'votes') {
			if (Number(args[1]) <= 0 || !Number(args[1])) return channel.send('You need to set a number for upvotes!');

			const votecounts = args[1];

			if (votecounts) {
				await UpVotesSchema.findOneAndUpdate({
					_id: guild.id
				}, {
					_id: guild.id,
					upvotes: votecounts
				}, {
					upsert: true
				});

				channel.send(`Required upvotes are now set to ${votecounts}`);
			}
		}

		if (args[0] === 'channel') {
			const VotesChannel = message.mentions.channels.first();

			if (VotesChannel.type === 'text') {
				await UpVotesSchema.findOneAndUpdate({
					_id: guild.id
				}, {
					_id: guild.id,
					channelID: VotesChannel.id
				}, {
					upsert: true
				});

				channel.send(`Channel has been set for ${VotesChannel}`);
			}

			if (!VotesChannel) {
				channel.send(`This is not a text channel..`);
			}
		}

		if (args[0] === 'disable') {
			const votes = await UpVotesSchema.findOne({
				_id: guild.id
			});

			if (votes) {
				await UpVotesSchema.deleteOne({
					_id: guild.id
				});

				channel.send(`Upvotes has now been disabled`);
			}

			if (!votes) {
				channel.send(`this isn't enabled!`);
			}
		}
	}

};
