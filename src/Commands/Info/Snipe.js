const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Snipes a deleted message',
			category: 'Fun'
		});
	}

	run(message) {
		const msg = this.client.snipes.get(message.guild.id);

		const embed = new MessageEmbed()
			.setAuthor(msg.author, msg.member.user.displayAvatarURL())
			.setDescription(`\`\`\`${msg.content}\`\`\``)
			.setFooter('Get Sniped!');

		message.channel.send(embed);
	}

};
