const mongoose = require('mongoose');

const reqString = {
	type: String,
	required: true
};

// eslint-disable-next-line new-cap
const UpVotesSchema = mongoose.Schema({
	_id: reqString,
	upvotes: reqString,
	channelID: String
});

module.exports = mongoose.model('Upvotes', UpVotesSchema);
