const Discord = require("discord.js");
const {MessageEmbed, MessageAttachment} = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
const canvacord = require("canvacord");
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const request = require("request");
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
module.exports = {
  name: "minecraft",
  category: "🕹️ Fun",
  description: "Image",
  usage: "minecraft <text>",
  type: "image",
  run: async (client, message, args, cmduser, text, prefix) => {
      const sentence = args.join("+")
    
    if (!sentence) return message.channel.send('Pls specific a text')
    if (sentence > 22) return message.channel.send("Please write a text that does not exceed 22 characters")
    let embed = new MessageEmbed()
      .setTitle('Achievement unlocked!')
      .setImage(`https://api.cool-img-api.ml/achievement?text=${sentence}`)
      .setColor('RANDOM')
      .setFooter(' ');
    message.channel.send(embed)
   
  }
}