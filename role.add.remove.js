const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "/";

//add : 
client.on("message", message => { 
let role = message.guild.roles.cache.find(r => r.name === "ROLE NAME");

 if (message.content === prefix+"giveH") {
 	// Add the role!
  message.member.roles.add(role).catch(console.error) 
 	}
});

//remove :
client.on("message", message => { 
let role = message.guild.roles.cache.find(r => r.name === "ROLE NAME");
if (message.content === prefix+"suppH") {
 	// Add the role!
  message.member.roles.remove(role).catch(console.error) 
 	}
});


login.client("token")