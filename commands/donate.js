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
    description: "Donating to us can help us run ads in Trivago along with the devlopment of it. Below you can find different types of donations.",
    fields: [{
        name: "Patreon",
        value: "You may donate to us at Patreon [here](https://www.patreon.com/dartbot) - https://www.patreon.com/dartbot."
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Trivago Hotels - Owned by Sally and Sam"
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
