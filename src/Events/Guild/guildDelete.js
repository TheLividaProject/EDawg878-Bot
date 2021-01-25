const Event = require('../../Structures/Event.js');

const Guild = require('../../models/guild');

module.exports = class extends Event {

	async run(guild) {
		Guild.findOneAndDelete({
			_id: guild.id
		}, (err) => {
			if (err) console.error(err);
			console.log('Deleting from the database');
		});
	}

};
