const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
const zalgo = require("zalgolize");
const math = require("math-expression-evaluator");
const figlet = require("figlet");
const fs = require("fs");
const ms = require("ms");
const prefix = "";
const { Client, Collection } = require("discord.js");

client.commands = new Collection();
client.aliases = new Collection();


const yt = require("ytdl-core");

client.on("voiceStateUpdate", (oldMember, newMember) => {
  if (
    oldMember.voiceChannel === undefined &&
    newMember.voiceChannel !== undefined
  ) {
    const voiceChannel = client.channels.get("749187712418054224");
    voiceChannel.join().then(connnection => {
      let disp = yt("https://www.youtube.com/watch?v=n74omgRJXlo", {
        audioonly: true
      });
      const dispatcher = connnection.playStream(disp);
    });
  } else if (newMember.voiceChannel === undefined) {
    const voiceChannel = client.channels.get("749187712418054224");
    voiceChannel.leave();
  }
});

client.login(process.env.TOKEN);
