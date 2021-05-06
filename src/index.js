require("dotenv").config();
const { Client } = require("discord.js");
const { convertFeeling } = require("beremoji");

const client = new Client();

client.on("message", (msg) => {
  const [prefix, feeling] = msg.content.split(" ");

  if (prefix === "!b" || prefix === "!beremoji") {
    const emoji = convertFeeling(feeling);
    emoji
      ? msg.channel.send(emoji)
      : msg.reply(`"${feeling}" isn't a beremoji.`);
  }
});

client.login(process.env.TOKEN);
