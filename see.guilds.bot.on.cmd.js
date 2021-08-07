const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`> Logged in as ${client.user.tag}!`);
  console.log(  prefix+"help for command !");
  client.user.setActivity("");
  
  // List servers the bot is connected to
    console.log("Servers list :")
     client.guilds.cache.forEach((guild) => {
        console.log(`> ${guild.name}`);
    })
  });

client.login("token")
