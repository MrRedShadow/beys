const Beyblade=require("./Beyblade.js");class RevivePhoenix extends Beyblade{constructor(){super("Revive Phoenix","Defense","https://vignette.wikia.nocookie.net/beyblade/images/c/ca/BBC-RP10F_Beyblade.png/revision/latest?cb=20180709182938"),this.specials=[{name:"Special",requires:function(e,s,t){return e.sp>3},execute:function(e,s,t,i){s.hp=s.hp-60,e.hp=e.hp-6;let a=(new Discord.MessageEmbed).setTitle(`[${e.username}] Revive Phoenix used **Revive Crush**. 68 damage dealt. [${e.username}] Revive Phoenix also lost some HP due to it's armour accidentally hitting itself.`).setColor("#551a8b");t.channel.send(a)}}],this.passives=[{name:"Passive",requires:function(e,s,t,i){return!1},execute:function(e,s,t,i){s.hp=s.hp-28;let a=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");t.channel.createMessage({embed:a})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=RevivePhoenix;