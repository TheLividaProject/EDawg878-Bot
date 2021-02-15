const mongoose = require('mongoose');

var AutoIncrement = require('mongoose-sequence')(mongoose);

const reqString = {
	type: String,
	required: true
};

const reqBoolean = {
	type: Boolean,
	required: true
};

const reqInteger = {
	type: Number
};

// eslint-disable-next-line new-cap
const TicketsSchema = mongoose.Schema({
	TicketID: reqInteger,
	ChannelID: reqString,
	GuildID: reqString,
	Resolved: reqBoolean,
	ClosedMessagedID: reqString,
	AuthorID: reqString
});

// eslint-disable-next-line camelcase
TicketsSchema.plugin(AutoIncrement, { id: 'TicketID_seq', inc_field: 'TicketID' });

module.exports = mongoose.model('Tickets', TicketsSchema);
