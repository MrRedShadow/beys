const Beyblade=require("./Beyblade.js");class Chaos extends Beyblade{constructor(e,s){super("Chaos","Stamina","https://vignette.wikia.nocookie.net/beyblade/images/4/4f/C_og_transparent.png/revision/latest?cb=20171103215250",e,s),this.specials=[{name:"Special",requires:function(e,s,t){return e.sp>3},execute:function(e,s,t){e.stamina=e.stamina+3,s.atk=Math.round(s.atk/100*70);let a=(new Discord.MessageEmbed).setTitle(`[${e.username}] Chaos used **Gyro Launch**.`).setDescription("Chaos used it's low angled contact point to destabilize the opponent and reduce their damage by 30%, while utiliizing it's free spinning Gyro driver to enhance stamina by 3.").setColor("#551a8b");t.channel.createMessage({embed:a})}}],this.passives=[{name:"Passive",requires:function(e,s,t){return!1},execute:function(e,s,t){s.hp=s.hp-28;let a=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");t.channel.createMessage({embed:a})},cd:180}],this.modes=[],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=Chaos;