const Event = require('../../Structures/Event.js');
const Guild = require('../../models/guild');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Event {

	async run(message) {
		const mentionRegex = RegExp(`^<@!?${this.client.user.id}>$`);
		const mentionRegexPrefix = RegExp(`^<@!?${this.client.user.id}> `);

		if (!message.guild || message.author.bot) return;

		const settings = await Guild.findOne({
			_id: message.guild.id
		// eslint-disable-next-line consistent-return
		}, (err, guild) => {
			if (err) console.error(err);
			if (!guild) {
				const newGuild = new Guild({
					// eslint-disable-next-line new-cap
					_id: message.guild.id,
					prefix: this.client.prefix
				});
				newGuild.save()
					.then(result => console.log(result))
					// eslint-disable-next-line no-shadow
					.catch(err => console.log(err));
			}
		});

		const embed = new MessageEmbed()
			.setTitle(`My settings for ${message.guild.name}`)
			.setTimestamp()
			.addFields(
				{ name: 'My Prefix', value: `\`${this.client.prefix}\`` },
				{ name: '\u200b', value: `\`${this.client.prefix}help\` - view the bots commands` }
			);

		if (message.content.match(mentionRegex)) message.channel.send(embed);

		const prefix = message.content.match(mentionRegexPrefix) ?
			message.content.match(mentionRegexPrefix)[0] : settings.prefix;

		if (!message.content.startsWith(prefix)) return;

		// eslint-disable-next-line no-unused-vars
		const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);

		const command = this.client.commands.get(cmd.toLowerCase()) || this.client.commands.get(this.client.aliases.get(cmd.toLowerCase()));
		if (command) {
			const evaldeny = new MessageEmbed()
				.setAuthor(`${message.author.tag}`)
				.setDescription('❌ **Access Denied**\n\nSorry this command is only for TheLividaProject#4397')
				.setColor('RED');
			if (command.owner && !this.client.utils.checkOwner(message.author.id)) {
				// eslint-disable-next-line consistent-return
				return message.channel.send(evaldeny);
			}

			const userPermCheck = command.userPerms ? this.client.defaultPerms.add(command.userPerms) : this.client.defaultPerms;
			if (userPermCheck) {
				const missing = message.channel.permissionsFor(message.member).missing(userPermCheck);
				if (missing.length) {
					// eslint-disable-next-line consistent-return
					return message.channel.send(`You don't have Required Permissions for this command, Missing Permission: ${this.client.utils.formatArray(missing.map(this.client.utils.formatPerms))}`);
				}
			}

			const botPermCheck = command.botPerms ? this.client.defaultPerms.add(command.botPerms) : this.client.defaultPerms;
			if (botPermCheck) {
				const missing = message.channel.permissionsFor(this.client.user).missing(botPermCheck);
				if (missing.length) {
					// eslint-disable-next-line consistent-return
					return message.channel.send(`I don't have Required Permissions for this command, Missing Permission: ${this.client.utils.formatArray(missing.map(this.client.utils.formatPerms))}`);
				}
			}

			command.run(message, args);
		}
	}

};
