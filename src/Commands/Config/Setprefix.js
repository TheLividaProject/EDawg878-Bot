const Command = require('../../Structures/Command');
const Guild = require('../../models/guild');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Changes prefix for the Guild',
			category: 'Admin',
			usage: '<prefix>',
			userPerms: ['MANAGE_GUILD']
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message, args) {
		const settings = await Guild.findOne({
			_id: message.guild.id
		// eslint-disable-next-line consistent-return
		}, (err, guild) => {
			if (err) console.error(err);
			if (!guild) {
				const newGuild = new Guild({
					// eslint-disable-next-line new-cap
					_id: message.guild.id,
					prefix: this.client.prefix
				});
				newGuild.save()
					.then(result => console.log(result))
					// eslint-disable-next-line no-shadow
					.catch(err => console.log(err));

				return message.channel.send(`This server isn't in our datebase, please retype this command!`);
			}
		});

		if (args.length < 1) {
			return message.channel.send(`You must specify a prefix!`);
		}

		await settings.updateOne({
			prefix: args[0]
		});

		return message.channel.send(`Changed prefix to \`${args[0]}\``);
	}

};
