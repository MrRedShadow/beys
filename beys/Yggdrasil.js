const Beyblade=require("./Beyblade.js");class Yggdrasil extends Beyblade{constructor(){super("Yggdrasil","Stamina","https://i.ibb.co/6yd3xTr/Yggdrasil.png"),this.specials=[{name:"Special",requires:function(e,s,t){return e.sp>3},execute:function(e,s,t,i){e.hp=e.hp+35,e.stamina=e.stamina+3;let a=(new Discord.MessageEmbed).setTitle(`[${e.username}] Yggdrasil used **Slip Launch**.`).setDescription("Yggdrasil slipped by the opponent's attacks, utilizing the even distribution of it's Ring disc to stabilize itself for +35 hp. The free spinning nature of it's Gyro tip raises stamina by 3.").setColor("#551a8b");t.channel.createMessage({embed:a})}}],this.passives=[{name:"Passive",requires:function(e,s,t,i){return!1},execute:function(e,s,t,i){s.hp=s.hp-28;let a=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");t.channel.createMessage({embed:a})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=Yggdrasil;