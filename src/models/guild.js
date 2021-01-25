const mongoose = require('mongoose');

// eslint-disable-next-line new-cap
const guildSchema = mongoose.Schema({
	_id: String,
	prefix: String
});

module.exports = mongoose.model('Guild', guildSchema, 'guilds');
