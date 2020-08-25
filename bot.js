const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const client = new Client({ disableEveryone: true });
const canvas = require("canvas");
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const pretty = require("pretty-ms");
const prefix = "+";
client.login(process.env.TOKEN);
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
////////////////////////////////////////////////////////////////////

//say and embed

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(`Sorry you do not have this permission`);

    message.channel.send(args.join("  "));
    message.delete();
  }

  if (command == "embed") {
    /////
    if (!message.channel.guild)
      return message.channel
        .send("Sorry this command only for servers")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(`Sorry you do not have this permission`);
    let say = new Discord.RichEmbed()
      .setDescription(args.join(" "))
      .setColor("RANDOM");
    message.channel.sendEmbed(say);
    message.delete();
  }
});
/////////////////////////////////////////////////////////////////////////////

//user info

client.on("message", camper => {
  if (camper.content.startsWith(prefix + "user")) {
    if (camper.author.bot) return;
    if (!camper.guild)
      return camper.reply("**:x: - This Command is only done on Servers**");
    camper.guild.fetchInvites().then(invites => {
      let personalInvites = invites.filter(
        i => i.inviter.id === camper.author.id
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var roles = camper.member.roles
        .map(roles => `**__${roles.name}__ |**`)
        .join(` `);
      let campuser = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(" 🔥 | Use  r Info")
        .setAuthor(camper.author.username, camper.author.avatarURL)
        .addField("**- Name :**   ", camper.author.username, true)
        .addField("**- Tag :**   ", camper.author.discriminator, true)
        .addField("**- ID :** ", camper.author.id, true)
        .addField(
          "**- Joined At :**   ",
          moment(camper.joinedAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField(
          "**- Created At :**    ",
          moment(camper.author.createdAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField("**- Total invites :**    ", inviteCount, true)
        .setTimestamp();

      camper.channel.sendEmbed(campuser).then(c => {});
    });
  }
});

/////////////////////////////////////////////////////////////

client.on("message", message => {
  if (message.content.startsWith(prefix + "server")) {
    if (!message.channel.guild)
      return message.channel.send(` | This Command is used only in servers!`);
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const verificationLevels = ["None", "Low", "Medium", "Insane", "Extreme"];
    const days = millis / 1000 / 60 / 60 / 24;
    var embed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField(":id:-** Server ID:**", `» ${message.guild.id} `, true)
      .addField(
        ":calendar:-** Created On**",
        `» ${message.guild.createdAt.toLocaleString()}`,
        true
      )
      .addField(":crown: -**Server Owner**", `**${message.guild.owner}**`, true)
      .addField(
        `-** Members ** [${message.guild.members.size}]`,
        `**${
          message.guild.members.filter(c => c.presence.status !== "offline")
            .size
        }** **Online**`,
        true
      )
      .addField(
        ":speech_balloon:-** Channels **",
        `» **${message.guild.channels.filter(m => m.type === "text").size}**` +
          " TexT | VoicE  " +
          `**${message.guild.channels.filter(m => m.type === "voice").size}** `,
        true
      )
      .addField(":earth_africa:-** Region **", ` ${message.guild.region}`, true)
      .setImage("")

      .setColor("RANDOM");
    message.channel.sendEmbed(embed);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////

//bot info

client.on("message", message => {
  if (message.content === prefix + "bot") {
    const bot = new Discord.RichEmbed()
      .setAuthor(client.user.username, client.user.avatarURL)
      .setColor("RANDOM")
      .addField(
        "- **Bot Ping** : ",
        `» ${Date.now() - client.createdTimestamp}` + " ms",
        true
      )
      .addField("**- Servers** :  ", `» ${client.guilds.size}`, true)
      .addField("**- channels** : ", `» ${client.channels.size} `, true)
      .addField("**- Users** : ", `» ${client.users.size} `, true)
      .addField("**- Bot Name** :  ", `» ${client.user.tag} `, true)
      .addField("**- Bot Owner** :  ", `» Camper`, true)
      .addField("**- Bot Co.Owner** :  ", `» Puma`, true)
      .setImage("")
      .setFooter(message.author.username, message.client.avatarURL);
    message.channel.send(bot);
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// inv info

client.on("message", async message => {
  if (message.content.startsWith(prefix + "invites")) {
    //// وهون الامر طبعا
    let oi = message.mentions.users.first()
      ? message.mentions.users.first().id
      : message.author.id;
    let Tag = message.mentions.users.first()
      ? message.mentions.users.first().tag
      : message.author.tag;
    let Username = message.mentions.users.first()
      ? message.mentions.users.first().username
      : message.author.username;
    let Avatar = message.mentions.users.first()
      ? message.mentions.users.first().avatarURL
      : message.author.avatarURL;

    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(oi);
      let personalInvites = invs.filter(i => i.inviter.id === oi);
      let urll = invs.filter(i => i.inviter.id === oi);
      let link = urll.reduce(
        (p, v) =>
          v.url + ` , Total de membros recrutados no convite: ${v.uses}.\n` + p,
        `\nServidor: ${message.guild.name} \n `
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      let inviteCode = personalInvites.reduce((p, v) => v.code);
      let possibleInvites = [["Total de membros recrutados:"]];
      possibleInvites.push([inviteCount, inviteCode]);
      let user = message.mentions.users.first() || message.author;
      let mem = message.guild.member(user);
      let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
      let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
      console.log(inviteCode);
      var inviteInfo = new Discord.RichEmbed()
        .setTitle(`😎 **[INVITE INFO]** ${Username}`)
        .addField("**invites**", `[ **members ${Number(inviteCount)}** ]   `)
        .addField(
          "**When did you join **",
          ` [  **${daysJoined.toFixed(0)} Days ago **  ]   `
        )
        .setImage("")
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(Tag, Avatar);

      message.channel.send(inviteInfo);
    });
  }
});

///////////////////////////////////////////////////////////////////////////

const SQLite = require("sqlite"); // SQLpackage
const path = require("path"); // PATHpackage
const invites = {}; // Codes

client.on("message", async msg => {
  // message ?
  if (msg.author.bot || !msg.channel.guild) return; // if bot or private return
  if (msg.content.startsWith(prefix + "link")) {
    // message content
    let invite = await msg.channel
      .createInvite(
        {
          //  create invites
          maxAge: 86400, // one day // limit time for invite ^^
          maxUses: 5 // 5 people can enter // limit users for invites ^^
        },
        `Requested by ${msg.author.tag}`
      )
      .catch(console.log); // reason // end

    SQLite.run(
      `INSERT INTO linkSysteme VALUES ('${invite.code}','${msg.author.id}')`
    ); // insert into table
    msg.author.send(
      invite
        ? /*seccussfull*/ `**Duration of the link: a day The number of uses of the link: 5\n ${invite}**` /*error catch*/
        : "There is a bug in the bot :(  n The problem will be solved soon ..."
    );
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("message", message => {
  if (!message.channel.guild) return;

  if (message.content.startsWith(prefix + "allbots")) {
    if (message.author.bot) return;
    let i = 1;
    const botssize = message.guild.members
      .filter(m => m.user.bot)
      .map(m => `${i++} - <@${m.id}>`);
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setColor("RANDOM")
      .setDescription(
        `**Found ${
          message.guild.members.filter(m => m.user.bot).size
        } bots in this Server**
${botssize.join("\n")}`
      )
      .setFooter(client.user.username, client.user.avatarURL)
      .setTimestamp();

    message.channel.send(embed);
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("message", message => {
  let Camper;
  if (message.content === prefix + "close") {
    if (!message.channel.guild)
      return message.reply("```This command only for servers```");
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("```Sorry you do not have this permissoin```");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("```This channel has been closed```");
      });
  }

  if (message.content === prefix + "open") {
    if (!message.channel.guild)
      return message.reply("```This command only for servers```");
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.reply("```Sorry you do not have this permissoin```");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("```This channel has been opened```");
      });
  }
});

///////////////////////////////////////////////////////////////////////////////////////

client.on("message", function(message) {
  if (!message.channel.guild) return;
  if (message.author.bot) return;
  if (message.author.id === client.user.id) return;
  if (message.author.equals(client.user)) return;
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ");
  switch (args[0].toLocaleLowerCase()) {
    case "clear":
      message.delete();
      if (!message.channel.guild) return;
      if (message.member.hasPermission(0x2000)) {
        if (!args[1]) {
          message.channel.fetchMessages().then(messages => {
            message.channel.bulkDelete(messages);
            var messagesDeleted = messages.array().length;
            message.channel
              .sendMessage(
                " " +
                  "```fix\n" +
                  messagesDeleted +
                  " " +
                  ":  message deleted```"
              )
              .then(m => m.delete(10000));
          });
        } else {
          let messagecount = parseInt(args[1]);
          message.channel
            .fetchMessages({ limit: messagecount })
            .then(messages => message.channel.bulkDelete(messages));
          message.channel
            .sendMessage(
              " " + "```fix\n" + args[1] + " " + ": message deleted```"
            )
            .then(m => m.delete(5000));
          message.delete(60000);
        }
      } else {
        var manage = new Discord.RichEmbed()
          .setDescription("```You Do Not Have Permission MANAGE_MESSAGES``` :(")
          .setColor("RANDOM");
        message.channel.sendEmbed(manage);
        return;
      }
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////

const arraySort = require("array-sort"),
  table = require("table");

client.on("message", async message => {
  if (message.content.split(" ")[0].toLowerCase() == prefix + "topinvites") {
    if (message.author.bot) return;
    if (!message.channel.guild)
      return message.reply(" Error : ` Guild Command `");

    var invites = await message.guild.fetchInvites();

    invites = invites.array();

    arraySort(invites, "uses", { reverse: true });

    let possibleInvites = ["User Invited |  Uses "];
    invites.forEach(i => {
      if (i.uses === 0) {
        return;
      }
      possibleInvites.push([
        "\n " + "<@" + i.inviter.id + ">" + "  :  " + i.uses
      ]);
    });

    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField("Top Invites.", `${possibleInvites}`);

    message.channel.send(embed);
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.author.bot) return;
  if (message.content === prefix + "savatar") {
    const embed = new Discord.RichEmbed()

      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
      .setAuthor(message.author.username, message.guild.iconrURL)
      .setColor("RANDOM")
      .setImage(message.guild.iconURL)
      .setURL(message.guild.iconrURL)
      .setTimestamp();

    message.channel.send({ embed });
  }
});
client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(" ").slice(1);
  var argresult = args.join(" ");
  if (message.content.startsWith(prefix + "avatar")) {
    var mentionned = message.mentions.users.first();
    var MsH;
    if (mentionned) {
      var MsH = mentionned;
    } else {
      var MsH = message.author;
    }
    message.channel.send(MsH.avatarURL);
    message.delete(3000);
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("message", async message => {
  let args = message.content.split(" ");
  if (args[0] == `+kick`) {
    if (!message.guild || message.author.bot) return undefined;
    if (
      !message.member.hasPermission("KICK_MEMBERS") ||
      !message.guild.member(client.user).hasPermission("KICK_MEMBERS")
    )
      return;
    let user =
      message.guild.members.get(args[1]) || message.mentions.members.first();
    let reason = args.slice(2).join(" ");
    if (!user)
      return message.channel.send("```Usage: +kick @member [reason]```");
    if (!reason) reason = "No reason provided.";
    if (
      message.guild.member(user.user).highestRole.position >=
      message.guild.member(message.member).highestRole.position
    )
      return message.channel.send(
        `❌You cant kick **${user.user.username}** because his role highest than your role!`
      );
    if (
      message.guild.member(user.user).highestRole.position >=
      message.guild.member(client.user).highestRole.position
    )
      return message.channel.send(
        `❌I cant kick **${user.user.username}** because his role highest than my role!`
      );
    if (!message.guild.member(user.user).kickable)
      return message.channel.send(`I cant kick **${user.user.username}.`);
    await message.guild.member(user).kick(reason, user);
    await message.channel.send(
      `✅**${user.user.username}** has been kicked from the server! \`\`${reason}\`\``
    );
  }
});

////////////////////////////////////////////////
client.on("message", message => {
  if (message.content.split(" ")[0] == prefix + "ban") {
    if (!message.guild || message.author.bot) return undefined;
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send("```You don't have permission.```");
    if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS"))
      return message.channel.send("```I don't have permission.```");
    let args = message.content.split(" ").slice(1);
    let user =
      message.guild.members.get(message.content.split(" ")[1]) ||
      message.mentions.members.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!user) return message.channel.send("```Usage: +ban @mention reason```");
    if (!reason) reason = "No reason provided.";
    if (user.user.id === message.author.id)
      return message.channel.send("```❌You can't ban yourself!```");
    if (
      message.guild.member(user.user).highestRole.position >=
      message.guild.member(client.user).highestRole.position
    )
      return message.channel.send(
        `❌I can't ban **${user.user.tag}** because his role highest than my role!`
      );
    if (
      message.guild.member(user.user).highestRole.position >=
      message.member.highestRole.position
    )
      return message.channel.send(
        `❌You can't ban **${user.user.tag}** because his role highest than your role.!`
      );

    if (!message.guild.member(user.user).bannable)
      return message.channel.send(`❌I can't ban **${user.user.tag}**.`);
    message.guild.member(user).ban(reason, user);
    message.channel.send(
      `✅Done :+1:, I Banned **${user.user.username}** from the server!\nReason: \`\`${reason}\`\``
    );
  }
});

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(NoNo => {
          message.guild.unban(NoNo);
        });
      });
      return message.channel.send("```✅ Unbanned all members ```");
    }
    if (!args)
      return message.channel.send("```Please Type the member ID / all```");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(`**✅ Unbanned ${m.username}**`);
      })
      .catch(stry => {
        message.channel.send(`🙄 - I can not find \`${args}\` in the ban list`);
      });
  }
});
////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "move")) {
    if (message.member.hasPermission("MOVE_MEMBERS")) {
      if (message.mentions.users.size === 0) {
        return message.channel.send("```Use : +move  @User```");
      }
      if (message.member.voiceChannel != null) {
        if (message.mentions.members.first().voiceChannel != null) {
          var authorchannel = message.member.voiceChannelID;
          var usermentioned = message.mentions.members.first().id;
          var embed = new Discord.RichEmbed()
            .setTitle("Succes!")
            .setColor("#000000")
            .setDescription(
              `✅ You Have Moved <@${usermentioned}> To Your Channel `
            );
          var embed = new Discord.RichEmbed()
            .setTitle(`You are Moved in ${message.guild.name} `)
            .setColor("RANDOM")
            .setTitle(`✽ **Premium**`)

            .setDescription(
              `✅**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`
            );
          message.guild.members
            .get(usermentioned)
            .setVoiceChannel(authorchannel)
            .then(m => message.channel.send(embed));
          message.guild.members.get(usermentioned).send(embed);
        } else {
          message.channel.send(
            "```❌You Cant Move```" +
              message.mentions.members.first() +
              " ``❌The User Should Be In channel To Move It```"
          );
        }
      } else {
        message.channel.send(
          "```You Should Be In Room Voice To Move SomeOne```"
        );
      }
    } else {
      message.react("❌");
    }
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////

client.on("message", msg => {
  const rooms = [];
  msg.guild.channels.forEach(c => {
    if (c.type !== "voice") return;
    rooms.push(c.name);
  });
  let args = msg.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (msg.content.startsWith(prefix + "moveme")) {
    if (!msg.member.voiceChannel)
      return msg.channel.send("**:no_entry:   You're not in voice channel! **");
    if (!args)
      return msg.channel.send(
        "**:no_entry:   Please be more specific**```" + rooms.join("\n") + "```"
      );
    if (isNaN(args)) {
      let channel =
        msg.guild.channels.find(ch => ch.name === args) ||
        msg.mentions.members.first().voiceChannel;
      if (!channel)
        return msg.channel.send(
          "**:no_entry:   Please be more specific**```" +
            rooms.join("\n") +
            "```"
        );
      msg.member
        .setVoiceChannel(channel)
        .then(
          msg.channel.send(
            "**:white_check_mark:  " +
              msg.author.username +
              " moved to " +
              channel +
              "!**"
          )
        );
    } else {
      let channel =
        msg.guild.channels.get(args) ||
        msg.guild.members.get(args).voiceChannel;
      msg.member
        .setVoiceChannel(channel)
        .then(
          msg.channel.send(
            "**:white_check_mark:  " +
              msg.author.username +
              " moved to " +
              channel +
              "!**"
          )
        );
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("message", async message => {
  if (message.content.startsWith(prefix + "banslist")) {
    if (!message.guild) return;
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `BAN_MEMBERS`"
      );
    message.guild.fetchBans().then(bans => {
      let b = bans.size;
      let bb = bans.map(a => `${a}`).join(" - ");
      message.channel.send(`**\`${b}\` | ${bb}**`);
    });
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("message", async message => {
  if (message.content.startsWith(prefix + "setWelcome")) {
    if (!message.guild.member(message.author).hasPermissions("MANAGE_CHANNELS"))
      return message.reply("❌```You do not have this permission```");
    if (
      !message.guild
        .member(client.user)
        .hasPermissions(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])
    )
      return message.reply("❌ ```You do not have this permission```");
    message.channel.send(
      "✅| **Done successfully**, please send **+close** in welcome channel"
    );
    message.guild.createChannel(`│𝐖𝐞𝐥𝐜𝐨𝐦𝐞`, "chat").then(c => {});
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "setLeft")) {
    if (!message.guild.member(message.author).hasPermissions("MANAGE_CHANNELS"))
      return message.reply("❌```You do not have this permission```");
    if (
      !message.guild
        .member(client.user)
        .hasPermissions(["MANAGE_CHANNELS", "MANAGE_ROLES_OR_PERMISSIONS"])
    )
      return message.reply("❌ ```You do not have this permission```");
    message.channel.send(
      "✅| **Done successfully**, please send **+close** in left channel"
    );
    message.guild.createChannel(`│𝐋𝐞𝐟𝐭`, "chat").then(c => {});
  }
});

client.on("guildMemberAdd", member => {
  let welcomer = member.guild.channels.find(
    channel => channel.name === "│𝐖𝐞𝐥𝐜𝐨𝐦𝐞"
  );
  if (!welcomer) return;
  if (welcomer) {
    moment.locale("en-ly");
    var h = member.user;
    let norelden = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(h.avatarURL)
      .setAuthor(h.username, h.avatarURL)
      .setDescription("**WELCOME TO OUR SERVER**")
      .addField("Name:", member.user)
      .addField(" YOU ARE MEMBER :-", member.guild.memberCount)
      .addField("User ID:", member.id)
      .addField(
        "WHEN YOU CREATED DOSCORD ACCOUNT",
        `${moment(member.user.createdAt).format(
          "D/M/YYYY h:mm a"
        )} **\n** \`${moment(member.user.createdAt).fromNow()}\``,
        true
      )
      .addField(
        ": YOU JOINED SERVER IN ",
        `${moment(member.joinedAt).format("D/M/YYYY")} \n\`\`${moment(
          member.joinedAt
        )
          .startOf(" ")
          .fromNow()}\`\``,
        true
      )
      .setImage(
        "https://media.discordapp.net/attachments/584171168269860893/712390809806176286/image0.gif"
      ); ////lera rasmek ba dle xot dani
    welcomer.send({ embed: norelden });
  }
});

client.on("guildMemberRemove", member => {
  let welcomer = member.guild.channels.find(
    channel => channel.name === "│𝐋𝐞𝐟𝐭"
  );
  if (!welcomer) return;
  if (welcomer) {
    moment.locale("en-ly");
    var h = member.user;
    let norelden = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(h.avatarURL)
      .setAuthor(h.username, h.avatarURL)
      .setDescription("GOOD BYE")
      .addField("Name:", member.user)
      .addField(" YOU WERE MEMBER :-", member.guild.memberCount)
      .addField(
        "WHEN YOU CREATED DOSCORD ACCOUNT",
        `${moment(member.user.createdAt).format(
          "D/M/YYYY h:mm a"
        )} **\n** \`${moment(member.user.createdAt).fromNow()}\``,
        true
      )
      .addField(
        ": YOU LEFTED SERVER IN ",
        `${moment(member.joinedAt).format("D/M/YYYY")} \n\`\`${moment(
          member.joinedAt
        )
          .startOf(" ")
          .fromNow()}\`\``,
        true
      )
      .setImage("")
      .setFooter(`${h.tag}`, "");

    welcomer.send({ embed: norelden });
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////

////games

client.on("message", message => {
  if (message.content.startsWith(prefix + "slots")) {
    let slot1 = [
      "🍏",
      "🍇",
      "🍒",
      "🍍",
      "🍅",
      "🍆",
      "🍑",
      "🍓",
      "🥝",
      "🍎",
      "🍉"
    ];
    let slot2 = [
      "🍏",
      "🍇",
      "🍒",
      "🍍",
      "🍅",
      "🍆",
      "🍑",
      "🍓",
      "🥝",
      "🍎",
      "🍉"
    ];
    let slot3 = [
      "🍏",
      "🍇",
      "🍒",
      "🍍",
      "🍅",
      "🍆",
      "🍑",
      "🍓",
      "🥝",
      "🍎",
      "🍉"
    ];
    let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let we;
    if (slots1 === slots2 && slots2 === slots3) {
      we = "😀You Won !😀";
    } else {
      we = "😣You Lost !😣";
    }
    message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`);
  }
});

////

client.on("message", message => {
  if (message.content.startsWith(prefix + "stone")) {
    let slot1 = ["📄paper📄", "🗿stone🗿", "✂scissors✂"];
    let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let we;
    if (slots1) {
      we = "🎮Play Again🎮";
    } else {
      we = "😣She lost the luck of Over😣";
    }
    message.channel.send(`${slots1} - ${we}`);
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "paper")) {
    let slot1 = ["📄paper📄", "🗿stone🗿", "✂scissors✂p"];
    let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let we;
    if (slots1) {
      we = "🎮Play Again🎮";
    } else {
      we = "😣She lost the luck of Over😣";
    }
    message.channel.send(`${slots1} - ${we}`);
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "scissors")) {
    let slot1 = ["📄paper📄", "🗿stone🗿", "✂scissors✂p"];
    let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let we;
    if (slots1) {
      we = "🎮Play Again🎮";
    } else {
      we = "😣She lost the luck of Over😣";
    }
    message.channel.send(`${slots1} - ${we}`);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////
//// role create

client.on("message", async message => {
  if (!message.guild || message.author.bot) return;
  let args = message.content.split(" ");
  if (args[0] == `${prefix}cr`) {
    if (
      !message.guild.me.hasPermission("MANAGE_ROLES") ||
      !message.member.hasPermission("MANAGE_ROLES")
    )
      return;
    if (!args[1] || !args[2])
      return message.reply(
        `**Usage: ${args[0]} [role color] [role name]\nExample: ${
          args[0]
        } blue Admin**`
      );
    try {
      let role = await message.guild.createRole({
        name: args.slice(2).join(" ") || "new role",
        color: args[1].toUpperCase() || null
      });
      await message.reply(`**Done, Created ||${role.name}|| role!**`);
    } catch (e) {
      message.reply(`Error! ${e.message || e}`);
    }
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////

////help code

client.on("message", message => {
  if (message.content === prefix + "help") {
    const embed = new Discord.RichEmbed().setColor("RANDOM").setImage("")
      .setDescription(`**Bot Commands** 

-General Commands     | ${prefix}g help

-Moderation Commands  | ${prefix}m help

-Game Commands        | ${prefix}gm help

-Welcome Commands     | ${prefix}w help
`);

    message.channel.sendEmbed(embed);
  }
});
//

///g help

client.on("message", message => {
  if (message.content === prefix + "g help") {
    const embed = new Discord.RichEmbed().setColor("RANDOM").setImage("")
      .setDescription(`**General Commands** 

${prefix}say 

${prefix}embed

${prefix}user

${prefix}server

${prefix}bot

${prefix}invites

${prefix}topinvites

${prefix}link

${prefix}avatar

${prefix}savatar

`);

    message.channel.sendEmbed(embed);
  }
});
//////

///m help

client.on("message", message => {
  if (message.content === prefix + "m help") {
    const embed = new Discord.RichEmbed().setColor("RANDOM").setImage("")
      .setDescription(`**General Commands** 

${prefix}close

${prefix}open

${prefix}kick

${prefix}ban

${prefix}banlist

${prefix}clear

${prefix}cr

${prefix}move

${prefix}moveme

`);

    message.channel.sendEmbed(embed);
  }
});

///
client.on("message", message => {
  if (message.content === prefix + "w help") {
    const embed = new Discord.RichEmbed().setColor("RANDOM").setImage("")
      .setDescription(`**General Commands** 

${prefix}setWelcome | Please do not change welcome channel name!!!!!


${prefix}setLeft    | Please do not change left channel name!!!!!

`);

    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content === prefix + "gm help") {
    const embed = new Discord.RichEmbed().setColor("RANDOM").setImage("")
      .setDescription(`**General Commands** 

${prefix}slots

${prefix}rock

${prefix}scissors

${prefix}paper

`);

    message.channel.sendEmbed(embed);
  }
});






client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [` +help `]
  
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "PLAYING",
     
    });
  }, 2000);
});
