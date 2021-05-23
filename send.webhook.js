const Discord = require('discord.js');
const client = new Discord.Client(); 

//-------"844222091501895760",
const webhookClient = new Discord.WebhookClient("844222091501895760", "hkVtIkrgyaM7jOsfU1j5Q1d_CogGEl8JTAQmXiw5nwWZrOejASHs3KSEAgQY8SvXfFyq");

client.on("message", message => {
let channel = message.channel;

if(!message.content.startsWith(`>invite`)) return;
channel.createInvite({unique: true})
.then(invite => {
	webhookClient.send("https://discord.gg/"+invite.code, {
	username: 'Onee San',
	avatarURL: 'https://imgur.com/a/Ax02Axz',
	
     })
   })
});

client.login("token")