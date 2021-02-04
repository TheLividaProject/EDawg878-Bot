const Listener = require('../../../Structures/Listener');

module.exports = class extends Listener {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	async run() {
		var dogclan = [
			`dogs`,
			`dog`,
			'dog clan'
		];


		this.client.on('message', async (message) => {
			if (message.author.bot) return;

			for (let i = 0; i < dogclan.length; i++) {
				if (message.content.toLowerCase() === dogclan[i]) {
					message.react('<:doggy:806930755828711504>');
				}
			}
		});
	}

};
