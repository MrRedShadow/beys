const Beyblade=require("./Beyblade.js");class TornadoWyvern extends Beyblade{constructor(){super("Tornado Wyvern","Defense","https://vignette.wikia.nocookie.net/beyblade/images/7/76/Beyblade_Tornado_Wyvern.png/revision/latest?cb=20180716233432"),this.specials=[{name:"Special",requires:function(e,a,n){return e.sp>3},execute:function(e,a,n,t){let s=a.hp,r=0;for(var i=0;i<e.lvl;i++)r+=.1;let o=55+r;a.hp=a.hp-o;let d=s-a.hp;a.hp=a.hp-e.atk,a.atk=Math.round(a.atk/100*65);let l=(new Discord.MessageEmbed).setTitle(`[${e.username}] Tornado Wyvern used **Hyper Shield Crash**.`).setDescription(`Wyvern used it's free spinning layer to reduce incoming damage by 35%, while riding up the stadium slope to the very ledge and coming back down to slam into the opponent for ${d} damage plus the opponent's attack damage.`).setColor("#551a8b");n.channel.createMessage({embed:l})}}],this.passives=[{name:"Passive",requires:function(e,a,n,t){let s;return s=e.hp>Math.round(e.maxhp/100*50)&&e.stamina>=6},execute:function(e,a,n,t){e.stamina=e.stamina+2,a.atk=Math.round(a.atk/100*75);let s=(new Discord.MessageEmbed).setTitle(`[${e.username}] Tornado Wyvern activated **Tornado Parry**.`).setDescription("Wyvern used the free spinning blades on it's layer to parry the opponent, preserving it's own stamina and increasing it by 2. The parried blow was reduced by 50% and inflicted back on the attacker.").setColor("#551a8b");n.channel.createMessage({embed:s})},cd:180}],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=TornadoWyvern;