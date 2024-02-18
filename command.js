require("dotenv/config");
const { REST, Routes } = require("discord.js");
// const commands = [
//   {
//     name: "tushar",
//     description: "hii yash kaisa hai!",
//   },
// ];

const love = [
  {
    name: "love",
    description: "reply love",
  },
];
const rest = new REST({ version: "10" }).setToken(
  "MTIwODY5NDA0NjYwNDkxODgyNA.G122_s.cOVUDcZ6DrMRMPwv0kj4fOUz04Bn2wbeunocbA"
);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: love,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();

// (async () => {
//   try {
//     console.log("Started refreshing application (/) commands.");

//     await rest.put(Routes.applicationCommands("1208694046604918824"), {
//       body: commands,
//     });

//     console.log("Successfully reloaded application (/) commands.");
//   } catch (error) {
//     console.error(error);
//   }
// })();
