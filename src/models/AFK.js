const mongoose = require('mongoose');

const reqString = {
	type: String,
	required: true
};

// eslint-disable-next-line new-cap
const AFKSchema = mongoose.Schema({
	_id: reqString,
	guildID: reqString,
	reasons: reqString
});

module.exports = mongoose.model('afks', AFKSchema);
