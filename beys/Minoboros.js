const Beyblade=require("./Beyblade.js");class Minoboros extends Beyblade{constructor(){super("Minoboros","Attack","https://ibb.co/QJh7PZB"),this.specials=[{name:"Special",requires:function(e,s,t){return e.sp>3},execute:function(e,s,t,i){let o=s.hp,a=0;for(var n=0;n<e.lvl;n++)a+=.3;let r=70+a;s.hp=s.hp-r;let l=o-s.hp;e.stamina=e.stamina-2;let c=(new Discord.MessageEmbed).setTitle(`[${e.username}] Minoboros used **Bull Quake**.`).setDescription(`Minoboros used it's offset Quake driver to bounce itself off into the air, killing 2 stamina. Minoboros quickly came crashing down on it's opponent fiercely for ${l} damage!`).setColor("#551a8b");t.channel.createMessage({embed:c})}}],this.passives=[{name:"Passive",requires:function(e,s,t,i){return!1},execute:function(e,s,t,i){s.hp=s.hp-28;let o=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");t.channel.createMessage({embed:o})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=Minoboros;