const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Punches someone',
			category: 'Interactive',
			usage: '<@member>'
		});
	}


	// eslint-disable-next-line consistent-return
	async run(message) {
		var punch = [
			`https://i.imgur.com/4YbFkhU.gif`,
			`https://i.imgur.com/7jErgl1.gif`,
			`https://i.imgur.com/q6qjskO.gif`,
			`https://i.imgur.com/GsMjksq.gif`,
			`https://i.imgur.com/B5wtdpE.gif`,
			`https://i.imgur.com/g91XPGA.gif`,
			`https://i.imgur.com/nwGsg12.gif`,
			`https://i.imgur.com/bRWRAcE.gif`,
			`https://i.pinimg.com/originals/2b/5d/7b/2b5d7bb1dd4a8e64869c33499c409582.gif`,
			`https://i.imgur.com/GfyKm1x.gif`,
			`https://i.pinimg.com/originals/f3/ec/8c/f3ec8c256cb22279c14bfdc48c92e5ab.gif`,
			`https://media.tenor.com/images/431be3a1e5a045fc8db2ce66658bd2f8/tenor.gif`,
			`https://media.tenor.com/images/69ad4b206d32b442e066cdcf7d8822e1/tenor.gif`
		];

		var text = [
			`OUCH! that hurt!`,
			`Get wacked!`,
			`You deserve it!`,
			`I'm scared!`
		];

		var random = punch[Math.floor(Math.random() * punch.length)];
		var randomtext = text[Math.floor(Math.random() * text.length)];

		const user = message.mentions.members.first();
		if (!user) {
			return message.channel.send('Please specify a Member');
		}
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setDescription(`**${message.member.nickname || message.member.displayName} punched ${user.nickname || user.displayName}** ${randomtext}`)
			.setImage(random)
			.setTimestamp();

		message.channel.send(embed);
	}

};
