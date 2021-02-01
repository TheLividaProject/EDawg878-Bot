const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Boops someone',
			category: 'Interactive',
			usage: '<@member>'
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message) {
		var boop = [
			`https://i.imgur.com/xSvkpIh.gif`,
			`https://i.imgur.com/fZmUTgw.gif`,
			`https://i.imgur.com/rnVKSPG.gif`,
			`https://i.imgur.com/iH0C9oM.gif`,
			`https://66.media.tumblr.com/9a457a43bcae3ebaafda53d7fe6f572d/tumblr_pqjm6cCRt41th206io1_1280.gif`,
			`https://i.imgur.com/QDkTaFe.gif`,
			`https://media1.tenor.com/images/dbde71d42e747010b980422b88e77f9b/tenor.gif?itemid=16935420`,
			`https://media1.tenor.com/images/ad125db7ab72dfcd3868137309c5a251/tenor.gif?itemid=17682170`,
			`https://media1.tenor.com/images/175cc4686c4c67809f48eef44965c845/tenor.gif?itemid=10217135`,
			`https://imgur.com/787H2cR.gif`
		];

		var text = [
			`Not too hard!`,
			`UwU`,
			`Boop!`,
			`Wish I could be booped..`
		];

		var random = boop[Math.floor(Math.random() * boop.length)];
		var randomtext = text[Math.floor(Math.random() * text.length)];

		const user = message.mentions.members.first();
		if (!user) {
			return message.channel.send('Please specify a Member');
		}
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setDescription(`**${message.member.nickname || message.member.displayName} boops ${user.nickname || user.displayName}** ${randomtext}`)
			.setImage(random)
			.setTimestamp();

		message.channel.send(embed);
	}

};
