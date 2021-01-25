/* eslint-disable prefer-destructuring */
/* eslint-disable max-len */
const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

const flags = {
	DISCORD_EMPLOYEE: '<:staff:771519102404919337>',
	DISCORD_PARTNER: `<:partner:771506062640807936>`,
	BUGHUNTER_LEVEL_1: '<:bug_hunter_level_1:771534917993627669>',
	BUGHUNTER_LEVEL_2: '<:bug_hunter_level_2:771535210050748426>',
	HYPESQUAD_EVENTS: '<:hypesquad_events:771506736572923966>',
	HOUSE_BRAVERY: `<:bravery:771498429553311745>`,
	HOUSE_BRILLIANCE: `<:brilliance:771466012830859284>`,
	HOUSE_BALANCE: `<:balance:771498729584590858>`,
	EARLY_SUPPORTER: `<:supporter:771504905965666339>`,
	TEAM_USER: 'Team User',
	SYSTEM: 'System',
	VERIFIED_BOT: 'Verified Bot',
	VERIFIED_DEVELOPER: '<:bot_developer:771526343803273217>'
};


module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['ui'],
			description: 'Displays information about you or a user',
			category: 'Info',
			usage: '<@member>'
		});
	}

	async run(message, args) {
		const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

		if (member.presence.status === 'dnd') member.presence.status = '🔴 Do Not Disturb';
		if (member.presence.status === 'online') member.presence.status = '🟢 Online';
		if (member.presence.status === 'idle') member.presence.status = '🟠 Idle';
		if (member.presence.status === 'offline') member.presence.status = '⚪ offline';

		function game() {
			// eslint-disable-next-line no-shadow
			let game;
			if (member.presence.activities.length >= 1) game = `${member.presence.activities[0].name}`;
			else if (member.presence.activities.length < 1) game = 'None';
			return game;
		}

		// eslint-disable-next-line prefer-const
		let status = member.presence.status;

		const userFlags = member.user.flags.toArray();

		const embed = new MessageEmbed()
			.setAuthor(`${member.user.tag}`)
			.setFooter(`Requested by ${message.author.username}`)
			.setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
			.setTimestamp()
			.addFields(
				{ name: 'User ID', value: `${member.id}` },
				{ name: 'Account Created', value: `${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}` },
				{ name: 'Joined Guild', value: `${moment(member.joinedAt).format('LL LTS')}` },
				{ name: 'Badges', value: `${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}` },
				{ name: 'Status', value: status, inline: true },
				{ name: 'Game', value: game(), inline: true }
			);

		message.channel.send(embed);
	}

};
