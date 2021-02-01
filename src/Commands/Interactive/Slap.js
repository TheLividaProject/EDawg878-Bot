const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Slaps someone',
			category: 'Interactive',
			usage: '<@member>'
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message) {
		var slap = [
			`https://i.imgur.com/o2SJYUS.gif`,
			`https://i.imgur.com/4MQkDKm.gif`,
			`https://i.imgur.com/oOCq3Bt.gif`,
			`https://i.imgur.com/oRsaSyU.gif`,
			`https://i.imgur.com/CwbYjBX.gif`,
			`https://i.imgur.com/BYeAoax.gif`,
			`https://i.imgur.com/XzWLjw1.gif`,
			`https://i.imgur.com/SyIghy4.gif`,
			`https://i.imgur.com/ffVbqnq.gif`,
			`https://cdn.quotesgram.com/img/50/92/797193858-UXqzzab.gif`,
			`https://i.imgur.com/RKegLkw.gif`,
			`https://i.imgur.com/EB2KYOf.gif`,
			`https://s-media-cache-ak0.pinimg.com/originals/65/57/f6/6557f684d6ffcd3cd4558f695c6d8956.gif`
		];

		var text = [
			`oof, this stings`,
			`You deserve it!`,
			`Ouch this hurts`
		];

		var random = slap[Math.floor(Math.random() * slap.length)];
		var randomtext = text[Math.floor(Math.random() * text.length)];

		const user = message.mentions.members.first();
		if (!user) {
			return message.channel.send('Please specify a Member');
		}
		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setDescription(`**${message.member.nickname || message.member.displayName} slaps ${user.nickname || user.displayName}** ${randomtext}`)
			.setImage(random)
			.setTimestamp();

		message.channel.send(embed);
	}

};
