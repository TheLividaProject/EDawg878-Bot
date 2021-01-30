const Listener = require('../../Structures/Listener');

module.exports = class extends Listener {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	async run() {
		var catclan = [
			`cats`,
			`cat`
		];


		this.client.on('message', async (message) => {
			if (message.author.bot) return;

			for (let i = 0; i < catclan.length; i++) {
				if (message.content.toLowerCase() === catclan[i]) {
					message.react('🐱');
				}
			}
		});
	}

};
