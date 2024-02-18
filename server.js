require("dotenv/config");

const { Client, GatewayIntentBits } = require("discord.js");
const express = require("express");
const app = express();
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  // console.log(message.author.id);?

  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    message.reply({
      content: "content will get the short url as " + url,
    });
  }

  if (
    (message.content == "hii" ||
      message.content == "hi" ||
      message.content == "Hey" ||
      message.content == "Hello" ||
      message.content == "hello" ||
      message.content == "hey") &&
    !message.author.bot
  ) {
    message.reply({
      // content: "hii from bot",
      content: `Hii ${message.author.globalName} 🤖`,
    });
  }
});

// client.on("interactionCreate", (interaction) => {
//   // console.log(interaction);
//   interaction.reply("kaisa hai yash!");
// });
client.on("interactionCreate", (interaction) => {
  interaction.reply(` I Love You 💖${interaction.user.globalName}`);
});

client.login(process.env.TOKEN);

app.listen(4000, () => {
  console.log("I am on 🤖 ");
});
