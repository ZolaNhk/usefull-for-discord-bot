const Discord = require('discord.js');
const client = new Discord.Client(); 



client.on("message", message => {
let channel = message.channel;

if(!message.content.startsWith(`>invite`)) return;
channel.createInvite({unique: true})
.then(invite => {
	message.channel.send("https://discord.gg/"+invite.code)
   })
});

client.login(token)