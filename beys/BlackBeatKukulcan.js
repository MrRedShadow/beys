const Beyblade=require("./Beyblade.js");class BlackBeatKukulcan extends Beyblade{constructor(e,t){super("Black Beat Kukulcan","Attack","https://i.ibb.co/QQQnVDw/BBK.png",e,t),this.specials=[{name:"Special",requires:function(e,t,a){return e.sp>3},execute:function(e,t,a){if(e.hp>Math.round(e.maxhp/100*50)){let n=t.hp,i=50,o=0;for(var s=0;s<e.lvl;s++)o+=.3;let r=i+o;t.hp=t.hp-r;let l=n-t.hp,c=(new Discord.MessageEmbed).setTitle(`[${e.username}] Black Beat Kukulcan used **Thunder Attack**.`).setDescription(`Kukulcan utilized the depression in the center of it's Hunter driver, imitating a hollowed tip with a lack of surface area, but using the rubber to create a tight spin path, allowing it to barrage the opponent with swift attacks for ${l} damage.`).setColor("#551a8b");a.channel.createMessage({embed:c})}else if(e.hp<=Math.round(e.maxhp/100*50)){let n=t.hp,i=50,o=0;for(s=0;s<e.lvl;s++)o+=.2;let r=i+o;t.hp=t.hp-r;let l=n-t.hp;t.stamina=t.stamina-1;let c=(new Discord.MessageEmbed).setTitle(`[${e.username}] Black Beat Kukulcan used **Trigger Attack**.`).setDescription(`Kukulcan's sublayer under the main shifted as it took damage and grew closer to bursting, unlocking the yellow claw-like contact points and causing them to extend out from centrifugal force. Kukulcan slammed into the opponent, the exposed contact points dishing out a heavy attack for ${l} damage. The destabilization that followed dropped the opponent's stamina by 1.`).setColor("#551a8b");a.channel.createMessage({embed:c})}}}],this.passives=[{name:"Passive",requires:function(e,t,a){return!1},execute:function(e,t,a){t.hp=t.hp-28;let s=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");a.channel.createMessage({embed:s})},cd:180}],this.modes=[],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=BlackBeatKukulcan;