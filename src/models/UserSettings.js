const mongoose = require('mongoose');

const reqString = {
	type: String,
	required: true
};

// eslint-disable-next-line new-cap
const UserSettingsSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	guildID: reqString,
	userID: reqString,
	upvotesdms: reqString
});

module.exports = mongoose.model('usersettings', UserSettingsSchema);
