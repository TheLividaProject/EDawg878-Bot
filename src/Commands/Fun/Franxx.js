const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Displays Gifs of Zwo Two and others',
			category: 'Fun',
			usage: ''
		});
	}
	// eslint-disable-next-line consistent-return
	async run(message) {
		var franxx = [
			`https://i.imgur.com/zMrEkOj.gif`,
			`https://i.imgur.com/tamAKLf.gif`,
			`https://i.imgur.com/hM1rCSM.gif`,
			`https://i.imgur.com/HrUQ8Ci.gif`,
			`https://i.imgur.com/Qq5ZR0Z.gif`,
			`https://i.imgur.com/Uhmn0mc.gif`,
			`https://i.imgur.com/nC5zaAs.gif`,
			`https://i.imgur.com/GtKx7c8.gif`,
			`https://i.imgur.com/zNsG4iZ.gif`,
			`https://i.imgur.com/Bo0hg7m.gif`,
			`https://i.imgur.com/wqIe918.gif`,
			`https://i.imgur.com/1SDpeSp.gif`,
			`https://i.imgur.com/RmV4Fcc.gif`,
			`https://i.imgur.com/NXWFxbo.gif`,
			`https://i.imgur.com/U7QRv6T.gif`,
			`https://i.imgur.com/MzKsi4i.gif`,
			`https://i.imgur.com/BYxwpMO.gif`,
			`https://i.imgur.com/9xmbjee.gif`,
			`https://blog.sakugabooru.com/wp-content/uploads/2018/01/masatana2.gif`,
			`https://i.imgur.com/TfcF6jb.gif`,
			`https://i.pinimg.com/originals/d3/4d/09/d34d096dcc353904428e2a4be4507f75.gif`,
			`https://i.imgur.com/eoEj4i8.gif`,
			`https://data.whicdn.com/images/311975854/original.gif`,
			`https://media4.giphy.com/media/1g2JvdxA9n4e2pO8ar/giphy.gif`,
			`https://cdn130.picsart.com/307207513111201.gif?to=min&r=640`,
			`https://data.whicdn.com/images/312776837/original.gif`,
			`https://thumbs.gfycat.com/CloudyEuphoricEarthworm-max-1mb.gif`,
			`https://64.media.tumblr.com/862f04e20e9f7d5c1369b85aa6a0d046/tumblr_p2inoedx9E1v1hotuo1_500.gifv`,
			`https://i.pinimg.com/originals/cc/18/87/cc188729ad65d68aae6265dd5d1bb9b0.gif`
		];

		var random = franxx[Math.floor(Math.random() * franxx.length)];

		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setImage(random)
			.setTimestamp();

		message.channel.send(embed);
	}

};
