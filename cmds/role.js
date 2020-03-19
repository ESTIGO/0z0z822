const Discord = require('discord.js');
const keyv = require('keyv');

module.exports = {
	name: 'role',
	aliases: ['role'],
	desc: 'add/remove your owned role from someone',
	usage: 'role <@User/ID>',
	async run(client, message, args, prefixdb, colordb, roledb,prefix, color) {
		let role = await roledb.get(message.author.id);
		if (!role) return message.channel.send('You don\'t currently own a role.')
	function getFromPing(mention) {
		if (!mention) return;
		if (mention.startsWith('<@') && mention.endsWith('>')) {
			mention = mention.slice(2, -1);
			if (mention.startsWith('!')) {
				mention = mention.slice(1);
			}
			return message.guild.members.get(mention)
		};
	};
		let ping = getFromPing(args[0]);
		if (!ping) ping = message.guild.member(message.guild.members.get(args[0]));
		if (!ping) return message.channel.send(`User: "${args[0]}" not found`);
		let found = message.guild.roles.find(x => x.id == role);
		if (ping.roles.has(role)) {
			ping.removeRole(role);
			message.channel.send({
				embed: new Discord.RichEmbed()
				.setColor(color)
				.setDescription(`${ping.user.tag} has lost the ${found.name} role`)
			})
		};
		if (!ping.roles.has(role)) {
			ping.addRole(role);
			message.channel.send({
				embed: new Discord.RichEmbed()
				.setColor(color)
				.setDescription(`${ping.user.tag} has received the ${found.name} role`)
			});
		};		
	},
};