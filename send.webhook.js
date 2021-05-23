const Discord = require('discord.js');
const client = new Discord.Client(); 

//-------"844222091501895760",
const webhookClient = new Discord.WebhookClient("ID of webhook", "TOKEN OF WEBHOOK HERE, just the token not link");

client.on("message", message => {
if(message.content === "test") {
	webhookClient.send("your message", {
	username: 'Onee San',
	avatarURL: 'https://i.imgur.com/tAf0ojU.jpg',
	
     })
    }
});

client.login("token")
