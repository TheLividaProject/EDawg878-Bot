const Listener = require('../../Structures/Listener');

module.exports = class extends Listener {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	async run() {
		this.client.on('message', async (message) => {
			if (message.author.bot) return;

			var kisses = [
				`😘`,
				`😚`,
				`😗`
			];

			var random = kisses[Math.floor(Math.random() * kisses.length)];

			if (message.content.toLowerCase() === 'now kiss') {
				message.react(random);
			}
		});
	}

};
