const Beyblade=require("./Beyblade.js");class FireworkPegasus extends Beyblade{constructor(e,s){super("Firework Pegasus","Attack","https://media.discordapp.net/attachments/692234599350140961/809218973392568320/image0.png",e,s),this.specials=[{name:"Starblast Attack",requires:function(e,s,t){return e.sp>=5},execute:function(e,s,t){s.hp,Math.floor(31+.7*(e.lvl-1)),t.add(`[${e.username}] used **Fireblast Attack**!`),e.sp-=5}},{name:"Golden Tornado",requires:function(e,s,t){return s.hp<s.maxhp/100*30&&e.sp>=3},execute:function(e,s,t){t.add(`[${e.username}] used **Golden Tornado**!`),s.hp=Math.round(s.hp/100*50),e.sp-=3}},{name:"Luck Bringer",requires:function(e,s,t){return e.lvl>=50&&e.sp>=3&&!e.bey.LBUsed},execute:function(e,s,t){t.add(`[${e.username}] used **Luck Bringer**!`),s.hp=Math.round(s.hp/100*50),e.bey.LBUsed=!0,e.sp-=3}},{name:"New Year Nova",requires:function(e,s,t){return e.sp>=10&&s.hp<s.maxhp/100*20},execute:function(e,s,t){s.stability=.1,e.hp=Math.floor(e.hp/2)}}],this.passives=[{name:"New Energy",requires:function(e,s,t){return e.hp<e.maxhp/2},execute:function(e,s,t){s.atk=Math.round(s.atk/100*80),e.sp+=1},cd:0}],this.modes=[],this.LBUsed=!1,this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=FireworkPegasus;