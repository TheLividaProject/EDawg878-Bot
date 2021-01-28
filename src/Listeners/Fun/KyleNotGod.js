const Listener = require('../../Structures/Listener');

module.exports = class extends Listener {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	async run() {
		var normalmessages = [
			`kyle is a god`,
			`kyle is god`,
			`Kyle is @ god`
		];

		var kylemessages = [
			`i am a god`,
			`i am god`,
			`i @m a god`,
			`i am @ god`
		];

		var nogod = [
			`Kyle is not a god!`,
			`Kyle is not god!`,
			`Kyle will never be my god, be a good dog and sit.`,
			`If Kyle was a god, he would be a trash one, you're just a dog so sit already!`
		];

		var random = nogod[Math.floor(Math.random() * nogod.length)];

		this.client.on('message', async (message) => {
			if (message.author.bot) return;

			const { content } = message;

			for (let i = 0; i < normalmessages.length; i++) {
				if (content.toLowerCase().includes(normalmessages[i])) {
					message.reply(random);
				}
			}

			if (message.author.id === '320974316542099456') {
				for (let i = 0; i < kylemessages.length; i++) {
					if (content.toLowerCase().includes(kylemessages[i])) {
						message.reply(random);
					}
				}
			}
		});
	}

};
