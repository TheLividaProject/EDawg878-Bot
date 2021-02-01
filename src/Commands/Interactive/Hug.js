const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Hugs someone',
			category: 'Interactive',
			usage: '<@member>'
		});
	}
	// eslint-disable-next-line consistent-return
	async run(message) {
		var hug = [
			`https://media0.giphy.com/media/l2QDM9Jnim1YVILXa/source.gif`,
			`https://i.imgur.com/4oLIrwj.gif`,
			`https://i.imgur.com/UMm95sV.gif`,
			`https://i.imgur.com/ntqYLGl.gif`,
			`https://i.imgur.com/diqFHSS.gif`,
			`https://i.imgur.com/snm8S1B.gif`,
			`https://i.imgur.com/e5yy6aF.gif`,
			`https://i.imgur.com/rkNqnfy.gif`,
			`https://i.imgur.com/YWodUk2.gif`,
			`https://i.imgur.com/hM0GKmI.gif`,
			`https://i.imgur.com/oOZx9ZD.gif`,
			`https://i.imgur.com/bT766fG.gif`
		];

		var text = [
			`Don't squeeze too hard!`,
			`UwU`,
			`That was a big hug!`
		];

		var random = hug[Math.floor(Math.random() * hug.length)];
		var randomtext = text[Math.floor(Math.random() * text.length)];

		const user = message.mentions.members.first();
		if (!user) {
			return message.channel.send('Please specify a Member');
		}
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setDescription(`**${message.member.nickname || message.member.displayName} hugs ${user.nickname || user.displayName}** ${randomtext}`)
			.setImage(random)
			.setTimestamp();

		message.channel.send(embed);
	}

};
