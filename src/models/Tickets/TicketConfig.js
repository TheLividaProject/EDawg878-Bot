const mongoose = require('mongoose');

const reqString = {
	type: String,
	required: true
};


// eslint-disable-next-line new-cap
const TicketConfigsSchema = mongoose.Schema({
	MessageID: reqString,
	GuildID: reqString,
	RoleIds: reqString,
	ParentID: reqString,
	TranscriptID: reqString
});

module.exports = mongoose.model('TicketConfigs', TicketConfigsSchema);
