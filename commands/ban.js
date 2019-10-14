
module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR"))
		return message.channel.send({embed: {
                color: 15406156,
		title: "Error",
                description: "<:RedX:633431980670976014> You must have the `BAN_MEMEBERS` permission to run this command!",
                author: {
                    name: message.author.tag,
                    icon_url: message.author.displayAvatarURL
                }
            }});

	let member = message.mentions.members.first() || message.guild.members.get(args[0]);
	if (!member)
		return message.channel.send({embed: {
                color: 15406156,
		title: "Error!",
                description: "<:RedX:633431980670976014> You to provide a valid user of this guild!",
                author: {
                    name: message.author.tag,
                    icon_url: message.author.displayAvatarURL
                }
            }});
	if (!member.kickable)
		return message.channel.send({embed: {
                color: 15406156,
		title: "Error!",
                description: "<:RedX:633431980670976014> This user is not bannable by me. Please ensure that I have sufficent permissions and my role is above the targeted user.",
                author: {
                    name: message.author.tag,
                    icon_url: message.author.displayAvatarURL
                }
            }});

	let reason = args.slice(1).join(" ");
	if (!reason) reason = "No reason provided";

	await member.ban(reason)
		.catch((error) => message.reply(`\nSorry ${message.author}, I couldn't ban because of: ${error}`));
		message.reply(`<:check:633432011054383167> I have sucessfully banned **${member.user.tag}**, ${message.author.tag}! Reason is: ${reason}`);

	//await bot.guilds.get("613883505675599872").channels.get("614111309558186004").send(`**${member.user.tag}** has been banned by ${message.author.tag} because of: **${reason}**!`);
};

module.exports.help = {
	name: "ban",
	usage: "ban <user> [reason]",
	description: "nil",
	longdes: "Bans the user given.",
	mentionedperm: "BAN_MEMBERS",
	category: "Moderation"
};
