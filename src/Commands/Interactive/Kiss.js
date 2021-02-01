const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Kisses someone',
			category: 'Interactive',
			usage: '<@member>'
		});
	}
	// eslint-disable-next-line consistent-return
	async run(message) {
		var kiss = [
			`https://i.imgur.com/WVSwvm6.gif`,
			`https://i.imgur.com/II1bakc.gif`,
			`https://i.imgur.com/7GhTplD.gif`,
			`https://i.imgur.com/8YZFU1Z.gif`,
			`https://i.imgur.com/TDVZwUB.gif`,
			`https://i.imgur.com/Uow8no2.gif`,
			`https://i.imgur.com/gWIm5bK.gif`,
			`https://i.imgur.com/KSiA3Ws.gif`,
			`https://i.imgur.com/PKOsDVW.gif`,
			`https://i.imgur.com/OE7lSSY.gif`,
			`https://i.imgur.com/sZhtvBR.gif`,
			`https://i.imgur.com/9y34cfo.gif`,
			`https://i.pinimg.com/originals/11/8a/c9/118ac94d9f00f9b668223113a5944af4.gif`,
			`https://i.pinimg.com/originals/55/ef/40/55ef40a8b82352c58442c379ecced7e7.gif`,
			`https://i.pinimg.com/originals/2d/20/e8/2d20e85bf5a1c206a894e98f473d4dfd.gif`,
			`https://cdn.lowgif.com/small/6fbc7a8cac4f5e6d-anime-boy-couple-gif-on-gifer-by-sharpdragon.gif`,
			`https://media1.tenor.com/images/3710cbd850edafb4927d7fdad23a9e6f/tenor.gif?itemid=17370702`,
			`https://media1.tenor.com/images/c4878b4a83169cdc2ce8c1eb08e23394/tenor.gif?itemid=10356310`,
			`https://i.pinimg.com/originals/fe/05/b2/fe05b2029b430312deb33c3d98acda65.gif`,
			`https://i.pinimg.com/originals/2b/52/71/2b5271e20fa65925e07d0338fa290135.gif`,
			`https://media1.giphy.com/media/oHZPerDaubltu/giphy.gif`,
			`https://cutewallpaper.org/21/kiss-anime-girl/Girl-Anime-GIF-Girl-Anime-KissAnime-Discover-and-Share-GIFs.gif`,
			`https://acegif.com/wp-content/uploads/anime-kiss-m.gif`,
			`https://i.pinimg.com/originals/e0/0f/31/e00f3104927ae27d7d6a32393d163176.gif`,
			`https://media0.giphy.com/media/G3va31oEEnIkM/200.gif`,
			`https://64.media.tumblr.com/516d3c90b0a5e4bc74884a848d2fab74/tumblr_my3axeXw7i1rkdih3o6_r1_500.gif`,
			`https://cdn.discordapp.com/attachments/702932108288458772/746688535138009138/image0.gif`,
			`https://cutewallpaper.org/21/animated-girl-kiss/Anime-Girl-GIF-Anime-Girl-Kiss-Discover-Share-GIFs.gif`
		];

		var text = [
			`Cute!!`,
			`UwU`,
			`lewd~`,
			`How does it taste?!`,
			`Do they taste nice?!`
		];

		var random = kiss[Math.floor(Math.random() * kiss.length)];
		var randomtext = text[Math.floor(Math.random() * text.length)];

		const user = message.mentions.members.first();
		if (!user) {
			return message.channel.send('Please specify a Member');
		}
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setDescription(`**${message.member.nickname || message.member.displayName} kisses ${user.nickname || user.displayName}** ${randomtext}`)
			.setImage(random)
			.setTimestamp();

		message.channel.send(embed);
	}

};
