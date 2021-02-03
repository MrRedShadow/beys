const Beyblade=require("./Beyblade.js");class BlackGodValkyrie extends Beyblade{constructor(){super("Black God Valkyrie","Attack","https://i.ibb.co/r2N1Ff9/BlackGV.png"),this.specials=[{name:"Special",requires:function(e,t,a){return e.sp>3},execute:function(e,t,a,s){let i=t.hp,n=0;for(var o=0;o<e.lvl;o++)n+=.25;let l=40+n;t.hp=t.hp-l;let r=i-t.hp;e.stamina=e.stamina+1;let d=(new Discord.MessageEmbed).setTitle(`[${e.username}] Black God Valkyrie used **Jet Bound Launch**.`).setDescription(`Valkyrie initiated it's Jet Launch technique, smashing into the stadium walls repeatedly and bouncing off them to increase speed. It combined this with the spring blades in it's layer, allowing it to repel off each one for a increased speed boost and to prevent stamina loss this turn. Valkyrie slashed into the enemy repeatedly with it's immense speed for ${r} damage.`).setColor("#551a8b");a.channel.createMessage({embed:d})}}],this.passives=[{name:"Passive",requires:function(e,t,a,s){let i;return i=e.stamina<=Math.round(e.maxstamina/100*70)&&e.hp>Math.round(e.maxhp/100*80)},execute:function(e,t,a,s){t.hp=t.hp-2*e.atk;let i=(new Discord.MessageEmbed).setTitle(`[${e.username}] Black God Valkyrie activated **God Reboot**.`).setDescription("Valkyrie's spin velocity dropped low enough to cause the spring loaded tabs in it's Reboot driver to pull in, causing the extended plastic tip to pull in and let the plastic base make contact with the stadium, granting Valkyrie a immense boost in spin velocity that strengthened it enough to deal double it's basic attack damage to the opponent.").setColor("#551a8b");a.channel.createMessage({embed:i})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=BlackGodValkyrie;