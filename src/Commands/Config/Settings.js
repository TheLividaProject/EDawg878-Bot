const Command = require('../../Structures/Command');

const { MessageEmbed } = require('discord.js');

const BotSettingsSchema = require('../../models/BotSettings');


module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Settings - Displays all the settings for the bot to turn off and on',
			category: 'Config',
			userPerms: ['MANAGE_GUILD']
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message, args) {
		const { channel, guild } = message;

		const toggling = ['nitro', 'commandonly'];
		if (!toggling.includes(args[0])) {
			const embed = new MessageEmbed()
				.setAuthor('Bot Settings Commands')
				.setDescription(`${this.client.prefix}settings nitro <role>\n\n${this.client.prefix}settings commandonly <channel>`);

			message.channel.send(embed);
		}

		if (args[0] === 'nitro') {
			const nitro = message.mentions.roles.first();

			if (nitro) {
				await BotSettingsSchema.findOneAndUpdate({
					_id: guild.id
				}, {
					_id: guild.id,
					NitroPerksID: nitro.id
				}, {
					upsert: true
				});

				channel.send(`Exclusive Perks has now been set to ${nitro}`);
			}

			if (!nitro) {
				channel.send('Please select a role for Exclusive Perks');
			}
		}

		if (args[0] === 'commandonly') {
			const onlycommand = message.mentions.channels.first();

			if (onlycommand) {
				await BotSettingsSchema.findOneAndUpdate({
					_id: guild.id
				}, {
					_id: guild.id,
					CommandonlyID: onlycommand.id
				}, {
					upsert: true
				});

				channel.send(`Commands has now been set to ${onlycommand}`);
			}

			if (!onlycommand) {
				channel.send('Please select a channel for Commands only');
			}
		}
	}

};
