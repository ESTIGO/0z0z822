const Discord = require("discord.js")

module.exports = {
	name: "membercount",
	aliases: ["members", 'membercount', 'mc'],
	desc: "Gets the total members of a server and seperates them out; bot count, human count, etc, etc.",
	usage: 'membercount',
	cooldown: 2,
	devOnly: true,
	guildOnly: true,
	async run(client, message, args, prefixdb, colordb, roledb,prefix, color) {
	message.channel.send("", {
		embed: new Discord.RichEmbed()
		.setTitle(message.guild.name)
		.addField("\> Humans", message.guild.members.filter(e=>!e.user.bot).size, true)
		.addField("\> Bots", message.guild.members.filter(e=>e.user.bot).size, true)
		.addField("\> Total", message.guild.memberCount, true)
		.setColor(color)
	})
}
}