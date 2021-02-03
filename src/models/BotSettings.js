const mongoose = require('mongoose');

const reqString = {
	type: String,
	required: true
};

// eslint-disable-next-line new-cap
const BotSettingsSchema = mongoose.Schema({
	_id: reqString,
	CommandonlyID: String,
	NitroPerksID: String
});

module.exports = mongoose.model('botsettings', BotSettingsSchema);
