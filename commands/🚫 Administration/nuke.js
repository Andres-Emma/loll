const {
    MessageEmbed, Permissions
  } = require("discord.js");
  const config = require(`${process.cwd()}/botconfig/config.json`);
  var ee = require(`${process.cwd()}/botconfig/embed.json`);
  const {
    databasing
  } = require(`${process.cwd()}/handlers/functions`);
  module.exports = {
    name: "nuke",
    category: "🚫 Administration",
    aliases: [""],
    cooldown: 2,
    usage: "nuke",
    description: "Clone channel",
    type: "server",
    run: async (client, message, args, cmduser, text, prefix) => {
        if (!message.member.permissions.has([Permissions.FLAGS.ADMINISTRATOR])) return message.channel.send(":x: You dont have permission.")
message.channel.clone()
.then(c => {
message.channel.delete()
.setPosition(message.channel.position)
message.channel.send("**Destroyed channel**  https://media1.tenor.com/images/5b0fcef4b070f5316093ab591e3995a8/tenor.gif?itemid=17383346")

 })
      }
  }