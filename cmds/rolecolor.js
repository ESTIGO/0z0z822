const Discord = require('discord.js');
const keyv = require('keyv');

module.exports = {
	name: 'rolecolor',
	aliases: ['rc', 'rolecolor'],
	desc: 'set the color of your owned role',
	usage: 'rolecolor <new color>',
	async run(client, message, args, prefixdb, colordb, roledb,prefix, color) {
		let role = await roledb.get(message.author.id);
		if (!role) return message.channel.send('You don\'t currently own a role.')
	let hex = args[0];
	if(!hex) {
		return msg.edit(`**${message.author.username}**, You need to include a color to set your preference to!`)
	}
	if (!hex.startsWith('#')) {
		hex = `#${args[0]}`
	} else {
		hex = args[0];
	};
	let regex = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$")
	var result = regex.test(hex);

		let found = message.guild.roles.find(r => r.id == role);
		if (!found) return message.reply("I cannot find the role which was assigned to you. Please contact a bot admin so they can run ~give on you again lollol");
		if (result == false) {
			return message.channel.send('An invalid hex color code was provided, visit https://htmlcolorcodes.com/ for help')
		}
		found.setColor(hex);
		message.channel.send({
			embed: new Discord.RichEmbed()
			.setDescription(`Successfully set the role color for the ${found.name} role to ${hex}`)
			.setColor(hex)
		})
	},
};