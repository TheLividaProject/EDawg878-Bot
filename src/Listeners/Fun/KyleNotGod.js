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

			if (message.content.toLowerCase().includes('kyle is a god')) {
				message.reply('Kyle is not a god!');
			}

			if (message.content.toLowerCase().includes('kyle is god')) {
				message.reply('Kyle is not god!');
			}

			if (message.author.id === '320974316542099456') {
				if (message.content.toLowerCase().includes('i am a god')) {
					message.reply(`You're not a god, be a good dog and sit.`);
				}

				if (message.content.toLowerCase().includes('i am god')) {
					message.reply(`You're not a god, be a good dog and sit.`);
				}
			}
		});
	}

};
