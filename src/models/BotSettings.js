const mongoose = require('mongoose');

const reqString = {
	type: String,
	required: true
};

// eslint-disable-next-line new-cap
const BotSettingsSchema = mongoose.Schema({
	_id: reqString,
	BotID: reqString,
	CommandonlyID: reqString
});

module.exports = mongoose.model('botsettings', BotSettingsSchema);
