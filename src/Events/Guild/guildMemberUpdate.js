const Event = require('../../Structures/Event.js');

module.exports = class extends Event {

	async run(oldMember, newMember) {
		const booster = '585550054903906306';
		const perks = '693207274818240602';
		if (oldMember.roles.cache.size !== newMember.roles.cache.size) {
			if (!oldMember.roles.cache.has(booster) && newMember.roles.cache.has(booster)) {
				newMember.roles.add(perks);
			}
		}
	}

};
