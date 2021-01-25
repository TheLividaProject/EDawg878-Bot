const Edawg878Client = require('./Structures/Edawg878Client');
const config = require('../config.json');

const client = new Edawg878Client(config);
client.start();
