const Listener = require('../../Structures/Listener');
const Ticket = require('../../models/Moderation/Ticket');

module.exports = class extends Listener {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	async run() {
		this.client.on('ready', () => {
			const Guilds = this.client.guilds.cache.map(guild => guild.id);

			Guilds.forEach(async (guild) => {
				const ticket = await Ticket.find({
					GuildID: guild
				});

				ticket.forEach(async (tickets) => {
					await this.client.guilds.cache.get(tickets.get('GuildID')).channels.cache.get(tickets.get('ChannelID')).messages.fetch(tickets.get('ClosedMessagedID'));

					const channel = this.client.guilds.cache.get(tickets.get('GuildID')).channels.cache.get(tickets.get('ChannelID'));

					setTimeout(async () => {
						await channel.delete();
					}, 5000);
				});
			});
		});
	}

};
