const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`.Booّdy`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on("message", message => {
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        if(!message.guild.members.get(client.user.id).hasPermission('MANAGE_MESSAGES')) return message.channel.send('**I need Permission \`MANAGE_MESSAGE\`To delete Tokens**')
        message.delete();
        message.reply(`you sent your token! Do not worry you've deleted it`);
        return;
    }
                              if(message.channel.type === "dm"){
    if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
        message.delete();
        message.reply(`you sent your token! Do not worry you've deleted it`);
        return;
    }
}
});
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "K";
  let messageArray = message.content.split (" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);




  if(cmd === `${prefix}report`){



  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("لم اجد العضو");
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("#15f153")
  .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
  .addField("Reported by", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);

 let reportschannel = message.guild.channels.find("name", "reports");
 if(!reportschannel) return message.channel.send("لم اجد روم الريبورتات");


 message.delete().catch(O_o=> {});
 reportschannel.send(reportEmbed);
}
  });
 bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  var prefix = "K";
  let messageArray = message.content.split (" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);



    if(cmd === `${prefix}kick`){



      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!kUser) return message.channel.send("Can't find the user!");
      let kReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("No you don't have permission to use the command");
      if(kUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("That person can't be kicked because he is in the mods")

      let kickEmbed = new Discord.RichEmbed()
      .setDescription("~Kick~")
      .setColor("#e56b00")
      .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
      .addField("Kicked By", `<@${message.author.id}> with the id ${message.author.id}`)
      .addField("Kicked In", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", kReason);

      let kickChannel = message.guild.channels.find('name', 'kick-ban');
      if(!kickChannel) return message.channel.send("Cannot find kick-ban channel.");

      message.guild.member(kUser).kick(kReason)
      kickChannel.send(kickEmbed);
    }
    });
bot.on("message", async message => {
      if(message.author.bot) return;
      if(message.channel.type === "dm") return;

      var prefix = "K";
      let messageArray = message.content.split (" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);



        if(cmd === `${prefix}ban`){



          let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
          if(!bUser) return message.channel.send("Can't find the user!");
          let bReason = args.join(" ").slice(22);
          if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("No you don't have permission to use the command");
          if(bUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("That person can't be banned because he is in the mods")

          let banEmbed = new Discord.RichEmbed()
          .setDescription("~Ban~")
          .setColor("#e56b00")
          .addField("Banned user", `${bUser} with ID ${bUser.id}`)
          .addField("Banned by", `<@${message.author.id}> with the id ${message.author.id}`)
          .addField("Banned In", message.channel)
          .addField("Time", message.createdAt)
          .addField("Reason", bReason);

          let kickChannel = message.guild.channels.find('name', 'kick-ban');
          if(!kickChannel) return message.channel.send("Cannot find kick-ban channel.");

          message.guild.member(bUser).ban(bReason)
          kickChannel.send(banEmbed);
        }
        });
client.login(process.env.BOT_TOKEN);
