const Discord = require("discord.js")

module.exports = {
	name: 'perms',
	aliases: ["permcheck", 'permsfor', 'perms'],
	usage: 'perms <user>',
	desc: 'See a list of permissions for the specified user. They need to be a member of **this** server in order for me to do so.',
	cooldown: 3,
	devOnly: false,
	guildOnly: true,
async run(client, message, args, prefixdb, colordb, roledb,prefix, color) {
	let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
	if (!member) {
		member = message.member;
	}
	if (!message.guild.member(member)) {
		return message.channel.send("The mentioned user is not in this server.")
	}
	message.channel.send("", {
		embed: new Discord.RichEmbed()
		.setColor(color)
		.setTitle(`${member.user.tag}'s Permissions`)
		.setDescription(`
**__General Permissions__**
**Admin**: ${member.permissions.has("ADMINISTRATOR") ? "Yes" : "No"}
**Change Nickname**: ${member.permissions.has("CHANGE_NICKNAME") ? "Yes" : "No"}
**Manage Nicknames**: ${member.permissions.has("MANAGE_NICKNAMES") ? "Yes" : "No"}
**Manage roles**: ${member.permissions.has("MANAGE_ROLES_OR_PERMISSIONS") ? "Yes" : "No"}
**Manage Webhooks**: ${member.permissions.has("MANAGE_WEBHOOKS") ? "Yes" : "No"}
**Manage Emojis**: ${member.permissions.has("MANAGE_EMOJIS") ? "Yes" : "No"}
**create instant invite**: ${member.permissions.has("CREATE_INSTANT_INVITE") ? "Yes" : "No"}	
**Manage Messages**: ${member.permissions.has("MANAGE_MESSAGES") ? "Yes" : "No"}
**Read Messages**: ${member.permissions.has("READ_MESSAGES") ? "Yes" : "No"}
**Send Messages**: ${member.permissions.has("SEND_MESSAGES") ? "Yes" : "No"}
**Send TTS Messages**: ${member.permissions.has("SEND_TTS_MESSAGES") ? "Yes" : "No"}
**Read message history**: ${member.permissions.has("READ_MESSAGE_HISTORY") ? "Yes" : "No"}
**Manage Channels**: ${member.permissions.has("MANAGE_CHANNELS") ? "Yes" : "No"}
**Manage Server**: ${member.permissions.has("MANAGE_GUILD") ? "Yes" : "No"}
**Kick members**: ${member.permissions.has("KICK_MEMBERS") ? "Yes" : "No"}	
**ban members**: ${member.permissions.has("BAN_MEMBERS") ? "Yes" : "No"}
**Add Reactions**: ${member.permissions.has("ADD_REACTIONS") ? "Yes" : "No"}
**Embed Links**: ${member.permissions.has("EMBED_LINKS") ? "Yes" : "No"}
**Attach files **: ${member.permissions.has("ATTACH_FILES") ? "Yes" : "No"}
**Mention Everyone**: ${member.permissions.has("MENTION_EVERYONE") ? "Yes" : "No"}
**Use External Emojis**: ${member.permissions.has("EXTERNAL_EMOJIS") ? "Yes" : "No"}

**__Voice Permissions__**
**Connect**: ${member.permissions.has("CONNECT") ? "Yes" : "No"}
**Speak**: ${member.permissions.has("SPEAK") ? "Yes" : "No"}
**Mute Members**: ${member.permissions.has("MUTE_MEMBERS") ? "Yes" : "No"}
**Deafean Members**: ${member.permissions.has("DEAFEN_MEMBERS") ? "Yes" : "No"}
**Move Members**: ${member.permissions.has("MOVE_MEMBERS") ? "Yes" : "No"}
**Use Voice Activity**: ${member.permissions.has("USE_VAD") ? "Yes" : "No"}
		`)
		.setTimestamp()
	})
		
}
}