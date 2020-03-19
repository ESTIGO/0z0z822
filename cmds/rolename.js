const Discord = require('discord.js');
const keyv = require('keyv');

module.exports = {
	name: 'rolename',
	aliases: ['rn', 'rolename'],
	desc: 'set the name of your owned role',
	usage: 'rolename <new name>',
	async run(client, message, args, prefixdb, colordb, roledb,prefix, color) {
		let role = await roledb.get(message.author.id);
		if (!role) return message.channel.send('You don\'t currently own a role.')
		let found = message.guild.roles.find(r => r.id == role);
		if (!found) return message.reply("I cannot find the role which was assigned to you. Please contact a bot admin so they can run ~give on you again lollol");
		found.setName(args.join(' '));
		message.channel.send({
			embed: new Discord.RichEmbed()
			.setDescription(`Successfully renamed your role to ${args.join(' ')}`)
			.setColor(color)
		})
	},
}