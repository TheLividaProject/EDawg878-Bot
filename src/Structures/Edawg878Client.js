const { Client, Collection, Permissions } = require('discord.js');
const Util = require('./Util.js');

module.exports = class Edawg878Client extends Client {

	constructor(options = {}) {
		super({
			disableMentions: 'everyone'
		});
		this.validate(options);

		this.commands = new Collection();
		this.events = new Collection();
		this.listeners = new Collection();
		this.aliases = new Collection();
		this.utils = new Util(this);

		this.snipes = new Collection();

		this.owners = options.owners;
		this.mongoose = require('../database/mongoose');
	}


	validate(options) {
		if (typeof options !== 'object') throw new TypeError('Options should be a type of Object.');

		if (!options.token) throw new Error('You must pass the token for the client.');
		this.token = options.token;

		if (!options.prefix) throw new Error('You must pass a prefix for the client.');
		if (typeof options.prefix !== 'string') throw new TypeError('Prefix should be a type of String.');
		this.prefix = options.prefix;

		if (!options.defaultPerms) throw new Error(`You must pass default perm(s) for the Bot`);
		this.defaultPerms = new Permissions(options.defaultPerms).freeze();
	}

	async start(token = this.token) {
		this.mongoose.init();
		this.utils.loadCommands();
		this.utils.loadEvents();
		this.utils.loadListeners();
		super.login(token);
	}

};
