const Event = require('../../Structures/Event.js');
const Guild = require('../../models/guild');

module.exports = class extends Event {

	async run(guild) {
		guild = new Guild({
			// eslint-disable-next-line new-cap
			_id: guild.id,
			prefix: this.client.prefix
		});

		guild.save()
			.then(result => console.log(result))
			.catch(err => console.error(err));

		console.log('Added to database!');
	}

};
