const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Tickle someone',
			category: 'Interactive',
			usage: '<@member>'
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message) {
		var tickle = [
			`https://media1.tenor.com/images/16662667791fc3275c25db595fdf89f8/tenor.gif?itemid=12374065`,
			`https://i.imgur.com/VD8nvU5.gif`,
			`https://i.pinimg.com/originals/fe/a7/9f/fea79fed0168efcaf1ddfb14d8af1a6d.gif`,
			`https://media1.tenor.com/images/eaef77278673333265da087f65941e48/tenor.gif?itemid=16574823`,
			`https://i.imgur.com/bt2ZRjJ.gif`,
			`https://64.media.tumblr.com/2d29fdbf47fd756caaea08f44b7eac92/tumblr_inline_ow4u7pIhWJ1u544cj_540.gif`,
			`https://i.gifer.com/EYO8.gif`,
			`https://78.media.tumblr.com/b6406e8acd03a03f83b55db5082fcad7/tumblr_ohs63qIx0R1vpbklao1_500.gif`
		];

		var text = [
			`Tickle Tickle!`,
			`UwU`,
			`It's tickle time!`
		];

		var random = tickle[Math.floor(Math.random() * tickle.length)];
		var randomtext = text[Math.floor(Math.random() * text.length)];

		const user = message.mentions.members.first();
		if (!user) {
			return message.channel.send('Please specify a Member');
		}
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setDescription(`**${message.member.nickname || message.member.displayName} tickles ${user.nickname || user.displayName}** ${randomtext}`)
			.setImage(random)
			.setTimestamp();
		message.channel.send(embed);
	}

};
