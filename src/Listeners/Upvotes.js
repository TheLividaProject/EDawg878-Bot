const Listener = require('../Structures/Listener');

module.exports = class extends Listener {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	async run() {
		this.client.on('message', (message) => {
			const { channel } = message;

			if (channel.type === 'news') {
				message.crosspost();
			}
		});
	}

};
