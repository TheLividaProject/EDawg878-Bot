const { MessageEmbed } = require('discord.js');
const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			disableMentions: ['everyone'],
			aliases: ['commands'],
			category: 'Info'
		});
	}

	async run(message, [command]) {
		const embed = new MessageEmbed()
			.setColor('RED')
			.setTitle(`Prefix in ${message.guild.name} is \`${this.client.prefix}\``, message.guild.iconURL({ dynamic: true }))
			.setThumbnail(message.guild.iconURL({ dynamic: true }))
			.setFooter(`Requested by ${message.author.username}`)
			.setTimestamp();

		if (command) {
			const cmd = this.client.commands.get(command) || this.client.commands.get(this.client.aliases.get(command));

			if (!cmd) return message.channel.send(`Invalid Command name.`);


			embed.setAuthor(`${this.client.utils.capitalise(cmd.name)} Command Help`, this.client.user.displayAvatarURL());
			embed.setDescription([
				`Description: ${cmd.description}`,
				`Usage: ${cmd.usage}`,
				`Aliases: ${cmd.aliases.length ? cmd.aliases.map(alias => `\`${alias}\``).join(' ') : 'No Aliases'}`,
				`Category: ${cmd.category}`
			]);
			return message.channel.send(embed);
		} else {
			embed.setDescription([
				`These are the available commands!`
			]);
			let categories;
			if (!this.client.owners.includes(message.author.id)) {
				categories = this.client.utils.removeDuplicates(this.client.commands.filter(cmd => cmd.category !== 'Owner').map(cmd => cmd.category));
			} else {
				categories = this.client.utils.removeDuplicates(this.client.commands.map(cmd => cmd.category));
			}

			for (const category of categories) {
				embed.addField(`**${this.client.utils.capitalise(category)}**`, this.client.commands.filter(cmd =>
					cmd.category === category).map(cmd => `\`${cmd.name}\``).join(' '));
			}
			return message.channel.send(embed);
		}
	}

};
