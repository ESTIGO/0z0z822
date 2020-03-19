const Discord = require('discord.js')
const keyv = require("keyv");

module.exports = {
	name: "setcolor",
	aliases: ['setcolor'],
	slowmode: 3,
	guildOnly: false,
	usage: 'setcolor <new hex color>',
	desc: 'Change **your** default color preference for embeds (messages with the colored strip next to them)',
async run(client, message, args, prefixdb, colordb, roledb, prefix, color) {
	let clientGuild = client.guilds.get('689760593824972827');
	if (!clientGuild.member(message.author).roles.has('689773716871315536')) {
		return message.channel.send(`You're not allowed to use this command!`)
	}
	let msg = await message.channel.send('Setting color...')
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
	if(result == true) {
	colordb.set(message.author.id, hex);
		return msg.edit("", {
			embed: new Discord.RichEmbed()
			.setDescription(`**${message.author.tag}** has updated their color preference to **${hex}**`)
			.setColor(hex)
		});
	} else {
		return msg.edit(`You need to provide a valic HEX color code`, {
			embed: new Discord.RichEmbed()
			.setColor("RANDOM")
			.setDescription(`**Examples:** \`#ff0000\` or \`#ffff00\`\nFor help, use a [Hex color picker](https://htmlcolorcodes.com/)!`)
		})
	}
}
}