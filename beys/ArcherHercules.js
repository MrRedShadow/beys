const Beyblade=require("./Beyblade.js");class Beyblade extends Beyblade{constructor(){super("Beyblade","Type","https://images-ext-1.discordapp.net/external/SkyihHxg4MHJ_qWWMLPFNPYVV-Z1XnxCfqd0EQrXYXA/%3Fsize%3D128/https/cdn.discordapp.com/avatars/570115430786531340/e3ff8924f1d5d41c975907008f0059f2.png?width=100&height=100"),this.specials=[{name:"Archer Strike",requires:function(a,t,e,n){return a.sp>=3&&a.stamina>=Math.round(a.maxstamina/100*60)},execute:function(a,t,e,n){t.hp-=50+.5*n.lvl,a.stamina+=2}},{name:"Herculean Barrier",requires:function(a,t,e,n){return a.sp>=3&&a.stamina<=Math.round(a.maxstamina/100*60)},execute:function(a,t,e,n){t.stability-=15+.2*n.lvl,t.atk=Math.round(t.atk/100*20)}}],this.passives=[{name:"Eternal Stamina",requires:function(a,t,e,n){return a.stamina<=Math.round(a.maxstamina/100*20)},execute:function(a,t,e,n){a.stamina+=2+.01*n.lvl},cd:60}],this.EndlessEndurance={active:void 0,requires:function(a,t,e,n){return a.stamina>=Math.round(a.maxstamina/100*60)},boost:function(a,t,e,n){a.stamina+=.2,a.atk-=.5}},this.EndlessBarrier={active:void 0,requires:function(a,t,e,n){return a.stamina<=Math.round(a.maxstamina/100*60)},boost:function(a,t,e,n){a.stamina-=.1,t.atk-=t.atk=Math.round(t.atk/100*80)}},this.sd=0,this.sdchangable=!1}}module.exports=Beyblade;