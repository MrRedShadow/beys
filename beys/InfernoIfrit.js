const Beyblade=require("./Beyblade.js");class InfernoIfrit extends Beyblade{constructor(){super("Inferno Ifrit","Balance","https://i.ibb.co/ypmqNqw/ifrit.png"),this.specials=[{name:"Special",requires:function(e,t,s){return e.sp>3},execute:function(e,t,s,i){let a=t.hp,r=0;for(var n=0;n<e.lvl;n++)r+=.2;let o=70+r;t.hp=t.hp-o;let l=a-t.hp;e.hp=e.hp-30;let c=(new Discord.MessageEmbed).setTitle(`[${e.username}] Inferno Ifrit used **Hell Inferno**.`).setDescription(`Ifrit's Magnum disc aligned with the contact points on it's layer, the weight distribution giving it a boost in attack power. Ifrit struck the opponent with a three hit barrage attack, dealing ${l} damage. Ifrit's shifted balance resulted in a loss of stability, reducing hp by 30.`).setColor("#551a8b");s.channel.createMessage({embed:c})}}],this.passives=[{name:"Passive",requires:function(e,t,s,i){return!1},execute:function(e,t,s,i){t.hp=t.hp-28;let a=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");s.channel.createMessage({embed:a})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=InfernoIfrit;