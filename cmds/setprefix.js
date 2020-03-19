const Discord = require('discord.js');
const config = require('../config.json')
const keyv = require('keyv');

module.exports = {
	name: 'setprefix',
	cooldown: 5,
	guildOnly: true,
	aliases: ['setprefix', 'sp'],
	desc: 'Change the bot\'s server prefix',
	usage: 'setprefix <new prefix>',
	async run(client, message, args, prefixdb, colordb, roledb, prefix, color) {
		let p = await prefixdb.get(`prefix${message.guild.id}`)
		if (!p) p = config.prefix;
		message.channel.send(p)
		if (!args.length) return message.channel.send('The server prefix is: ' + p)
		let newPrefix = args[0];
		if (newPrefix.length > config.maxPrefixLength) {
			return message.channel.send('The prefix cannot be longer than ' + config.maxPrefixLength + ' characters.')
		};
		await prefixdb.set('prefix' + message.guild.id, args[0].toString())
			.catch((err) => message.reply(err))
		message.channel.send({
			embed: new Discord.RichEmbed()
			.setDescription(`${message.author.tag} has successfully set the server prefix to: ${newPrefix}`)
			.setColor(color)
		})
	},
};