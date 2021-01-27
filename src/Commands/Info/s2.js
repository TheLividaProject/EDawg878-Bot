const Command = require('../../Structures/Command');

const fetch = require('node-fetch');
const { EDawagServerAPI } = require('../../../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			category: 'Info'
		});
	}


	// eslint-disable-next-line consistent-return
	async run(message) {
		const servers = await fetch(`https://panel.edawg878.com/api/client/servers/f5179972/utilization`, {
			headers: {
				Authorization: `Bearer ${EDawagServerAPI}`,
				'Content-Type': 'application/json'
			},
			method: 'GET'
		})
			.then(result => result.json());

		if (servers.attributes.state === 'on') {
			const embed = new MessageEmbed()
				.setAuthor(`S2 is online`)
				.setColor('GREEN');

			message.channel.send(embed);
		}

		if (servers.attributes.state === 'off') {
			const embed = new MessageEmbed()
				.setAuthor(`S2 is offline!`)
				.setDescription('If this is an error please contact one of our Staff Members!')
				.setColor('RED');

			message.channel.send(embed);
		}
	}

};
