const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Bite someone',
			category: 'Interactive',
			usage: '<@member>'
		});
	}
	// eslint-disable-next-line consistent-return
	async run(message) {
		var bite = [
			`https://i.kym-cdn.com/photos/images/newsfeed/000/783/193/dc2.gif`,
			`https://i.gifer.com/Gxfs.gif`,
			`https://media1.tenor.com/images/2bc0ef61c59cada5e8653947f1e8035c/tenor.gif?itemid=16088516`,
			`https://thumbs.gfycat.com/NeedyEvenKangaroo-small.gif`,
			`https://thumbs.gfycat.com/UniqueThickGalapagosalbatross-small.gif`,
			`https://64.media.tumblr.com/7e2cad3ab0432205cdd5c37fab83d977/tumblr_ojh7gzPyeB1uzwbyjo1_400.gifv`,
			`https://giffiles.alphacoders.com/170/170905.gif`,
			`https://gifimage.net/wp-content/uploads/2017/09/anime-vampire-bite-gif-10.gif`,
			`https://i.imgur.com/fWSIugu.gif`,
			`https://media.giphy.com/media/12JGolbTNcGukw/giphy.gif`,
			`https://gifimage.net/wp-content/uploads/2017/09/anime-vampire-bite-gif-4.gif`
		];

		var text = [
			`Be careful!`,
			`UwU`,
			`Ouch that might hurt...`
		];

		var random = bite[Math.floor(Math.random() * bite.length)];
		var randomtext = text[Math.floor(Math.random() * text.length)];

		const user = message.mentions.members.first();
		if (!user) {
			return message.channel.send('Please specify a Member');
		}
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setDescription(`**${message.member.nickname || message.member.displayName} bites ${user.nickname || user.displayName}** ${randomtext}`)
			.setImage(random)
			.setTimestamp();

		message.channel.send(embed);
	}

};
