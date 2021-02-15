const Listener = require('../../Structures/Listener');

module.exports = class extends Listener {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	async run() {
		this.client.on('messageDelete', async (message) => {
			if (message.author.bot) return;

			this.client.snipes.set(message.guild.id, {
				content: message.content,
				author: message.author.tag,
				member: message.member,
				image: message.attachments.first() ? message.attachments.first.proxyURL : null
			});
		});
	}

};
