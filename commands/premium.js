const Discord = require("discord.js");
const fs = require("fs"); 

module.exports.run = async (bot, message, args) => {
    const client = bot;
    message.channel.send({embed: {
    color: 15844367,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Discord Premium",
    description: "What is Discord Premium? Discord Premium is a t-shirt that is purchasable for discord perks. These perks include but are not limited to: sneak peeks, special bots, VIP in game, ability to change your name and upload files, custom name-tag in game, and so much more! If you bought discord premium then go ahead and do `!getroles` in <#632179809581006868>!",
   fields: [{
	      name: "Interested in buying?",
        value: "Purchase the discord premium t-shirt [here](https://www.roblox.com/catalog/3718899891/Communications-Server-Premium)!"
    }, 
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Trivago Hotels © 2019 - Owned by Sally and Sam"
    }
  }
});
}

module.exports.help = {
	name: "premium",
	usage: "premium",
	description: "nil",
	longdes: "Purchase Trivago Hotel's discord premium!",
	mentionedperm: "None",
  	category: "Utility"
}
