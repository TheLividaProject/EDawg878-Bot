const Command = require('../../Structures/Command');
const TicketConfig = require('../../models/Tickets/TicketConfig');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			category: 'Owner',
			owner: true
		});
	}


	async run(message) {
		// eslint-disable-next-line id-length
		const filter = (m) => m.author.id === message.author.id;
		message.channel.send('Please Enter the message ID for these Tickets');
		const msgId = (await message.channel.awaitMessages(filter, { max: 1 })).first().content;
		const fetchMsg = await message.channel.messages.fetch(msgId);
		message.channel.send('Please enter the category ID for these Tickets');
		const categoryId = (await message.channel.awaitMessages(filter, { max: 1 })).first().content;
		const categoryChannel = this.client.channels.cache.get(categoryId);
		message.channel.send('Enter all of the roles that have access to the Tickets');
		const roles = (await message.channel.awaitMessages(filter, { max: 1 })).first().content.split(/,\s*/);
		if (fetchMsg && categoryChannel) {
			for (const roleId of roles) { if (!message.guild.roles.cache.get(roleId)) throw new Error('Role does not exist'); }

			await TicketConfig.create({
				MessageID: msgId,
				GuildID: message.guild.id,
				RoleIds: JSON.stringify(roles),
				ParentID: categoryChannel.id
			});

			message.channel.send('Saved Config to the Database!');
			await fetchMsg.react('🎫');
		} else { throw new Error('Invalid Fields'); }
	}

};
