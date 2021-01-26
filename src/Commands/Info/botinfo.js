const Command = require('../../Structures/Command');
const { MessageEmbed, version: djsversion } = require('discord.js');
const { utc } = require('moment');
const os = require('os');
const ms = require('ms');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Displays information about the bot',
			category: 'Info'
		});
	}

	async run(message) {
		// eslint-disable-next-line id-length
		const msg = await message.channel.send('Grabbing the bot information...');
		const core = os.cpus()[0];

		const latency = msg.createdTimestamp - message.createdTimestamp;
		const embed = new MessageEmbed()
			.setThumbnail(this.client.user.displayAvatarURL())
			.setColor(message.guild.me.displayHexColor || 'GREEN')
			.addFields(
				{ name: 'Users', value: `${this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, inline: true },
				{ name: 'Servers', value: `${this.client.guilds.cache.size.toLocaleString()}`, inline: true },
				{ name: 'Commands', value: `${this.client.commands.size}`, inline: true },
				{ name: 'Platform', value: `${process.platform}`, inline: true },
				{ name: 'Node.js', value: `${process.version}`, inline: true },
				{ name: 'Discord.js', value: `v${djsversion}`, inline: true },
				{ name: 'Uptime', value: `${ms(os.uptime() * 1000, { long: true })}`, inline: true },
				{ name: 'Mem Usage', value: `${this.client.utils.formatBytes(process.memoryUsage().heapUsed)}`, inline: true },
				{ name: 'Cores', value: `${os.cpus().length}`, inline: true },
				{ name: 'CPU', value: `${core.model}` },
				{ name: 'Created', value: `${utc(this.client.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`, inline: true },
				{ name: 'Ping', value: `${latency}ms`, inline: true },
				{ name: 'Shards', value: `${this.client.shard.count}`, inline: true },
				{ name: '\u200b', value: `Made by TheLividaProject#4397` }
			);
		msg.edit(embed);
	}

};
