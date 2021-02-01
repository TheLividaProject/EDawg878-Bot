const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Kill someone',
			category: 'Interactive',
			usage: '<@member>'
		});
	}


	// eslint-disable-next-line consistent-return
	async run(message) {
		var kill = [
			`https://i.imgur.com/uvzrHa1.gif`,
			`https://i.imgur.com/skXvyhp.gif`,
			`https://media1.tenor.com/images/fbcd2c524059569f19e7a192f04893b5/tenor.gif`,
			`https://i.kym-cdn.com/photos/images/newsfeed/001/208/163/5e8.gif`,
			`https://i.imgur.com/VM0TwyH.gif`,
			`https://i.imgur.com/VCrDz6C.gif`,
			`https://media.tenor.com/images/3a829ad88f8d27baca103d4b54c9f653/tenor.gif`,
			`https://media1.tenor.com/images/b793b28df2ff012206277e5c4c18eea6/tenor.gif?itemid=17641117`
		];

		var text = [
			`oof!!`,
			`Oh my...`,
			`That was Brutal!`,
			`I'm scared!`
		];

		var random = kill[Math.floor(Math.random() * kill.length)];
		var randomtext = text[Math.floor(Math.random() * text.length)];

		const user = message.mentions.members.first();
		if (!user) {
			return message.channel.send('Please specify a Member');
		}
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setDescription(`**${message.member.nickname || message.member.displayName} killed ${user.nickname || user.displayName}** ${randomtext}`)
			.setImage(random)
			.setTimestamp();

		message.channel.send(embed);
	}

};
