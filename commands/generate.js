const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
function makeid(length) {
   var result           = 'PREMIUM-';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

console.log(makeid(10));
