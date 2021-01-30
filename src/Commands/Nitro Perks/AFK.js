const Command = require('../../Structures/Command');
const AFKSchema = require('../../models/AFK');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Sets you AFK and tells the user the reason your AFK',
			category: 'Nitro Perks',
			usage: '<set> <reason> | <disable>'
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message, args) {
		const { member } = message;
		const role = '693207274818240602';

		if (member.roles.cache.has(role)) {
			const toggling = ['disable', 'set'];
			if (!toggling.includes(args[0])) {
				message.channel.send(`Set yourself AFK by using \`${this.client.prefix}afk set <reason>\` or \`${this.client.prefix}afk disable\` to be removed from being AFK`);
			}

			if (args[0] === 'set') {
				const reason = args.slice(1).join(' ');
				if (!reason) return message.channel.send('Provide a reason for going AFK');

				// eslint-disable-next-line new-cap
				await AFKSchema.findOneAndUpdate({
					_id: message.author.id,
					guildID: message.guild.id
				}, {
					_id: message.author.id,
					guildID: message.guild.id,
					reasons: reason
				}, {
					upsert: true
				});
				const embed = new MessageEmbed()
					.setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, size: 512 }))
					.setDescription(`is now AFK for \`${reason}\``);

				message.channel.send(embed);
			}

			if (args[0] === 'disable') {
				const AFKDelete = await AFKSchema.findOneAndDelete({
					_id: message.author.id,
					guildID: message.guild.id
				});
				if (!AFKDelete) {
					await AFKSchema.findOne({
						_id: message.author.id,
						guildID: message.guild.id
					});
					message.channel.send(`You're not AFK`);
				}
				if (AFKDelete) {
					const embed = new MessageEmbed()
						.setAuthor(`${message.author.tag} is no longer AFK`, message.author.displayAvatarURL({ dynamic: true, size: 512 }));

					message.channel.send(embed);
				}
			}
		} else if (!member.roles.cache.has(role)) {
			message.channel.send('This command requires Nitro!');
		}
	}

};
