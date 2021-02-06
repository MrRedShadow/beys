const bcworkshop = new require("bcworkshop");

const passive = new bcworkshop.Passive("Passive", function check(acted, victim, message, player){
    return false;
  }, function passed(acted, victim, message, player){
    victim.hp = victim.hp - 28;
    let embed = new Discord.MessageEmbed()
    .setTitle(`Uh oh, [${acted.username}] ${acted.bey.bbname || acted.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`)
    .setDescription("Please report this at the support server.")
    .setColor("#551a8b");
    message.channel.createMessage({embed: embed});
  }, 180);

const special = new bcworkshop.Special("Special", function req(acted, victim, logger){return acted.sp > 3}, function special(acted, victim, message, player){


    


    let move = Math.floor(Math.random() * 3);





    switch(move){


      case 0:


        let embed = new Discord.MessageEmbed()


          .setTitle(`[${acted.username}] Demonic Armageddon used **Special Move 1st Form: Hell Blaze**. 95 damage dealt.`)


          .setColor("#551a8b");


        victim.hp = victim.hp - 95;


        message.channel.send(embed);


        break;


      case 1:


        let embed2 = new Discord.MessageEmbed()


          .setTitle(`[${acted.username}] Demonic Armageddon used **Special Move 2nd Form: Demonic Illusion**. Its opponent was blinded for 1 minute and missed its attack. 65% damage reduced.`)


          .setColor("#551a8b");


        victim.atk = Math.round((victim.atk / 100) * 35);


        message.channel.send(embed2);


        break;


      case 2:


        let embed3 = new Discord.MessageEmbed()


          .setTitle(`[${acted.username}] Demonic Armageddon used **Special Move 3rd Form: Cage of Death**.  The opponent was unable to attack due to being trapped in the cage. 50 damage dealt. Gained 3 stamina from the wind pressure generated by the cage's creation.`)


          .setColor("#551a8b");


        victim.atk = 0;


        victim.hp = victim.hp - 50;


        acted.stamina = acted.stamina + 3;


        message.channel.send(embed3);


        break;


    }


  });

const DemonicArmageddon = new bcworkshop.Beyblade({name: "Demonic Armageddon", type: "Balance", imageLink: "http://pm1.narvii.com/6620/d1e927c226d49e31e18f898a617284c3e4b66704_00.jpg"})
.attachPassive(passive)
.attachSpecial(special)
.setDefaultSD("RIGHT")
.setSDChangable(false);

module.exports = DemonicArmageddon;