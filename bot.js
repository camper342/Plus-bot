const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client(); // كههربا (حسن ياسر)
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client(); // كههربا (حسن ياسر)
const client20 = new Discord.Client();
const client21 = new Discord.Client();
const client22 = new Discord.Client();
const client23 = new Discord.Client();
const client24 = new Discord.Client();

client.login("NzM0MDMwNDAwMzE3MjkyNTQ0.XzgD9Q.rrIObhY-5Aa0vPNe5HMn0r439cA");//////
client2.login("NjkxMTMyNjU0NTk0MTYyNzA4.X3I9Yg.ZLyqn2QsQmh1yt-Fr4pVzQyE0PI");/////
client3.login("NzM0Mzk4MzE1NDc4OTA5MDA5.XzgH3w.Op7o4bC8Lbnw3SCuiW37y6ZmZVc");/////
client4.login("NzM0NDAxNTg4NzEzNzUwNTQ4.XzgI_Q.yEJ6X9WY5NezTcvNG3ReCuUmgfk");/////
client5.login("NzM0NDIxNzQyODI2NTUzNDM1.XzgKjA.0LPp78_AZHmy911iKZIGkZQjF8s");/////
client6.login("NzM0NDIzMTM4NjI0MDc3ODM2.XzgLRw.R0wP273UsbWGYG-i7GlEYcfhZbU");/////
client7.login("NzE2OTY5MzkzMDE1MzU3NTAw.X3JBlg.6yY10KuCWcjyBRVNgMDtHYWpUH8");////
client8.login("NzM0NDI1NzI0MTY0ODk4ODY4.XzgMMg.BkNRimZVz0yhK1P1TU8300odNBs");///////
client9.login("NzQwMjg0MTU5MDcwODMwNzMz.XzpDsg.vUiqUbhCZQ6La29QoipbhB7LQWY");//////
client10.login("NzQwMjgxOTQ5Nzk2Njk2MDg1.XzpC9Q.W3RUyTItOOcqhWg2qmIfyw0iFus");/////
client11.login("NzM2MTU2MTU1NjEyNzU4MDI4.XzjnSA.PDCwiulOnBUuq3hVIZ5v0AK-nIs");/////
client12.login("NzM2OTA1NTI1Njc3MjYwODgx.XzjuzQ.PqnbmZSaquD7J8B0LX-tsGclTWs");/////
client13.login("NzM2OTA1NTI1Njc3MjYwODgx.XzjuzQ.PqnbmZSaquD7J8B0LX-tsGclTWs");////
client14.login("NzM2OTA2Nzk4NTE0MTc2MDIw.Xzjvag.lLrH2BTeVpHiqQvwsMO_rTuLOhE");//////
client15.login("NzM2MTU2NTI0NTM5NDEyNTEx.XzjoUQ.CnGo-U7LbT3FnBXTMOKauVcVozM");///////
client16.login("NzM2MTU4ODU3NjE2OTQ5MjY4.XzjpeA.x58je-cmceib6exuD4WA_274aaA");//////
client17.login("NzM2MjEwODcwNTg5MTk0MzMx.XzjrKw.zv1jzRmrSEfAiaNXBmhpbyN64BQ");///////
client18.login("NzM2MjExOTE2MTI4NjQ5MjU3.XzjtIQ.SLWEQhWSB21-pn3mupt9tWXx-qg");//////
client19.login("NzM2MjEyNjM4NzIzMzQyMzY3.Xzjt1A.FWEsrltKqIrCIBy5JOTO2KMvU6g");//////
client20.login("NzM2OTExNDczNjExMjQzNTcw.XzpCIA.puxlB0PT5HQfbfkTYxuWfvRAg2w");//////
client21.login("NzM2OTA4MzI0NTUyODM1MTYz.XzjwIA.7UZkGyHTZ3IhmY2VC6hCJOLhnn8");/////
client22.login("NzM2OTEwNTY2MzQxMzQ1MzYx.XzjzQA.NW-Lp1dO-NztUk7Lbu5MBoEuIIw");/////
client23.login("NzM2OTA5NDY5OTU4Nzk5MzYw.XzjyPg.7wUBdbdyPDiAqQoo7ngBJxx2TJA");//////
client24.login("NzM2OTA4NjQyMjY3NDMwOTMy.XzjxEg.jpTIB4lQJNfRTMAGDIlgweZT-Qc");//////


client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`1`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`1`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});

client2.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`2`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`2`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});

client3.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`3`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`3`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});

client4.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`4`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`4`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});

client5.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`5`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`5`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});

client6.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`6`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`6`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});

client7.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`7`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`7`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});

client8.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`8`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`8`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});

client9.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`9`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`9`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});

client10.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`10`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`10`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});

client11.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`11`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`11`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});

client12.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`12`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`12`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});

client13.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`13`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`13`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});

client13.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`13`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`13`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});

client14.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`14`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`14`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});

client15.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`15`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`15`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});

client16.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`16`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`16`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});

client17.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`17`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`17`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});

client18.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`18`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`18`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});

client19.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`19`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`19`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});

client20.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`20`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`20`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});

client21.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`21`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`21`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});

client22.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`22`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`22`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});

client23.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`23`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`23`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});

client24.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`24`)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(`24`.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("**ADMINISTRATOR GBX:rolling_eyes:**");

    message.channel.send(args.join("  "));
    message.delete();
  }
});
