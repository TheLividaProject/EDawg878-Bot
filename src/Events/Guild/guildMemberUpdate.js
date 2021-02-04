const Event = require('../../Structures/Event.js');

const BotSettingsSchema = require('../../models/BotSettings');

module.exports = class extends Event {

	async run(oldMember, newMember) {
		const boost = await BotSettingsSchema.findOne({
			_id: newMember.guild.id
		});


		// Replace this ID with your Nitro role ID or use `${boost.NitroPerksID}` instead`
		const nitro = '585550054903906306';

		// You can remove this and replace perks as the Nitro role instead, was used to allow those who boosted to keep their perks once their boost has expiered
		const perks = `${boost.NitroPerksID}`;
		if (oldMember.roles.cache.size !== newMember.roles.cache.size) {
			if (!oldMember.roles.cache.has(nitro) && newMember.roles.cache.has(nitro)) {
				// Add or remove this file if not needed
				newMember.roles.add(perks);
			}
		}
	}

};
