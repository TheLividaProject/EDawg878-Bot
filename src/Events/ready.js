/* eslint-disable camelcase */
const Event = require('../Structures/Event');

module.exports = class extends Event {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	async run() {
		if (this.client.shard.ids[0] === 0) console.log(`Loaded ${this.client.commands.size} Commands`);
		if (this.client.shard.ids[0] === 0) console.log(`Loaded ${this.client.events.size} Events`);
		if (this.client.shard.ids[0] === 0) console.log(`Loaded ${this.client.listeners.size} Listeners`);

		console.log([
			`${this.client.user.tag} has logged in!`,
			`${this.client.user.tag} is running in ${this.client.guilds.cache.size} Servers.`
		].join('\n'));
		const statuses = [
			`${this.client.guilds.cache.size} servers! | -help`,
			`edawg878.com | -help`
		];

		setInterval(() => {
			const status = statuses[Math.floor(Math.random() * statuses.length)];
			this.client.user.setActivity(status, { type: 'WATCHING' });
		}, 50000);

		// Emojis
		const guild = this.client.guilds.cache.get('734219399925334106');

		const boop = [], animated = [];
		guild.emojis.cache.forEach(emoji => emoji.animated ? animated.push([emoji.id, emoji.name]) : boop.push([emoji.id, emoji.name]));
	}

};
