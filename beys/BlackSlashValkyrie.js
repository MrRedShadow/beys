const Beyblade=require("./Beyblade.js");class BlackSlashValkyrie extends Beyblade{constructor(){super("Black Slash Valkyrie","Attack","https://cdn.discordapp.com/attachments/490783690323001345/721682635058970624/SPOILER_blacksvalkyrie.png"),this.specials=[{name:"Special",requires:function(e,s,a){return e.sp>3},execute:function(e,s,a,t){s.hp=s.hp-60;let i=(new Discord.MessageEmbed).setTitle(`[${e.username}] Black Slash Valkyrie used **Wing Slash**. 60 damage dealt.`).setColor("#551a8b");a.channel.send(i)}}],this.passives=[{name:"Passive",requires:function(e,s,a,t){return!1},execute:function(e,s,a,t){s.hp=s.hp-28;let i=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");a.channel.createMessage({embed:i})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=BlackSlashValkyrie;