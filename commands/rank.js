var rbx = require("noblox.js");
module.exports.run = async (bot, message, args) => {
		if (!message.member.roles.get("509497944043552768")) return message.reply("Invalid permissons! You must have the `Bot Admin` role.").catch(() => bot.safeSend(message, module.exports.help.name));
		if (!args[1]) return message.reply("Usage: `;rank (username) (rank)`").catch(() => bot.safeSend(message, module.exports.help.name));
		rbx.getRoles(3008227).then((roles) => {
			rbx.getIdFromUsername(args[0]).then((result) => {
				rbx.getRankInGroup(3008227, result).then((currentRank) => {
					if (currentRank === 0) return message.reply("This person isn't in the group!").catch(() => bot.safeSend(message, module.exports.help.name));
					var rank = args.splice(1, args.length).join(" ");
					if (!roles.find((role) => role.Name === rank)) return message.reply("Not a valid rank name!").catch(() => bot.safeSend(message, module.exports.help.name));
					if (roles.find((role) => role.Name === rank).Rank > roles.find((role) => role.Name === "Human Resources Officer").Rank || currentRank > roles.find((role) => role.Name === "Human Resources Officer").Rank) return message.reply("You cannot change the rank of a Human Resources Officer+, or rank anyone above Human Resources Officer").catch(() => bot.safeSend(message, module.exports.help.name));
					rbx.setRank(3008227, result, roles.find((role) => role.Name === rank).Rank).then(async () => {
						message.reply(`Ranked \`${args[0]}\` to \`${rank}\``).catch(() => bot.safeSend(message, module.exports.help.name));
						require('../resources/embed.js').log("Rank Action", `**User Ranked:** \`${args[0]}\` \n**Ranked By:* ${message.author.tag} \n**Ranked To:** \`${rank}\`)
					}).catch(() => {
						 message.reply("Couldn't rank this user in the group.").catch(() => bot.safeSend(message, module.exports.help.name));
					});
				}).catch(() => {
					message.reply("Couldn't fetch this user's rank.").catch(() => bot.safeSend(message, module.exports.help.name));
				});
			}).catch(() => {
				message.reply("Couldn't find this user.").catch(() => bot.safeSend(message, module.exports.help.name));
			});
		}).catch(() => {
			message.reply("Couldn't fetch group ranks.").catch(() => bot.safeSend(message, module.exports.help.name));
		});
	},
module.exports.help = {
	name: "rank",
	usage: "rank <user> [rank]",
	description: "nil",
	longdes: "Ranks the user given.",
	mentionedperm: "Bot Permissions Role",
  category: "Utility"
};
