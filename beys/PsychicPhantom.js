const Beyblade=require("./Beyblade.js");class PsychicPhantom extends Beyblade{constructor(){super("Psychic Phantom","Stamina","https://i.ibb.co/9n2J3RC/phantom.png"),this.specials=[{name:"Special",requires:function(e,s,t){return e.sp>3},execute:function(e,s,t,a){e.hp=e.hp+60,e.stamina=e.stamina-1;let i=(new Discord.MessageEmbed).setTitle(`[${e.username}] Psychic Phantom used **Polish Haunt**.`).setDescription("Phantom used it's Polish disc to stabilize itself by grinding against the stadium with it, healing 60 hp at the cost of 1 stamina.").setColor("#551a8b");t.channel.createMessage({embed:i})}}],this.passives=[{name:"Passive",requires:function(e,s,t,a){return!1},execute:function(e,s,t,a){s.hp=s.hp-28;let i=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");t.channel.createMessage({embed:i})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=PsychicPhantom;