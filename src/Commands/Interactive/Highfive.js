const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Highfive someone',
			category: 'Interactive',
			usage: '<@member>'
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message) {
		var highfive = [
			`https://media1.tenor.com/images/7b1f06eac73c36721912edcaacddf666/tenor.gif?itemid=10559431`,
			`https://media.tenor.com/images/a506dd0b87c41f1988e4bddf7dc2062d/tenor.gif`,
			`https://media.tenor.com/images/5628f231595350b459d6bf8278cc5e59/tenor.gif`,
			`https://media1.tenor.com/images/ce85a2843f52309b85515f56a0a49d06/tenor.gif?itemid=14137077`,
			`https://i.imgur.com/VqDPSbA.gif`,
			`https://lh6.googleusercontent.com/hIRp_xCGjt6x5H5GSu9odKA9WPagzrMYPtT-Ow-Nte0AeHoMY4MUTlnxrZkJK248JAqNiBVi_9iaU3eYS2bWXtcdJFjsnrAV8i2H_iN5pjWWHDN6djKm2E-h3MQMUvM2DkoO3M7e`,
			`https://i.imgur.com/Pr1rEzX.gif`,
			`https://i.imgur.com/MMr5SnV.gif?noredirect`
		];

		var text = [
			`Not too hard!`,
			`UwU`,
			`Highfive!!`
		];

		var random = highfive[Math.floor(Math.random() * highfive.length)];
		var randomtext = text[Math.floor(Math.random() * text.length)];

		const user = message.mentions.members.first();
		if (!user) {
			return message.channel.send('Please specify a Member');
		}
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setDescription(`**${message.member.nickname || message.member.displayName} highfives ${user.nickname || user.displayName}** ${randomtext}`)
			.setImage(random)
			.setTimestamp();

		message.channel.send(embed);
	}

};
