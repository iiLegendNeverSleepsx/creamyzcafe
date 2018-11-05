const Discord = require("discord.js");
const client = new Discord.Client();

const fs = require("fs")
client.commands = new Discord.Collection();

fs.readdir("./commands", (err, files) => {
	if (err) console.log(err);
	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if (jsfile.length <= 0) {
		console.log("Couldn't find any commands!")
		return
	}

	jsfile.forEach((f, i) => {
		let props = require(`./commands/${f}`);
		console.log(`${f} has been loaded!`);
		client.commands.set(props.help.name, props);
	});
});

client.on("ready", async () => {
	console.log(`${client.user.tag} has started!`);
});
	
	const prefixes = ['!!'];
	let prefix = false;
  	for(const thisPrefix of prefixes) {
    		if(message.content.startsWith(thisPrefix)) prefix = thisPrefix;
  	}
	
	let messageArray = message.content.split(" ");
	let cmd = messageArray.shift();
	let args = messageArray
	
	if(!prefix) return;
		
	let commandfile = client.commands.get(cmd.slice(prefix.length));
	if (commandfile) commandfile.run(client,message,args);
	
);
client.login(process.env.BOT_T0KEN);
