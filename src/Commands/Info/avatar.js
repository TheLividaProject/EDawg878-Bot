const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['pfp', 'av'],
			description: "Displays yours or someone's profile avatar",
			category: 'Info',
			usage: '<@member>'
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message, args) {
		let user;

		if (!args[0]) user = message.author;

		if (args[0] && isNaN(args[0])) user = message.mentions.users.first();
		if (args[0] && !isNaN(args[0])) {
			user = this.client.users.cahce.get(args[0]);

			if (!message.guild.members.cache.has(args[0])) { return message.channel.send('Member was not found!'); }
		}
		if (!user.avatarURL()) { return message.channel.send("This member's profile picture has not been found!"); }

		const embed = new MessageEmbed()
			.setColor('RANDOM')
			.setDescription(`${user.tag}'s avatar`)
			.setImage(`${user.avatarURL({ dynamic: true })}?size=2048`)
			.setTimestamp();

		message.channel.send(embed);
	}

};
