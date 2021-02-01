const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Licks someone',
			category: 'Interactive',
			usage: '<@member>'
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message) {
		var lick = [
			`https://i.imgur.com/QDpVqHe.gif`,
			`https://i.imgur.com/uALJJV2.gif`,
			`https://i.imgur.com/ZbAcxet.gif`,
			`https://i.imgur.com/7f80mYZ.gif`,
			`https://i.imgur.com/mCLNteg.gif`,
			`https://media.tenor.com/images/c88e04673ea5922326188ab925fe23e8/tenor.gif`
		];

		var text = [
			`lewd~`,
			`UwU`,
			`How does it taste?!`,
			`Do they taste nice?!`
		];

		var random = lick[Math.floor(Math.random() * lick.length)];
		var randomtext = text[Math.floor(Math.random() * text.length)];

		const user = message.mentions.members.first();
		if (!user) {
			return message.channel.send('Please specify a Member');
		}
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setDescription(`**${message.member.nickname || message.member.displayName} licks ${user.nickname || user.displayName}** ${randomtext}`)
			.setImage(random)
			.setTimestamp();

		message.channel.send(embed);
	}

};
