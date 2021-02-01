const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Bonk someone',
			category: 'Interactive',
			usage: '<@member>'
		});
	}
	// eslint-disable-next-line consistent-return
	async run(message) {
		var bonk = [
			`https://i.gifer.com/FoFy.gif`,
			`https://media1.tenor.com/images/347f852d3dfa48502406fa949fcc1449/tenor.gif?itemid=15150394`,
			`https://media.tenor.com/images/5dece08ee566262a54aa8e62ae915f2d/tenor.gif`,
			`https://i.imgur.com/0IxjsfM.gif`,
			`https://thumbs.gfycat.com/QuarterlyPracticalAchillestang-size_restricted.gif`,
			`https://media1.tenor.com/images/4fac5e395cefca8eafe5b844ec7c08cd/tenor.gif?itemid=11028126`,
			`https://i.kym-cdn.com/photos/images/original/001/716/464/d19.gif`,
			`https://i.imgur.com/DIAbFlT.gif`,
			`https://media.tenor.com/images/3f95e6ffba6a00565aebb4844ab4f578/tenor.gif`,
			`https://i.kym-cdn.com/photos/images/original/001/103/938/336.gif`,
			`https://i.imgur.com/MAVGS.gif`,
			`https://media1.giphy.com/media/3o7TKBOPWDLbypGYbC/source.gif`,
			`https://media1.tenor.com/images/194c7b9dd6fdc1e1580afca803a26d3a/tenor.gif?itemid=16570141`,
			`https://media1.tenor.com/images/ec209369aec44130b42a76927f3620eb/tenor.gif?itemid=11028129`,
			`https://media1.tenor.com/images/bc8d9395166b82df05d590459f184f2d/tenor.gif?itemid=16061390`,
			`https://64.media.tumblr.com/13161e10ac398492e0146d6aa26f8f53/1e712bb6b48a71fc-ed/s250x400/fc1e91020701557876200f097325f34fe6809d9c.gifv`,
			`https://i.imgur.com/yGacW.gif`
		];

		var text = [
			`Ow`,
			`UwU`,
			`Bonk!`
		];

		var random = bonk[Math.floor(Math.random() * bonk.length)];
		var randomtext = text[Math.floor(Math.random() * text.length)];

		const user = message.mentions.members.first();
		if (!user) {
			return message.channel.send('Please specify a Member');
		}
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setDescription(`**${message.member.nickname || message.member.displayName} bonks ${user.nickname || user.displayName}** ${randomtext}`)
			.setImage(random)
			.setTimestamp();

		message.channel.send(embed);
	}

};
