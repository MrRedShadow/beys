const Beyblade=require("./Beyblade.js");class WizardFafnir extends Beyblade{constructor(){super("Wizard Fafnir","Stamina","https://vignette.wikia.nocookie.net/beyblade/images/1/1d/BBGT_Wizard_Fafnir_Ratchet_Rise_Sen_Beyblade.png/revision/latest?cb=20190419113639"),this.specials=[{name:"Special",requires:function(e,s,a){return e.sp>3},execute:function(e,s,a,t){let i=(new Discord.MessageEmbed).setTitle(`[${e.username}] Wizard Fafnir used **Spin Steal**. 1 stamina stolen from the opponent..`).setColor("#551a8b");s.stamina=s.stamina-1,e.stamina=e.stamina+1,a.channel.send(i)}}],this.passives=[{name:"Passive",requires:function(e,s,a,t){return!1},execute:function(e,s,a,t){s.hp=s.hp-28;let i=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");a.channel.createMessage({embed:i})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=WizardFafnir;