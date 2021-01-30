const Listener = require('../../Structures/Listener');

const AFKSchema = require('../../models/AFK');

const { MessageEmbed } = require('discord.js');

module.exports = class extends Listener {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	async run() {
		this.client.on('message', async (message) => {
			if (!message.guild || message.author.bot) return;

			var target = message.mentions.users.first();
			if (!target) return;
			const results = await AFKSchema.find({
				_id: target.id,
				guildID: message.guild.id
			});

			const embed = new MessageEmbed();
			for (const result of results) {
				embed.setAuthor(`${target.tag} is AFK`, target.displayAvatarURL({ dynamic: true, size: 512 }));
				embed.setFooter(`${target.tag} was requested by ${message.author.username}`);
				embed.setColor(message.guild.me.displayHexColor || 'GREEN');
				embed.setDescription(`\`${result.reasons}\``);
				embed.setTimestamp();

				message.channel.send(embed);
			}
		});
	}

};
