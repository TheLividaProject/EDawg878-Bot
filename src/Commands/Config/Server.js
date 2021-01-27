const Command = require('../../Structures/Command');

const fetch = require('node-fetch');
const { EDawagServerAPI } = require('../../../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			category: 'Admin',
			userPerms: ['MANAGE_GUILD']
		});
	}


	// eslint-disable-next-line consistent-return
	async run(message, args) {
		const messageArray = message.content.split(' ');
		const ID = messageArray.slice(2);

		if (message.channel.id === '625785615069478932') {
			const toggling = ['start', 'restart', 'stop', 'display'];
			if (!toggling.includes(args[0])) {
				const embed = new MessageEmbed()
					.setAuthor('Server Admin Commands')
					.setDescription(`${this.client.prefix}server start <ID>\n\n${this.client.prefix}server restart <ID>\n\n${this.client.prefix}server stop <ID>\n\n${this.client.prefix}server display`);

				message.channel.send(embed);
			}

			if (args[0] === 'start') {
				if (ID) {
					const servers = await fetch(`https://panel.edawg878.com/api/client/servers/${ID}/power`, {
						body: JSON.stringify({
							signal: 'start'
						}),
						headers: {
							Authorization: `Bearer ${EDawagServerAPI}`,
							'Content-Type': 'application/json'
						},
						method: 'POST'
					});

					if (servers.status === 204) {
						const started = await fetch(`https://panel.edawg878.com/api/client/servers/${ID}`, {
							headers: {
								Authorization: `Bearer ${EDawagServerAPI}`,
								'Content-Type': 'application/json'
							},
							method: 'GET'
						})
							.then(result => result.json());

						const embed = new MessageEmbed()
							.setAuthor(`${started.attributes.name} is now starting`)
							.setColor('GREEN');

						message.channel.send(embed);
					}

					if (servers.status === 404) {
						message.channel.send('Please provide an ID of a server!');
					}
				}
			}

			if (args[0] === 'restart') {
				if (ID) {
					const servers = await fetch(`https://panel.edawg878.com/api/client/servers/${ID}/power`, {
						body: JSON.stringify({
							signal: 'restart'
						}),
						headers: {
							Authorization: `Bearer ${EDawagServerAPI}`,
							'Content-Type': 'application/json'
						},
						method: 'POST'
					});

					if (servers.status === 204) {
						const started = await fetch(`https://panel.edawg878.com/api/client/servers/${ID}`, {
							headers: {
								Authorization: `Bearer ${EDawagServerAPI}`,
								'Content-Type': 'application/json'
							},
							method: 'GET'
						})
							.then(result => result.json());

						const embed = new MessageEmbed()
							.setAuthor(`${started.attributes.name} is now restarting`)
							.setColor('ORANGE');

						message.channel.send(embed);
					}

					if (servers.status === 404) {
						message.channel.send('Please provide an ID of a server!');
					}
				}
			}

			if (args[0] === 'stop') {
				if (ID) {
					const servers = await fetch(`https://panel.edawg878.com/api/client/servers/${ID}/power`, {
						body: JSON.stringify({
							signal: 'stop'
						}),
						headers: {
							Authorization: `Bearer ${EDawagServerAPI}`,
							'Content-Type': 'application/json'
						},
						method: 'POST'
					});

					if (servers.status === 204) {
						const started = await fetch(`https://panel.edawg878.com/api/client/servers/${ID}`, {
							headers: {
								Authorization: `Bearer ${EDawagServerAPI}`,
								'Content-Type': 'application/json'
							},
							method: 'GET'
						})
							.then(result => result.json());

						const embed = new MessageEmbed()
							.setAuthor(`${started.attributes.name} is now offline`)
							.setColor('RED');

						message.channel.send(embed);
					}

					if (servers.status === 404) {
						message.channel.send('Please provide an ID of a server!');
					}
				}
			}

			if (args[0] === 'display') {
				const embed = new MessageEmbed()
					.setAuthor('IDs')
					.setColor('RANDOM')
					.addFields(
						{ name: 'S2 ID', value: `f5179972`, inline: true }
					);

				message.channel.send(embed);
			}
		}
	}

};
