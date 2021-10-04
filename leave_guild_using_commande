client.on('message', message => {
    if(message.author.id == "698949245985882212") { //just put Owner ID or do that with permission using if(message.author.hasPermission("ADMINISTARTOR") { 
    	const guildn = message.guild.name
        if(message.content == `${prefix}leave`) {
            message.channel.send("leaving guild...");
            message.guild.leave().catch(err => {
                message.channel.send(`[error] can't leave ${guildn}`);
                console.log(`[error] for leaving guild : ${guildn} by using ${prefix}leave\n => ${err}`) 
            });
            console.log(`${guildn} leaved by using ${prefix}leave`)
        };
    }
});
