const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Provides information about the server',
			category: 'Info'
		});
	}
	run(message) {
		const { guild } = message;

		const { name, region, owner, premiumSubscriptionCount, premiumTier, memberCount } = guild;

		const channels = message.guild.channels.cache;
		const members = message.guild.members.cache;
		const emojis = message.guild.emojis.cache;
		const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());

		const embed = new MessageEmbed()
			.setAuthor(`${name}`, message.guild.iconURL())
			.setThumbnail(message.guild.iconURL({ dynamic: true }))
			.setFooter(name)
			.setTimestamp()
			.addFields({
				name: '**Region**',
				value: region
			}, {
				name: '**Owner**',
				value: `👑 ${owner}`,
				inline: true
			}, {
				name: '**Boosts**',
				value: `<:Boosts:771540155236352021> ${premiumSubscriptionCount} (Tier ${premiumTier})`,
				inline: true
			}, {
				name: '**Members**',
				value: `Total Members ${memberCount} | Online ${members.filter(member => !member.user.bot).size} | Bots ${members.filter(member => member.user.bot).size}`
			}, {
				name: '**Roles Count**',
				value: `${roles.length} Roles`,
				inline: true
			}, {
				name: '**Emojis Count**',
				value: `😝 ${emojis.size} Emojis`,
				inline: true
			}, {
				name: '**Channels Count**',
				value: `🔊 ${channels.filter(channel => channel.type === 'voice').size} Voice & #️⃣ ${channels.filter(channel => channel.type === 'text').size} Text`
			}, {
				name: '**Server Created**',
				value: `📆 ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`
			});

		message.channel.send(embed);
	}

};
