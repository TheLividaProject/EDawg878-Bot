const Command = require('../../Structures/Command');

const { MessageEmbed } = require('discord.js');


module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Usersettings - Displays all the settings for you to turn on and off',
			category: 'Config'
		});
	}


	// eslint-disable-next-line consistent-return
	async run(message) {
		const embed = new MessageEmbed()
			.setAuthor(`${message.member.displayName} User Settings`, message.member.user.displayAvatarURL())
			.addFields(
				{ name: `Upvotes Settings`, value: `${this.client.prefix}upvotes dms - toggles off/on dm once your upvote gets the require amount - On by default` }
			);

		message.channel.send(embed);
	}

};
