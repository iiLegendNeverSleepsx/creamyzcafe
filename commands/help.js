const Discord = require("discord.js");
const fs = require("fs");
var embedutility = ``;
var embedmoderation = ``;
var embeddev = ``;

module.exports.run = async (bot, message, args) => {	
 fs.readdir("./commands", (err, files) => {
	if (err) console.log(err);
	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if (jsfile.length <= 0) {
		return
	}

	jsfile.forEach((f, i) => {
		let props = require(`../commands/${f}`);
		if (props.help.category === "Utility") {
			embedutility = embedutility + ` \n ;${props.help.name} - ${props.help.description}`
		} else if (props.help.category === "Moderation") {
			embedmoderation = embedmoderation + ` \n ;${props.help.name} - ${props.help.description}`
		}
	});
 })

const command = args.shift();

if (command && `../commands/` + command + `.js`) {
	fs.readdir("./commands", (err, files) => {
		let props = require(`../commands/${command}`);
		message.channel.send({embed: {
    			color: 1752220,
    			author: {
      			name: bot.user.username,
      			icon_url: bot.user.avatarURL
    			},
    		title: "Commands",
    		description: "Commands for Creamy'z Cafe Bot",
    	fields: [{
        	name: "Name",
        	value: props.help.name,
		inline: true
      	},
	{
        	name: "Usage",
        	value: "`;" + props.help.usage + "`",
		inline: true
      	},
	{
        	name: "Required Permission",
        	value: props.help.mentionedperm,
		inline: true
      	},
	{
		name: "Category",
		value: props.help.category,
		inline: true
	},
	{
        	name: "Description",
        	value: props.help.longdes,
		inline: true
      	},
    	],
    	timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "By Lxphere"
    }
  }
});})
} else {message.channel.send("I sent a direct message of the help menu! If you did not get it, enable `Direct Messages from Server Members` and try again.");
message.author.send({embed: {
    color: 1752220,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Commands",
    description: "Commands for Creamy'z Cafe Bot",
    fields: [{
        name: "Moderation",
        value: "`;warn` - Warns the member mentioned in the command. \n`;purge` - Deletes the amount of messages provided. \n`;kick` - Kicks mentioned user in the specific guild command was ran in. \n`;ban` - Bans mentioned user in the specific guild command was ran in. \n`;nick` - Sets the nickname for the desired user given."
      },
      {
        name: "Utility",
        value: "`;ping` - Replies with the bots ping. \n`;help` - Replies with this menu."
      },
      {
        name: "Developer Commands",
        value: "Developer commands are not shown to the public right now."
      },
      {
        name: "Command Descriptions",
        value: "Type `;help <command>` here in this DM to get information on a command."
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "By Lxphere"
    }
  }
});
       
 const allowedid = ['293060399106883584'];
	
 if (allowedid.includes(message.author.id)) {
 message.author.send({embed: {
    color: 15158332,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Developer",
    description: "You can see this because you are a developer of the bot.",
    fields: [{
        name: "Nil",
        value: "Nothing set to be here yet."
      },
      {
        name: "Commands",
        value: "\n`;eval` - Evals code. \n`;setname` - Set the bot's username. \n`;reboot` - Restarts the bot."
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "By Lxphere"
    }
  }
});}}
	
}

module.exports.help = {
	name: "help",
	usage: "help [command]",
	description: "sends all server commands",
	longdes: "Sends a list of all the command to the user who ran the command. This will show details about a command if said.",
	mentionedperm: "none",
  category: "Utility"
}
