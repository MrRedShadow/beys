const Beyblade=require("./Beyblade.js");class EarthAquila extends Beyblade{constructor(){super("Earth Aquila","Stamina","https://i.imgur.com/dHoVP0C.jpg"),this.specials=[{name:"Special",requires:function(e,t,s){return e.sp>3},execute:function(e,t,s,a){t.atk=t.atk-25,e.stamina=e.stamina+5;let i=(new Discord.MessageEmbed).setTitle(`[${e.username}] Earth Aquila used **Earth Fortress**. Earth Aquila's reduced friction on the stadium reduced friction against the enemy attack, reducing damage by 25. Reduced friction also increased stamina by +5.'.`).setColor("#551a8b");s.channel.send(i)}}],this.passives=[{name:"Passive",requires:function(e,t,s,a){return!1},execute:function(e,t,s,a){t.hp=t.hp-28;let i=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");s.channel.createMessage({embed:i})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=EarthAquila;