const Beyblade=require("./Beyblade.js");class GuardianKerbeusRedVerhaoyunshu669481031400816650 extends Beyblade{constructor(){super("Guardian Kerbeus Red Ver. <:haoyunshu:669481031400816650>","Stamina","https://cdn.glitch.com/7f7cfead-eec3-467c-866a-948e538f87c9%2F7411BF2F-B805-4384-8E2C-5E7FAD650A73.jpeg?v=1579684506649"),this.specials=[{name:"Special",requires:function(e,s,a){return e.sp>3},execute:function(e,s,a,t){s.hp=s.hp-40;let r=(new Discord.MessageEmbed).setTitle(`[${e.username}] Guardian Kerbeus Red Ver. <:haoyunshu:669481031400816650> used **Lucky Dance 好运舞**. 48 damage dealt. May the luck be with you.`).setColor("#551a8b");a.channel.send(r)}}],this.passives=[{name:"Passive",requires:function(e,s,a,t){return!1},execute:function(e,s,a,t){s.hp=s.hp-28;let r=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");a.channel.createMessage({embed:r})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=GuardianKerbeusRedVerhaoyunshu669481031400816650;