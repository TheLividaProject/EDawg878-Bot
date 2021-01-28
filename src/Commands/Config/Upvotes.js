/* eslint-disable complexity */
const Command = require('../../Structures/Command');

const { MessageEmbed } = require('discord.js');

const UpVotesSchema = require('../../models/upvotes');
const UserSettingsSchema = require('../../models/UserSettings');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			category: 'Admin'
		});
	}


	// eslint-disable-next-line consistent-return
	async run(message, args) {
		const { channel, guild } = message;

		const toggling = ['votes', 'channel', 'todo', 'disable', 'dms'];
		if (!toggling.includes(args[0])) {
			if (!message.member.hasPermission('MANAGE_GUILD')) {
				message.channel.send(`You don't have Required Permissions for this command, Missing Permission: MANAGE_GUILD`);
			}
			const embed = new MessageEmbed()
				.setAuthor('Admin Settings Commands')
				.setDescription(`${this.client.prefix}upvotes votes <Amount>\n\n${this.client.prefix}upvotes channel <channel>\n\n${this.client.prefix}upvotes todo <channel>`);

			message.channel.send(embed);
		}

		if (args[0] === 'votes') {
			if (!message.member.hasPermission('MANAGE_GUILD')) {
				message.channel.send(`You don't have Required Permissions for this command, Missing Permission: MANAGE_GUILD`);
			}
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
			if (!message.member.hasPermission('MANAGE_GUILD')) {
				message.channel.send(`You don't have Required Permissions for this command, Missing Permission: MANAGE_GUILD`);
			}
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

		if (args[0] === 'todo') {
			if (!message.member.hasPermission('MANAGE_GUILD')) {
				message.channel.send(`You don't have Required Permissions for this command, Missing Permission: MANAGE_GUILD`);
			}
			const VotesChannel = message.mentions.channels.first();

			if (VotesChannel.type === 'text') {
				await UpVotesSchema.findOneAndUpdate({
					_id: guild.id
				}, {
					_id: guild.id,
					ToDoChannelID: VotesChannel.id
				}, {
					upsert: true
				});

				channel.send(`To Do List has been set for ${VotesChannel}`);
			}

			if (!VotesChannel) {
				channel.send(`This is not a text channel..`);
			}
		}

		if (args[0] === 'disable') {
			if (!message.member.hasPermission('MANAGE_GUILD')) {
				message.channel.send(`You don't have Required Permissions for this command, Missing Permission: MANAGE_GUILD`);
			}
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
				channel.send(`Upvotes isn't enabled!`);
			}
		}

		if (args[0] === 'dms') {
			const UpVotesDms = await UserSettingsSchema.findOne({
				guildID: guild.id,
				userID: message.member.id,
				upvotesdms: 'false'
			});

			if (!UpVotesDms) {
				await UserSettingsSchema.findOneAndUpdate({
					guildID: guild.id,
					userID: message.member.id
				}, {
					guildID: guild.id,
					userID: message.member.id,
					upvotesdms: 'false'
				}, {
					upsert: true
				});

				message.reply('You will no longer get notified when your suggestion gets passed through');
			} else
			if (UpVotesDms) {
				await UserSettingsSchema.findOneAndUpdate({
					guildID: guild.id,
					userID: message.member.id
				}, {
					guildID: guild.id,
					userID: message.member.id,
					upvotesdms: 'true'
				}, {
					upsert: true
				});

				message.reply('You will now get notified when your suggestion gets passed through');
			}
		}
	}

};
