const Beyblade=require("./Beyblade.js");class DrainFafnir extends Beyblade{constructor(){super("Drain Fafnir","Stamina","https://static.wikia.nocookie.net/beyblade/images/2/21/Beyblade_Drain_Fafnir.png/revision/latest?cb=20180716233052"),this.specials=[],this.passives=[{name:"Nothing Break",requires:function(i,a,t){return i.stamina>=i.maxstamina/100*80&&i.sp>=3},execute:function(i,a,t){i.stamina-=i.maxstamina/100*40,a.hp-=.03*i.atk*i.lvl,i.sp=0,t.add(`[${i.username}] Drain Fafnir used **Nothing Break**!`)},cd:150}],this.DrainSpin={active:void 0,requires:function(i,a,t){return i.stamina<a.stamina&&i.sp>=.5&&i.sp<=2.5&&a.move==fight},boost:function(i,a,t){a.stamina-=.1+.001*i.lvl,i.stamina+=.1+.001*i.lvl,a.stability-=2,i.stability+=2,i.sp-=.5}},this.TrueDrainSpin={active:void 0,requires:function(i,a,t){return i.stamina<a.stamina&&i.sp>=3&&a.move==fight},boost:function(i,a,t){a.stamina-=1+.002*i.lvl,i.stamina+=1+.002*i.lvl,a.stability-=4,i.stability+=4,i.sp-=.5}},this.FullPowerResonance={active:void 0,requires:function(i,a,t){return i.hp<=i.maxhp/100*40&&i.sp>=.5},boost:function(i,a,t){i.atk+=i.atk/100*.15*i.lvl,i.sp-=.5}},this.sd=1,this.sdchangable=!1}}module.exports=DrainFafnir;