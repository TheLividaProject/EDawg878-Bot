const Listener = require('../../../Structures/Listener');

module.exports = class extends Listener {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	async run() {
		var dogclan = [
			'dog clan'
		];


		this.client.on('message', async (message) => {
			if (message.author.bot) return;

			for (let i = 0; i < dogclan.length; i++) {
				if (message.content.toLowerCase().includes(dogclan[i])) {
					message.react('🐶');
				}
			}
		});
	}

};
