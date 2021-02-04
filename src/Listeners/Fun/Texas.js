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

			if (message.content.toLowerCase() === 'texas') {
				// eslint-disable-next-line no-unused-expressions
				Math.random() < 0.5 ? message.react('<:Texas:640608092404318211>') : message.react('<:texasmap:650568679104446475>');
			}
		});
	}

};
