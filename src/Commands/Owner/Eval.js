/* eslint-disable no-useless-escape */
const Command = require('../../Structures/Command');
const { MessageAttachment, MessageEmbed } = require('discord.js');
const { inspect } = require('util');
const { Type } = require('@extreme_hero/deeptype');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			category: 'Owner',
			owner: true
		});
	}


	// eslint-disable-next-line consistent-return
	async run(message, args) {
		const msg = message;
		if (!args.length) return msg.channel.send('I need code to be inputed');
		let code = args.join(' ');
		code = code.replace(/[“”]/g, '"').replace(/[‘’]/g, "'");
		let evaled;
		try {
			const start = process.hrtime();
			evaled = eval(code);
			if (evaled instanceof Promise) {
				evaled = await evaled;
			}

			const stop = process.hrtime(start);
			const response = new MessageEmbed()
				.setAuthor(`Type: ${new Type(evaled).is}`)
				.setTitle('Output:')
				.setDescription(`\`\`\`js\n${this.clean(inspect(evaled, { depth: 0 }))}\n\`\`\``)
				.setColor('RANDOM')
				.setTimestamp()
				.setFooter(`Time Taken: ${(((stop[0] * 1e9) + stop[1])) / 1e6}ms`);

			if (response.length < 2000) {
				await msg.channel.send(response);
			} else {
				const output = new MessageAttachment(Buffer.from(response), `output.txt`);
				await msg.channel.send(output);
			}
		} catch (err) {
			return message.channel.send(`Error: \`\`\`1x\n${this.clean(err)}\n\`\`\``);
		}
	}

	clean(text) {
		if (typeof text === 'string') {
			text = text
				.replace(/`/g, `\`${String.fromCharCode(8203)}`)
				.replace(/@/g, `@${String.fromCharCode(8203)}`)
				.replace(new RegExp(this.client.token, 'gi'), '****');
		}
		return text;
	}

};
