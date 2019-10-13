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
    title: "Donations",
    description: "Donating to us can help us run ads in Trivago along with the devlopment of it. All donations go towards advertisements and development. Below you can find different types of donations. If you have purchased one of these, make sure to do !getroles in <#632179809581006868>!",
    fields: [{
        name: "Small Donation",
        value: "This is a small donation which is 50 robux. You may purchase it [here](https://www.roblox.com/catalog/3705485022/TH-Small-Donation)"
      },
      {
	name: "Medium Donation",
        value: "This is a medium donation which is 150 robux. You may purchase it [here](https://www.roblox.com/catalog/3705486298/TH-Medium-Donation)"
      },
      {
	name: "Large Donation",
        value: "This is a large donation which is 500 robux. You may purchase it [here](https://www.roblox.com/catalog/3705487361/TH-Large-Donation)"
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
	name: "donate",
	usage: "donate",
	description: "nil",
	longdes: "Donate to Trivago Hotels!",
	mentionedperm: "None",
  category: "Utility"
}
