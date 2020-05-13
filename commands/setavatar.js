const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    const allowedid = ['297860875937906689', '293060399106883584'];
    if (allowedid.includes(message.author.id)) {
	    bot.user.setAvatar(args[0]).then(() => {message.reply(`new avatar set to (URL) **${args[0]}**!`); bot.guilds.get('613883505675599872').channels.get('710194830126350461').send(`My avatar has been changed to (URL) **${args[0]}** by **${message.author.tag}**.`)})
	    	.catch((error) => {message.reply(`I can not set my avatar because of \`${error}\``); bot.guilds.get('613883505675599872').channels.get('710194830126350461').send(`Set avatar command ran by **${message.author.tag}** failed with error: \`${error}\`.`)})
	    
    }
}

module.exports.help = {
	name: "setavatar",
	usage: "setavatar <url>",
	description: "nil",
	longdes: "Changes the bot avatar to the **link** sent",
	mentionedperm: "DEVELOPER",
  category: "Developer"
}
