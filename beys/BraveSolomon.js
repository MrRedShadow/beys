<<<<<<< HEAD
const Beyblade=require("./Beyblade.js");class BraveSolomon extends Beyblade{constructor(){super("Brave Solomon","Attack","https://i.ibb.co/m6gWwM6/solomon.png"),this.specials=[{name:"Royal Guard",requires:function(e,a,t){return e.sp>=5&&e.hp>=Math.round(e.maxhp/100*20)},execute:function(e,a,t){e.hp+=Math.round(e.maxhp/100*25),e.stamina+=Math.round(3+.1*e.lvl),a.hp-=Math.round(40+.4*a.lvl),t.add(`[${e.username}] Brave Solomon used **Royal Guard**!`)}},{name:"Kings Sacrifice",requires:function(e,a,t){return e.sp>=5&&e.hp<=Math.round(e.maxhp/100*20)&&!e.bey.KSUsed},execute:function(e,a,t){e.bey.KSUSed=!0,e.sp+=Math.round(3+.2*e.lvl),e.hp+=Math.round(e.maxhp/100*20),e.stamina+=Math.round(3+.1*e.lvl),t.add(`[${e.username}] Brave Solomon used **Kings Sacrifice**!`)}}],this.passives=[{name:"Golden Temple",requires:function(e,a,t){return e.sp>=1&&e.hp>=Math.round(e.maxhp/100*70)},execute:function(e,a,t){e.sp-=Math.round(1-.05*e.lvl),a.atk=0,a.hp-=a.atk,t.add(`[${e.username}] Brave Solomon activated **Golden Temple**!`)},cd:120},{name:"Legends Prophecy",requires:function(e,a,t){return e.sp>=1&&e.hp<=Math.round(e.maxhp/100*70)},execute:function(e,a,t){e.sp+=Math.round(2+.1*e.lvl),a.sp+=Math.round(1-.05*a.lvl),a.stamina-=Math.round(1-.1*e.lvl),t.add(`[${e.username}] Brave Solomon activated **Legends Prophecy**!`)},cd:240},{name:"SoW Drop",requires:function(e,a,t){return!!e.bey.ScriptsOfWar.active},execute:function(e,a,t){e.sp-=1,e.sp<=0&&(e.bey.ScriptsOfWar.active=!1)},cd:0}],this.ScriptsOfPeace={active:void 0,requires:function(e,a,t){return e.sp<=4&&0==e.bey.ScriptsOfWar.active},boost:function(e,a,t){e.atk=Math.round(e.atk/100*20),e.stamina+=Math.round(.2+.01*e.lvl),a.atk=Math.round(a.atk/100*20),t.add(`[${e.username}] Brave Solomon is on mode **Scripts Of Peace**!`)}},this.ScriptsOfWar={active:void 0,requires:function(e,a,t){return e.sp>=5},boost:function(e,a,t){e.bey.ScriptsOfPeace.active&&(e.bey.ScriptsOfPeace.active=!1),e.atk+=Math.round(2+.1*e.lvl),e.stamina-=Math.round(.2+.01*e.lvl),t.add(`[${e.username}] Brave Solomon is on mode **Scripts Of War**!`)}},this.KSUsed=!1,this.sd=0,this.sdchangable=!1}}module.exports=BraveSolomon;
=======
const Beyblade=require("./Beyblade.js");class BraveSolomon extends Beyblade{constructor(e,a){super("Brave Solomon","Attack","https://i.ibb.co/m6gWwM6/solomon.png",e,a),this.specials=[{name:"Royal Guard",requires:function(e,a,t){return e.sp>=5&&e.hp>=Math.round(e.maxhp/100*20)},execute:function(e,a,t){e.hp+=Math.round(e.maxhp/100*30),e.stamina+=Math.round(3+.1*e.lvl),a.hp-=Math.round(40+.4*a.lvl),t.add(`[${e.username}] Brave Solomon used **Royal Guard**!`)}},{name:"Kings Sacrifice",requires:function(e,a,t){return e.sp>=5&&e.hp<=Math.round(e.maxhp/100*20)&&!e.bey.KSUsed},execute:function(e,a,t){e.bey.KSUSed=!0,e.sp+=Math.round(3+.2*e.lvl),e.hp+=Math.round(e.maxhp/100*20),e.stamina+=Math.round(3+.1*e.lvl),t.add(`[${e.username}] Brave Solomon used **Kings Sacrifice**!`)}}],this.passives=[{name:"Golden Temple",requires:function(e,a,t){return e.sp>=1&&e.hp>=Math.round(e.maxhp/100*70)},execute:function(e,a,t){e.sp-=Math.round(1-.05*e.lvl),a.atk=0,a.hp-=a.atk,t.add(`[${e.username}] Brave Solomon activated **Golden Temple**!`)},cd:120},{name:"Legends Profecy",requires:function(e,a,t){return e.sp>=1&&e.hp<=Math.round(e.maxhp/100*70)},execute:function(e,a,t){e.sp+=Math.round(2-.1*e.lvl),a.sp+=Math.round(1-.05*a.lvl),a.stamina-=Math.round(1-.1*e.lvl),t.add(`[${e.username}] Brave Solomon activated **Legends Profecy**!`)},cd:240},{name:"SoW Drop",requires:function(e,a,t){return!!e.bey.ScriptsOfWar.active},execute:function(e,a,t){e.sp-=1,e.sp<=0&&(e.bey.ScriptsOfWar.active=!1)},cd:0}],this.ScriptsOfPeace={active:void 0,requires:function(e,a,t){return e.sp<=4&&0==e.bey.ScriptsOfWar.active},boost:function(e,a,t){e.atk-=Math.round(1-.05*e.lvl),e.stamina+=Math.round(.5+.05*e.lvl),a.atk-=Math.round(2+.1*a.lvl),t.add(`[${e.username}] Brave Solomon is on mode **Scripts Of Peace**!`)}},this.ScriptsOfWar={active:void 0,requires:function(e,a,t){return e.sp>=5},boost:function(e,a,t){e.bey.ScriptsOfPeace.active&&(e.bey.ScriptsOfPeace.active=!1),e.atk+=Math.round(2+.1*e.lvl),e.sp-=Math.round(.8+.02*e.lvl),e.stamina-=Math.round(.5+.03*e.lvl),t.add(`[${e.username}] Brave Solomon is on mode **Scripts Of War**!`)}},this.modes=["ScriptsOfPeace","ScriptsOfWar"],this.KSUsed=!1,this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=BraveSolomon;
>>>>>>> 92a054d0e7d73819b6f00070257f75cf4290e28a
