const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Pat someone',
			category: 'Interactive',
			usage: '<@member>'
		});
	}
	// eslint-disable-next-line consistent-return
	async run(message) {
		var pat = [
			`https://media1.tenor.com/images/da8f0e8dd1a7f7db5298bda9cc648a9a/tenor.gif?itemid=12018819`,
			`https://media.tenor.com/images/a671268253717ff877474fd019ef73e9/tenor.gif`,
			`https://i.pinimg.com/originals/2e/27/d5/2e27d5d124bc2a62ddeb5dc9e7a73dd8.gif`,
			`https://i.imgur.com/UWbKpx8.gif`,
			`https://media1.tenor.com/images/d7c326bd43776f1e0df6f63956230eb4/tenor.gif?itemid=17187002`,
			`https://i.gifer.com/KJ42.gif`,
			`https://community.gamepress.gg/uploads/default/original/3X/7/e/7edae228fce7c05b1a1c9c27f78e0fb668ef2c65.gif`,
			`https://i.pinimg.com/originals/e3/b9/aa/e3b9aa35a964c4861d1b77cc20aba89a.gif`,
			`https://media1.tenor.com/images/6151c42c94df654b1c7de2fdebaa6bd1/tenor.gif?itemid=16456868`,
			`https://thumbs.gfycat.com/FantasticEmptyBluewhale-small.gif`,
			`https://64.media.tumblr.com/584a3894e3483eed23d1afaf1f6f9347/tumblr_ok1oplyzSF1r0tp5lo1_400.gifv`,
			`https://64.media.tumblr.com/674a6801821c90f9f6a398df2184f395/tumblr_oun7zbWzBO1tgebsfo1_500.gifv`,
			`https://i.pinimg.com/originals/70/96/0e/70960e87fb9454df6a1d15c96c9ad955.gif`,
			`https://i.pinimg.com/originals/a0/6d/65/a06d65ad49f019aaae3f30fb872df619.gif`
		];

		var text = [
			`Cute!!`,
			`UwU`,
			`Pat Pat!`,
			`How Adorable!`
		];

		var random = pat[Math.floor(Math.random() * pat.length)];
		var randomtext = text[Math.floor(Math.random() * text.length)];

		const user = message.mentions.members.first();
		if (!user) {
			return message.channel.send('Please specify a Member');
		}
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setDescription(`**${message.member.nickname || message.member.displayName} pats ${user.nickname || user.displayName}** ${randomtext}`)
			.setImage(random)
			.setTimestamp();

		message.channel.send(embed);
	}

};
