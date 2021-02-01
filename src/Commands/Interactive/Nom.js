const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Noms someone',
			category: 'Interactive',
			usage: '<@member>'
		});
	}
	// eslint-disable-next-line consistent-return
	async run(message) {
		var nom = [
			`https://gfycat.com/charmingdarlingaustraliankelpie-nom-nom-nom-omnomnom.gif`,
			`https://media1.tenor.com/images/c688d2cf5c50569c74ce8e8d87c40935/tenor.gif?itemid=13341413`,
			`https://media1.tenor.com/images/ca21ec951e970fea09aa3955fa1a40fc/tenor.gif?itemid=13424193`,
			`https://i.imgur.com/Ns1RBzX.gif`,
			`https://media1.tenor.com/images/5878c0995fcf89352ff13189ee61f303/tenor.gif?itemid=15735907`,
			`https://data.whicdn.com/images/280828748/original.gif`,
			`https://i.chzbgr.com/full/8324406016/hD54E2ACA/om-nom.gif`,
			`https://i.chzbgr.com/full/8270595584/h4C52C87D/better-than-kisses.gif`,
			`https://i.imgur.com/PPX30X4.gif`,
			`https://media.giphy.com/media/l44QhGVbmCrPpbS6s/source.gif`,
			`https://thumbs.gfycat.com/SnarlingShortGlowworm-size_restricted.gif`,
			`https://i.imgur.com/dSOXQ4w.gif`,
			`https://media1.tenor.com/images/128c1cfb7f4e6ea4a4dce9b487648143/tenor.gif?itemid=12051598`,
			`https://pa1.narvii.com/6430/cb3fca465f2270270ff358b14a2e9de7cd6b4184_hq.gif`
		];

		var text = [
			`Cute!!`,
			`UwU`,
			`lewd~`,
			`How does it taste?!`,
			`Do they taste nice?!`
		];

		var random = nom[Math.floor(Math.random() * nom.length)];
		var randomtext = text[Math.floor(Math.random() * text.length)];

		const user = message.mentions.members.first();
		if (!user) {
			return message.channel.send('Please specify a Member');
		}
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setDescription(`**${message.member.nickname || message.member.displayName} noms ${user.nickname || user.displayName}** ${randomtext}`)
			.setImage(random)
			.setTimestamp();

		message.channel.send(embed);
	}

};
