//command ailleur que dans index.js genre ./command/help/help.js
const Discord = require("discord.js");
const {
    Collection,
    Client,
    handler
} = require('discord.js');
const fs = require("fs");
const client = new Discord.Client();

client.commands = new Collection();
client.aliases = new Collection();

['command'].forEach(handler => {
	 require(`./handler/${handler}`)(client);
});

client.on('message', async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.guild) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLocaleLowerCase();
    if (cmd.length == 0) return;
    const command = client.commands.get(cmd)
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) command.run(client, message, args)
 
});

client.login("token")

//HERE !!!!!!! 
//put this in ./handler/command.js : 

const {
    readdirSync
} = require("fs");
module.exports = (bot) => {
    readdirSync("./commands/").map(dir => {
        const commands = readdirSync(`./commands/${dir}/`).map(cmd => {
            let pull = require(`../commands/${dir}/${cmd}`)
            //you can put : console.log(`Loaded command ${pull.name}`) here for show command in cmd/console
            bot.commands.set(pull.name, pull)
            if (cmd.aliases) {
                cmd.aliases.forEach(p => {
                    bot.aliases.set(p, pull)
                })
            }
        })
    })
}