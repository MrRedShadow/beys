const Beyblade=require("./Beyblade.js");class ChoZSpriggan extends Beyblade{constructor(){super("Cho-Z Spriggan","Balance","https://vignette.wikia.nocookie.net/beyblade/images/5/58/BBC_Cho-Z_Spriggan_0Wall_Zeta%27_Beyblade.png/revision/latest?cb=20181126123327"),this.specials=[{name:"Special",requires:function(e,s,a){return e.sp>3},execute:function(e,s,a,t){s.hp=s.hp-43;let i=(new Discord.MessageEmbed).setTitle(`[${e.username}] Cho-Z Spriggan used **Super Spriggan Slash**. 43 damage dealt.`).setColor("#551a8b");a.channel.send(i)}}],this.passives=[{name:"Passive",requires:function(e,s,a,t){return!1},execute:function(e,s,a,t){s.hp=s.hp-28;let i=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");a.channel.createMessage({embed:i})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=ChoZSpriggan;