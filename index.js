require("dotenv").config()
const Discord = require('discord.js');
const client = new Discord.Client();
require('events').EventEmitter.defaultMaxListeners = 4000;
const config = require("./config.json");

////////////////////////ANUNCIOS//////////////////////////////

    
/////////////////////////ENSAMBLADOR////////////////////////////

//LLANTAS Y PUERTAS
client.on('message', msg => {
  if (msg.content === '!llantas') {
    msg.reply('⚙️ Llantas ⚙️\n\t\t\t\t100 Hierro - 20 Plastico');
  }

  if (msg.content === '!puertas') {
    msg.reply('⚙️ Puertas ⚙️\n\t\t\t100 Hierro - 20 Plastico - 20 Vídrio');
  }
});

//MOTOCICLETAS
client.on('message', msg => {
  if (msg.content === '!akuma') {
    msg.channel.send('⚙️ Akuma ($12.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!avarus') {
    msg.reply('⚙️ Avarus ($15.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!bagger') {
    msg.reply('⚙️ Bagger ($16.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!bati') {
    msg.reply('⚙️ Bati ($14.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!bati2') {
    msg.reply('⚙️ Bati 2 ($15.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!bf400') {
    msg.reply('⚙️ BF400 ($13.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!carbonrs') {
    msg.reply('⚙️ Carbon RS ($18.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!cliffhanger') {
    msg.reply('⚙️ Cliffhanger ($15.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!daemon') {
    msg.reply('⚙️ Daemon ($19.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!defiler') {
    msg.reply('⚙️ Defiler ($16.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!diablous') {
    msg.reply('⚙️ Diablous ($18.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!double') {
    msg.reply('⚙️ Double ($16.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!enduro') {
    msg.reply('⚙️ Enduro ($8.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!esskey') {
    msg.reply('⚙️ Esskey ($14.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!faggio') {
    msg.reply('⚙️ Faggio ($5.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!faggio2') {
    msg.reply('⚙️ Faggio 2 ($4.000) ⚙️\n\t\t\t333 Hierro - 250 Plastico - 167 Vídrio');
  }

  if (msg.content === '!faggio3') {
    msg.reply('⚙️ Faggio 3 ($4.000) ⚙️\n\t\t\t333 Hierro - 250 Plastico - 167 Vídrio');
  }

  if (msg.content === '!fcr') {
    msg.reply('⚙️ FCR ($12.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!fcr2') {
    msg.reply('⚙️ FCR 2 ($14.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!gargoyle') {
    msg.reply('⚙️ Gargoyle ($17.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!innovation') {
    msg.reply('⚙️ Innovation ($16.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!lectro') {
    msg.reply('⚙️ Lectro ($15.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!manchez') {
    msg.reply('⚙️ Manchez ($15.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }
    
  if (msg.content === '!manchez2') {
    msg.reply('⚙️ Manchez 2 ($12.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!nemesis') {
    msg.reply('⚙️ Nemesis ($15.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!pcj') {
    msg.reply('⚙️ PCJ ($12.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!ratbike') {
    msg.reply('⚙️ Ratbike ($15.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!ruffian') {
    msg.reply('⚙️ Ruffian ($18.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!sanchez') {
    msg.reply('⚙️ Sanchez ($12.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!sanchez2') {
    msg.reply('⚙️ Sanchez 2 ($12.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!sovereign') {
    msg.reply('⚙️ Sovereign ($15.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!thrust') {
    msg.reply('⚙️ Thrust ($16.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!vader') {
    msg.reply('⚙️ Vader ($14.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!vindicator') {
    msg.reply('⚙️ Vindicator ($13.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!vortex') {
    msg.reply('⚙️ Vortex ($19.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!wolfsbane') {
    msg.reply('⚙️ Wolfsbane ($15.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!zombieb') {
    msg.reply('⚙️ Zombieb ($16.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }

  if (msg.content === '!sanctus') {
    msg.reply('⚙️ Sanctus ($22.000) ⚙️\n\t\t\t500 Hierro - 375 Plastico - 250 Vídrio');
  }
});

//SEDAN//

client.on('message', msg => {
  if (msg.content === '!asea') {
    msg.reply('⚙️ Asea ($12.000) ⚙️\n\t\t\t233 Hierro - 140 Plastico - 117 Vídrio');
  }

  if (msg.content === '!asterope') {
    msg.reply('⚙️ Asterope ($12.000) ⚙️\n\t\t\t200 Hierro - 120 Plastico - 100 Vídrio');
  }

  if (msg.content === '!cog55') {
    msg.reply('⚙️ Cog55 ($13.000) ⚙️\n\t\t\t700 Hierro - 420 Plastico - 350 Vídrio');
  }

  if (msg.content === '!cognoscenti') {
    msg.reply('⚙️ Cognoscenti ($25.000) ⚙️\n\t\t\t767 Hierro - 460 Plastico - 383 Vídrio');
  }

  if (msg.content === '!cognoscenti2') {
    msg.reply('⚙️ Cognoscenti 2 ($25.000) ⚙️\n\t\t\t767 Hierro - 460 Plastico - 383 Vídrio');
  }

  if (msg.content === '!emperor') {
    msg.reply('⚙️ Emperor ($10.000) ⚙️\n\t\t\t267 Hierro - 160 Plastico - 133 Vídrio');
  }

  if (msg.content === '!emperor2') {
    msg.reply('⚙️ Emperor 2 ($10.000) ⚙️\n\t\t\t200 Hierro - 120 Plastico - 100 Vídrio');
  }

  if (msg.content === '!emperor3') {
    msg.reply('⚙️ Emperor 3 ($10.000) ⚙️\n\t\t\t200 Hierro - 120 Plastico - 100 Vídrio');
  }

  if (msg.content === '!fugitive') {
    msg.reply('⚙️ Fugitive ($17.000) ⚙️\n\t\t\t733 Hierro - 440 Plastico - 367 Vídrio');
  }

  if (msg.content === '!glendale') {
    msg.reply('⚙️ Glendale ($10.000) ⚙️\n\t\t\t200 Hierro - 120 Plastico - 100 Vídrio');
  }
  
  if (msg.content === '!glendale2') {
    msg.reply('⚙️ Glendale 2 ($10.000) ⚙️\n\t\t\t200 Hierro - 120 Plastico - 100 Vídrio');
  }

  if (msg.content === '!ingot') {
    msg.reply('⚙️ Ingot ($11.000) ⚙️\n\t\t\t200 Hierro - 120 Plastico - 100 Vídrio');
  }

  if (msg.content === '!intruder') {
    msg.reply('⚙️ Intruder ($11.000) ⚙️\n\t\t\t267 Hierro - 160 Plastico - 133 Vídrio');
  }

  if (msg.content === '!oracle') {
    msg.reply('⚙️ Oracle ($36.000) ⚙️\n\t\t\t267 Hierro - 160 Plastico - 133 Vídrio');
  }

  if (msg.content === '!premier') {
    msg.reply('⚙️ Premier ($11.000) ⚙️\n\t\t\t200 Hierro - 120 Plastico - 100 Vídrio');
  }

  if (msg.content === '!primo') {
    msg.reply('⚙️ Primo ($11.000) ⚙️\n\t\t\t267 Hierro - 160 Plastico - 133 Vídrio');
  }

  if (msg.content === '!primo2') {
    msg.reply('⚙️ Primo 2 ($12.000) ⚙️\n\t\t\t267 Hierro - 160 Plastico - 133 Vídrio');
  }

  if (msg.content === '!regina') {
    msg.reply('⚙️ Regina ($8.000) ⚙️\n\t\t\t267 Hierro - 160 Plastico - 133 Vídrio');
  }

  if (msg.content === '!romero') {
    msg.reply('⚙️ Romero ($14.000) ⚙️\n\t\t\t233 Hierro - 140 Plastico - 117 Vídrio');
  }

  if (msg.content === '!schafter2') {
    msg.reply('⚙️ Schafter 2 ($16.000) ⚙️\n\t\t\t267 Hierro - 160 Plastico - 133 Vídrio');
  }

  if (msg.content === '!schafter3') {
    msg.reply('⚙️ Schafter 3 ($23.000) ⚙️\n\t\t\t267 Hierro - 160 Plastico - 133 Vídrio');
  }

  if (msg.content === '!schafter6') {
    msg.reply('⚙️ Schafter 6 ($17.000) ⚙️\n\t\t\t700 Hierro - 420 Plastico - 350 Vídrio');
  }

  if (msg.content === '!stainer') {
    msg.reply('⚙️ Stainer ($11.000) ⚙️\n\t\t\t267 Hierro - 160 Plastico - 133 Vídrio');
  }

  if (msg.content === '!superd') {
    msg.reply('⚙️ Super Diamond ($50.000) ⚙️\n\t\t\t700 Hierro - 420 Plastico - 350 Vídrio');
  }

  if (msg.content === '!stratum') {
    msg.reply('⚙️ Stratum ($12.000) ⚙️\n\t\t\t267 Hierro - 160 Plastico - 133 Vídrio');
  }

  if (msg.content === '!surge') {
    msg.reply('⚙️ Surge ($16.000) ⚙️\n\t\t\t200 Hierro - 120 Plastico - 100 Vídrio');
  }

  if (msg.content === '!tailgater') {
    msg.reply('⚙️ Tailgater ($15.000) ⚙️\n\t\t\t267 Hierro - 160 Plastico - 133 Vídrio');
  }

  if (msg.content === '!warrener') {
    msg.reply('⚙️ Warrener ($11.000) ⚙️\n\t\t\t267 Hierro - 160 Plastico - 133 Vídrio');
  }

  if (msg.content === '!washington') {
    msg.reply('⚙️ Washington ($11.000) ⚙️\n\t\t\t233 Hierro - 140 Plastico - 117 Vídrio');
  }
});

//COMPACTOS

client.on('message', msg => {
  if (msg.content === '!blista') {
    msg.reply('⚙️ Blista ($30.000) ⚙️\n\t\t\t292 Hierro - 100 Plastico - 70 Vídrio');
  }

  if (msg.content === '!brioso') {
    msg.reply('⚙️ Brioso ($15.000) ⚙️\n\t\t\t208 Hierro - 71 Plastico - 50 Vídrio');
  }

  if (msg.content === '!diletantte') {
    msg.reply('⚙️ Diletantte ($12.000) ⚙️\n\t\t\t292 Hierro - 100 Plastico - 70 Vídrio');
  }

  if (msg.content === '!issi2') {
    msg.reply('⚙️ Issi 2 ($17.000) ⚙️\n\t\t\t208 Hierro - 71 Plastico - 50 Vídrio');
  }

  if (msg.content === '!issi3') {
    msg.reply('⚙️ Issi 3 ($15.000) ⚙️\n\t\t\t250 Hierro - 86 Plastico - 60 Vídrio');
  }

  if (msg.content === '!panto') {
    msg.reply('⚙️ Panto ($10.000) ⚙️\n\t\t\t250 Hierro - 86 Plastico - 60 Vídrio');
  }

  if (msg.content === '!praire') {
    msg.reply('⚙️ Praire ($15.000) ⚙️\n\t\t\t250 Hierro - 100 Plastico - 70 Vídrio');
  }

  if (msg.content === '!rhapsody') {
    msg.reply('⚙️ Rhapsody ($11.000) ⚙️\n\t\t\t292 Hierro - 100 Plastico - 70 Vídrio');
  }
  
   if (msg.content === '!weevil') {
    msg.reply('⚙️ BF Weevil ($150.000) ⚙️\n\t\t\t292 Hierro - 100 Plastico - 70 Vídrio');
  }
  
  if (msg.content === '!club') {
    msg.reply('⚙️ Club ($20.000) ⚙️\n\t\t\t208 Hierro - 71 Plastico - 50 Vídrio');
  }

  if (msg.content === '!brioso2') {
    msg.reply('⚙️ Brioso 300 ($30.000) ⚙️\n\t\t\t208 Hierro - 71 Plastico - 50 Vídrio');
  }
    
});

//COUPE

client.on('message', msg => {
  if (msg.content === '!zion2') {
    msg.reply('⚙️ Zion 2 ($40.000) ⚙️\n\t\t\t3000 Hierro - 3000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!zion') {
    msg.reply('⚙️ Zion ($38.000) ⚙️\n\t\t\t3000 Hierro - 3000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!windsor2') {
    msg.reply('⚙️ Windsor 2 ($41.000) ⚙️\n\t\t\t4000 Hierro - 4000 Plastico - 4000 Vídrio');
  }

  if (msg.content === '!windsor') {
    msg.reply('⚙️ Windsor ($32.000) ⚙️\n\t\t\t4250 Hierro - 4250 Plastico - 4250 Vídrio');
  }

  if (msg.content === '!sentinel2') {
    msg.reply('⚙️ Sentinel 2 ($40.000) ⚙️\n\t\t\t3250 Hierro - 3250 Plastico - 3250 Vídrio');
  }

  if (msg.content === '!sentinel') {
    msg.reply('⚙️ Sentinel ($38.000) ⚙️\n\t\t\t2500 Hierro - 2500 Plastico - 2500 Vídrio');
  }

  if (msg.content === '!oracle2') {
    msg.reply('⚙️ Oracle 2 ($25.000) ⚙️\n\t\t\t3000 Hierro - 3000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!jackal') {
    msg.reply('⚙️ Jackal ($40.000) ⚙️\n\t\t\t2500 Hierro - 2500 Plastico - 2500 Vídrio');
  }

  if (msg.content === '!felon') {
    msg.reply('⚙️ Felon ($36.000) ⚙️\n\t\t\t3000 Hierro - 3000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!felon2') {
    msg.reply('⚙️ Felon 2 ($35.000) ⚙️\n\t\t\t2500 Hierro - 2500 Plastico - 2500 Vídrio');
  }

  if (msg.content === '!f620') {
    msg.reply('⚙️ F620 ($45.000) ⚙️\n\t\t\t2500 Hierro - 2500 Plastico - 2500 Vídrio');
  }

  if (msg.content === '!exemplar') {
    msg.reply('⚙️ Exemplar ($36.000) ⚙️\n\t\t\t9250 Hierro - 9250 Plastico - 9250 Vídrio');
  }

  if (msg.content === '!cogcabrio') {
    msg.reply('⚙️ Cogcabrio ($35.000) ⚙️\n\t\t\t3000 Hierro - 3000 Plastico - 3000 Vídrio');
  }
});

//MUSCULOSOS

client.on('message', msg => {
  if (msg.content === '!blade') {
    msg.reply('⚙️ Blade ($25.000) ⚙️\n\t\t\t3000 Hierro - 1500 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!buccanner') {
    msg.reply('⚙️ Buccanner ($28.000) ⚙️\n\t\t\t2750 Hierro - 1375 Plastico - 1375 Vídrio');
  }

  if (msg.content === '!buccanner2') {
    msg.reply('⚙️ Buccanner 2 ($30.000) ⚙️\n\t\t\t2750 Hierro - 1375 Plastico - 1375 Vídrio');
  }

  if (msg.content === '!chino') {
    msg.reply('⚙️ Chino ($25.000) ⚙️\n\t\t\t2750 Hierro - 1375 Plastico - 1375 Vídrio');
  }

  if (msg.content === '!chino2') {
    msg.reply('⚙️ Chino 2 ($30.000) ⚙️\n\t\t\t2750 Hierro - 1375 Plastico - 1375 Vídrio');
  }

  if (msg.content === '!clique') {
    msg.reply('⚙️ Clique ($35.000) ⚙️\n\t\t\t2500 Hierro - 1250 Plastico - 1250 Vídrio');
  }

  if (msg.content === '!coquette3') {
    msg.reply('⚙️ Coquette 3 ($36.000) ⚙️\n\t\t\t2500 Hierro - 1250 Plastico - 1250 Vídrio');
  }

  if (msg.content === '!deviant') {
    msg.reply('⚙️ Deviant ($45.000) ⚙️\n\t\t\t3000 Hierro - 1500 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!dominator') {
    msg.reply('⚙️ Dominator ($14.000) ⚙️\n\t\t\t2500 Hierro - 1250 Plastico - 1250 Vídrio');
  }

  if (msg.content === '!dominator3') {
    msg.reply('⚙️ Dominator 3 ($36.000) ⚙️\n\t\t\t3000 Hierro - 1500 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!dukes') {
    msg.reply('⚙️ Dukes ($15.000) ⚙️\n\t\t\t2750 Hierro - 1375 Plastico - 1375 Vídrio');
  }

  if (msg.content === '!faction') {
    msg.reply('⚙️ Faction ($12.000) ⚙️\n\t\t\t3000 Hierro - 1500 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!faction2') {
    msg.reply('⚙️ Faction 2 ($13.000) ⚙️\n\t\t\t3000 Hierro - 1500 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!faction3') {
    msg.reply('⚙️ Faction 3 ($11.000) ⚙️\n\t\t\t3000 Hierro - 1500 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!gauntlet') {
    msg.reply('⚙️ Gauntlet ($18.000) ⚙️\n\t\t\t3000 Hierro - 1500 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!gauntlet3') {
    msg.reply('⚙️ Gauntlet 3 ($19.000) ⚙️\n\t\t\t3000 Hierro - 1500 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!hermes') {
    msg.reply('⚙️ Hermes ($14.000) ⚙️\n\t\t\t3000 Hierro - 1500 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!hotknife') {
    msg.reply('⚙️ Gauntlet 3 ($15.000) ⚙️\n\t\t\t2250 Hierro - 1125 Plastico - 1125 Vídrio');
  }

  if (msg.content === '!impaler') {
    msg.reply('⚙️ Impaler ($14.000) ⚙️\n\t\t\t2750 Hierro - 1325 Plastico - 1325 Vídrio');
  }

  if (msg.content === '!impaler2') {
    msg.reply('⚙️ Impaler 2 ($18.000) ⚙️\n\t\t\t3250 Hierro - 1625 Plastico - 1625 Vídrio');
  }

  if (msg.content === '!impaler3') {
    msg.reply('⚙️ Impaler 3 ($16.000) ⚙️\n\t\t\t3250 Hierro - 1625 Plastico - 1625 Vídrio');
  }

  if (msg.content === '!imperator') {
    msg.reply('⚙️ Imperator ($32.000) ⚙️\n\t\t\t3250 Hierro - 1625 Plastico - 1625 Vídrio');
  }

  if (msg.content === '!imperator2') {
    msg.reply('⚙️ Imperator ($14.000) ⚙️\n\t\t\t2750 Hierro - 1325 Plastico - 1325 Vídrio');
  }

  if (msg.content === '!lurcher') {
    msg.reply('⚙️ Lurcher ($13.000) ⚙️\n\t\t\t2750 Hierro - 1325 Plastico - 1325 Vídrio');
  }

  if (msg.content === '!moonbean') {
    msg.reply('⚙️ Moonbean ($14.000) ⚙️\n\t\t\t3000 Hierro - 1500 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!moonbean2') {
    msg.reply('⚙️ Moonbean 2 ($15.000) ⚙️\n\t\t\t3000 Hierro - 1500 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!nightshade') {
    msg.reply('⚙️ Nightshade ($23.000) ⚙️\n\t\t\t3000 Hierro - 1500 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!peyote') {
    msg.reply('⚙️ Peyote ($90.000) ⚙️\n\t\t\t3000 Hierro - 1500 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!peyote2') {
    msg.reply('⚙️ Peyote 2 ($13.000) ⚙️\n\t\t\t3000 Hierro - 1500 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!phoenix') {
    msg.reply('⚙️ Phoenix ($14.000) ⚙️\n\t\t\t3000 Hierro - 1500 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!picador') {
    msg.reply('⚙️ Picador ($11.000) ⚙️\n\t\t\t3000 Hierro - 1500 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!ratloader') {
    msg.reply('⚙️ Ratloader ($6.000) ⚙️\n\t\t\t3000 Hierro - 1500 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!ratloader2') {
    msg.reply('⚙️ Ratloader 2 ($8.000) ⚙️\n\t\t\t2750 Hierro - 1375 Plastico - 1375 Vídrio');
  }

  if (msg.content === '!ruiner') {
    msg.reply('⚙️ Ruiner ($11.000) ⚙️\n\t\t\t3000 Hierro - 3000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!ruiner2') {
    msg.reply('⚙️ Ruiner 2 ($12.000) ⚙️\n\t\t\t2500 Hierro - 2500 Plastico - 2500 Vídrio');
  }

  if (msg.content === '!ruiner3') {
    msg.reply('⚙️ Ruiner 3 ($1.000) ⚙️\n\t\t\t2500 Hierro - 2500 Plastico - 2500 Vídrio');
  }

  if (msg.content === '!sabregt') {
    msg.reply('⚙️ Sabre GT ($12.000) ⚙️\n\t\t\t2750 Hierro - 1375 Plastico - 1375 Vídrio');
  }

  if (msg.content === '!sabregt2') {
    msg.reply('⚙️ Sabre GT 2 ($14.000) ⚙️\n\t\t\t3000 Hierro - 1500 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!slamvan') {
    msg.reply('⚙️ Slamvan ($11.000) ⚙️\n\t\t\t2500 Hierro - 2500 Plastico - 2500 Vídrio');
  }

  if (msg.content === '!slamvan2') {
    msg.reply('⚙️ Slamvan 2 ($13.000) ⚙️\n\t\t\t3000 Hierro - 3000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!slamvan3') {
    msg.reply('⚙️ Slamvan 3 ($14.000) ⚙️\n\t\t\t2500 Hierro - 2500 Plastico - 2500 Vídrio');
  }

  if (msg.content === '!slamvan4') {
    msg.reply('⚙️ Slamvan 4 ($12.000) ⚙️\n\t\t\t3000 Hierro - 3000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!slamvan5') {
    msg.reply('⚙️ Slamvan5 ($11.000) ⚙️\n\t\t\t2750 Hierro - 2750 Plastico - 2750 Vídrio');
  }

  if (msg.content === '!stallion') {
    msg.reply('⚙️ Stallion ($12.000) ⚙️\n\t\t\t3000 Hierro - 3000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!stallion2') {
    msg.reply('⚙️ Stallion 2 ($14.000) ⚙️\n\t\t\t3000 Hierro - 3000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!tampa') {
    msg.reply('⚙️ Tampa ($14.000) ⚙️\n\t\t\t3000 Hierro - 3000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!tampa2') {
    msg.reply('⚙️ Tampa 2 ($110.000) ⚙️\n\t\t\t3000 Hierro - 3000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!tulip') {
    msg.reply('⚙️ Tulip ($12.000) ⚙️\n\t\t\t3000 Hierro - 3000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!vamos') {
    msg.reply('⚙️ Vamos ($12.000) ⚙️\n\t\t\t3000 Hierro - 3000 Plastico - 3000 Vídrio');
  }
  
  if (msg.content === '!vigero') {
    msg.reply('⚙️ Vigero ($13.000) ⚙️\n\t\t\t3000 Hierro - 3000 Plastico - 3000 Vídrio');
  }
  
  if (msg.content === '!virgo') {
    msg.reply('⚙️ Virgo ($12.000) ⚙️\n\t\t\t3000 Hierro - 3000 Plastico - 3000 Vídrio');
  }
  
  if (msg.content === '!virgo2') {
    msg.reply('⚙️ Virgo 2 ($12.000) ⚙️\n\t\t\t3000 Hierro - 3000 Plastico - 3000 Vídrio');
  }
  
  if (msg.content === '!virgo3') {
    msg.reply('⚙️ Virgo 3 ($12.000) ⚙️\n\t\t\t3000 Hierro - 3000 Plastico - 3000 Vídrio');
  }
  
  if (msg.content === '!voodoo') {
    msg.reply('⚙️ Voodoo ($12.000) ⚙️\n\t\t\t3000 Hierro - 3000 Plastico - 3000 Vídrio');
  }
  
  if (msg.content === '!voodoo2') {
    msg.reply('⚙️ Voodoo 2 ($12.000) ⚙️\n\t\t\t3000 Hierro - 3000 Plastico - 3000 Vídrio');
  }
  
  if (msg.content === '!yosemite') {
    msg.reply('⚙️ Yosemite ($12.000) ⚙️\n\t\t\t2500 Hierro - 2500 Plastico - 2500 Vídrio');
  }
    
  if (msg.content === '!yosemite3') {
    msg.reply('⚙️ Yosemite 3 ($50.000) ⚙️\n\t\t\t2500 Hierro - 2500 Plastico - 2500 Vídrio');
  }
    
});

//DEPORTIVOS

client.on('message', msg => {
  if (msg.content === '!alpha') {
    msg.reply('⚙️ Alpha ($110.000) ⚙️\n\t\t\t7000 Hierro - 4666 Plastico - 3500 Vídrio');
  }

  if (msg.content === '!banshee') {
    msg.reply('⚙️ Banshee ($85.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!blistac2') {
    msg.reply('⚙️ Blistac 2 ($20.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!blistac3') {
    msg.reply('⚙️ Blistac 3 ($25.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!buffalo') {
    msg.reply('⚙️ Buffalo ($18.000) ⚙️\n\t\t\t7000 Hierro - 4666 Plastico - 3500 Vídrio');
  }

  if (msg.content === '!buffalo2') {
    msg.reply('⚙️ Buffalo 2 ($19.000) ⚙️\n\t\t\t7000 Hierro - 4666 Plastico - 3500 Vídrio');
  }

  if (msg.content === '!buffalo3') {
    msg.reply('⚙️ Buffalo 3 ($20.000) ⚙️\n\t\t\t7000 Hierro - 4666 Plastico - 3500 Vídrio');
  }

  if (msg.content === '!carbonizzare') {
    msg.reply('⚙️ Carbonizzare ($59.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!comet2') {
    msg.reply('⚙️ Comet 2 ($73.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!comet3') {
    msg.reply('⚙️ Comet 3 ($75.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!comet4') {
    msg.reply('⚙️ Comet 4 ($35.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }
    
   if (msg.content === '!comet5') {
    msg.reply('⚙️ Comet 5 ($70.000) ⚙️\n\t\t\t6500 Hierro - 4334 Plastico - 3250 Vídrio');
  }

  if (msg.content === '!coquette') {
    msg.reply('⚙️ Coquette ($101.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!drafter') {
    msg.reply('⚙️ Drafter ($120.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!ellie') {
    msg.reply('⚙️ Ellie ($45.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!elegy2') {
    msg.reply('⚙️ Elegy 2 ($45.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!feltzer2') {
    msg.reply('⚙️ Feltzer 2 ($23.000) ⚙️\n\t\t\t7000 Hierro - 4666 Plastico - 3500 Vídrio');
  }

  if (msg.content === '!gb200') {
    msg.reply('⚙️ GB 200 ($46.000) ⚙️\n\t\t\t6500 Hierro - 4334 Plastico - 3250 Vídrio');
  }

  if (msg.content === '!hotring') {
    msg.reply('⚙️ Hotring ($56.000) ⚙️\n\t\t\t7000 Hierro - 4666 Plastico - 3500 Vídrio');
  }

  if (msg.content === '!jester') {
    msg.reply('⚙️ Jester ($77.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!jester2') {
    msg.reply('⚙️ Jester 2 ($80.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }
  
  if (msg.content === '!jester3') {
    msg.reply('⚙️ Jester 3 ($80.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!jugular') {
    msg.reply('⚙️ Jugular ($65.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!khamelion') {
    msg.reply('⚙️ Khamelion ($180.000) ⚙️\n\t\t\t6500 Hierro - 4334 Plastico - 3250 Vídrio');
  }

  if (msg.content === '!kuruma') {
    msg.reply('⚙️ Kuruma ($48.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!lynx') {
    msg.reply('⚙️ Lynx ($240.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!massacro') {
    msg.reply('⚙️ Massacro ($21.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!neo') {
    msg.reply('⚙️ Neo ($310.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!ninef') {
    msg.reply('⚙️ Ninef ($210.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!ninef2') {
    msg.reply('⚙️ Ninef 2 ($250.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!omnis') {
    msg.reply('⚙️ Omnis ($45.000) ⚙️\n\t\t\t6500 Hierro - 4334 Plastico - 3250 Vídrio');
  }

  if (msg.content === '!pariah') {
    msg.reply('⚙️ Pariah ($180.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!penumbra') {
    msg.reply('⚙️ Penumbra ($56.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }
  
  if (msg.content === '!penumbra2') {
    msg.reply('⚙️ Penumbra 2 ($60.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!raiden') {
    msg.reply('⚙️ Raiden ($250.000) ⚙️\n\t\t\t7000 Hierro - 4666 Plastico - 3250 Vídrio');
  }

  if (msg.content === '!rapidgt') {
    msg.reply('⚙️ Rapid GT ($120.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!rapidgt2') {
    msg.reply('⚙️ Rapid GT 2 ($150.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!rapidgt2') {
    msg.reply('⚙️ Rapid GT 2 ($50.000) ⚙️\n\t\t\t5500 Hierro - 3666 Plastico - 2750 Vídrio');
  }

  if (msg.content === '!rapidgt2') {
    msg.reply('⚙️ Rapid GT 2 ($200.000) ⚙️\n\t\t\t5500 Hierro - 3666 Plastico - 2750 Vídrio');
  }

  if (msg.content === '!schafter4') {
    msg.reply('⚙️ Schafter 4 ($24.000) ⚙️\n\t\t\t6500 Hierro - 4334 Plastico - 3250 Vídrio');
  }

  if (msg.content === '!schafter5') {
    msg.reply('⚙️ Schafter 4 ($16.500) ⚙️\n\t\t\t7000 Hierro - 4666 Plastico - 3500 Vídrio');
  }

  if (msg.content === '!schwarzer') {
    msg.reply('⚙️ Schwarzer ($25.000) ⚙️\n\t\t\t7000 Hierro - 4666 Plastico - 3500 Vídrio');
  }

  if (msg.content === '!sentinel3') {
    msg.reply('⚙️ Sentinel 3 ($11.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!seven70') {
    msg.reply('⚙️ Seven 70 ($310.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!sultan') {
    msg.reply('⚙️ Sultan ($12.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!surano') {
    msg.reply('⚙️ Surano ($85.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }

  if (msg.content === '!verlierer2') {
    msg.reply('⚙️ Verlierer 2 ($250.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }
    
   if (msg.content === '!veto') {
    msg.reply('⚙️ Veto ($110.000) ⚙️\n\t\t\t4500 Hierro - 3000 Plastico - 2250 Vídrio');
  }
    
   if (msg.content === '!veto2') {
    msg.reply('⚙️ Veto 2 ($110.000) ⚙️\n\t\t\t5500 Hierro - 3666 Plastico - 2750 Vídrio');
  }
  
  if (msg.content === '!specter') {
    msg.reply('⚙️ Specter ($320.000) ⚙️\n\t\t\t6500 Hierro - 4334 Plastico - 3250 Vídrio');
  }
    
  if (msg.content === '!deveste') {
    msg.reply('⚙️ Deveste ($1.500.000) ⚙️\n\t\t\t7000 Hierro - 4666 Plastico - 3500 Vídrio');
  }
  
  if (msg.content === '!schlagen') {
    msg.reply('⚙️ Schlagen ($380.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }
  
  if (msg.content === '!flashgt') {
    msg.reply('⚙️ Flash GT ($380.000) ⚙️\n\t\t\t6000 Hierro - 4000 Plastico - 3000 Vídrio');
  }
  
});

//DEPORTIVOS CLÁSICOS

client.on('message', msg => {
  if (msg.content === '!btype') {
    msg.reply('⚙️ Btype ($170.000) ⚙️\n\t\t\t4500 Hierro - 1500 Plastico - 1125 Vídrio');
  }

  if (msg.content === '!btype3') {
    msg.reply('⚙️ Btype 3 ($190.000) ⚙️\n\t\t\t4500 Hierro - 1500 Plastico - 1125 Vídrio');
  }

  if (msg.content === '!casco') {
    msg.reply('⚙️ Casco ($85.000) ⚙️\n\t\t\t3500 Hierro - 1167 Plastico - 875 Vídrio');
  }

  if (msg.content === '!cheburek') {
    msg.reply('⚙️ Cheburek ($10.000) ⚙️\n\t\t\t4000 Hierro - 1333 Plastico - 1000 Vídrio');
  }

  if (msg.content === '!cheetah2') {
    msg.reply('⚙️ Cheetah 2 ($350.000) ⚙️\n\t\t\t3500 Hierro - 1167 Plastico - 875 Vídrio');
  }

  if (msg.content === '!coquette2') {
    msg.reply('⚙️ Coquette 2 ($300.000) ⚙️\n\t\t\t3500 Hierro - 1167 Plastico - 875 Vídrio');
  }

  if (msg.content === '!feltzer3') {
    msg.reply('⚙️ Feltzer 3 ($210.000) ⚙️\n\t\t\t3500 Hierro - 1167 Plastico - 875 Vídrio');
  }

  if (msg.content === '!gt500') {
    msg.reply('⚙️ GT 500 ($140.000) ⚙️\n\t\t\t4000 Hierro - 1333 Plastico - 1000 Vídrio');
  }

  if (msg.content === '!infernus2') {
    msg.reply('⚙️ Infernus 2 ($110.000) ⚙️\n\t\t\t3500 Hierro - 1167 Plastico - 875 Vídrio');
  }

  if (msg.content === '!mamba') {
    msg.reply('⚙️ Mamba ($100.000) ⚙️\n\t\t\t3000 Hierro - 1000 Plastico - 750 Vídrio');
  }

  if (msg.content === '!manana') {
    msg.reply('⚙️ Manana ($12.000) ⚙️\n\t\t\t4500 Hierro - 1500 Plastico - 1125 Vídrio');
  }

  if (msg.content === '!pigalle') {
    msg.reply('⚙️ Pigalle ($110.000) ⚙️\n\t\t\t4500 Hierro - 1500 Plastico - 1125 Vídrio');
  }

  if (msg.content === '!rapidgt3') {
    msg.reply('⚙️ Rapid GT 3 ($75.000) ⚙️\n\t\t\t3500 Hierro - 1167 Plastico - 875 Vídrio');
  }

  if (msg.content === '!retinue') {
    msg.reply('⚙️ Retinue ($48.000) ⚙️\n\t\t\t4000 Hierro - 1333 Plastico - 1000 Vídrio');
  }

  if (msg.content === '!swinger') {
    msg.reply('⚙️ Swinger ($210.000) ⚙️\n\t\t\t3500 Hierro - 1167 Plastico - 875 Vídrio');
  }

  if (msg.content === '!tornado') {
    msg.reply('⚙️ Tornado ($12.000) ⚙️\n\t\t\t4500 Hierro - 1500 Plastico - 1125 Vídrio');
  }

  if (msg.content === '!tornado2') {
    msg.reply('⚙️ Tornado 2 ($12.000) ⚙️\n\t\t\t4500 Hierro - 1500 Plastico - 1125 Vídrio');
  }

  if (msg.content === '!tornado3') {
    msg.reply('⚙️ Tornado 3 ($12.000) ⚙️\n\t\t\t4500 Hierro - 1500 Plastico - 1125 Vídrio');
  }

  if (msg.content === '!tornado4') {
    msg.reply('⚙️ Tornado 4 ($10.000) ⚙️\n\t\t\t4500 Hierro - 1500 Plastico - 1125 Vídrio');
  }

  if (msg.content === '!tornado5') {
    msg.reply('⚙️ Tornado 5 ($10.000) ⚙️\n\t\t\t4500 Hierro - 1500 Plastico - 1125 Vídrio');
  }
    
   if (msg.content === '!stingergt') {
    msg.reply('⚙️ Stinger GT ($310.000) ⚙️\n\t\t\t3500 Hierro - 1167 Plastico - 675 Vídrio');
  }
    
   if (msg.content === '!toreador') {
    msg.reply('⚙️ Toreador ($170.000) ⚙️\n\t\t\t3500 Hierro - 1167 Plastico - 875 Vídrio');
  }

//OPEN WHEEL    
    
   if (msg.content === '!openwheel1') {
    msg.reply('⚙️ Open Wheel 1 ($200.000) ⚙️\n\t\t\t8000 Hierro - 2567 Plastico - 2000 Vídrio');
  }
    
});

//SUPERDEPORTIVO

client.on('message', msg => {
  if (msg.content === '!bullet') {
    msg.reply('⚙️ Bullet ($180.000) ⚙️\n\t\t\t20000 Hierro - 10000 Plastico - 6666 Vídrio');
  }

  if (msg.content === '!cheetah') {
    msg.reply('⚙️ Cheetah ($1.000.000) ⚙️\n\t\t\t20000 Hierro - 10000 Plastico - 6666 Vídrio');
  }

  if (msg.content === '!infernus') {
    msg.reply('⚙️ Infernus ($840.000) ⚙️\n\t\t\t21000 Hierro - 10500 Plastico - 7000 Vídrio');
  }

  if (msg.content === '!italigtb') {
    msg.reply('⚙️ Itali GTB ($1.300.000) ⚙️\n\t\t\t21000 Hierro - 10500 Plastico - 7000 Vídrio');
  }

  if (msg.content === '!pfister811') {
    msg.reply('⚙️ PFister 811 ($1.000.000) ⚙️\n\t\t\t20000 Hierro - 10000 Plastico - 6666 Vídrio');
  }

  if (msg.content === '!sc1') {
    msg.reply('⚙️ SC1 ($3.100.000) ⚙️\n\t\t\t20000 Hierro - 10000 Plastico - 6666 Vídrio');
  }
  
  if (msg.content === '!sheava') {
    msg.reply('⚙️ Sheava ($800.000) ⚙️\n\t\t\t20000 Hierro - 10000 Plastico - 6666 Vídrio');
  }

  if (msg.content === '!sultanrs') {
    msg.reply('⚙️ Sultan RS ($35.000) ⚙️\n\t\t\t20000 Hierro - 10000 Plastico - 6666 Vídrio');
  }

  if (msg.content === '!t20') {
    msg.reply('⚙️ T20 ($1.200.000) ⚙️\n\t\t\t20000 Hierro - 10000 Plastico - 6666 Vídrio');
  }

  if (msg.content === '!tezerac') {
    msg.reply('⚙️ Tezerac ($1.200.000) ⚙️\n\t\t\t22000 Hierro - 11000 Plastico - 7334 Vídrio');
  }

  if (msg.content === '!zorrusso') {
    msg.reply('⚙️ T20 ($1.200.000) ⚙️\n\t\t\t22000 Hierro - 11000 Plastico - 7334 Vídrio');
  }

  if (msg.content === '!tempesta') {
    msg.reply('⚙️ Tempesta ($9.900.000) ⚙️\n\t\t\t20000 Hierro - 10000 Plastico - 6666 Vídrio');
  }

  if (msg.content === '!turismor') {
    msg.reply('⚙️ Turismo R ($900.000) ⚙️\n\t\t\t20000 Hierro - 10000 Plastico - 6666 Vídrio');
  }

  if (msg.content === '!vacca') {
    msg.reply('⚙️ Vacca ($820.000) ⚙️\n\t\t\t21000 Hierro - 10500 Plastico - 7000 Vídrio');
  }

  if (msg.content === '!visione') {
    msg.reply('⚙️ Visione ($3.200.000) ⚙️\n\t\t\t20000 Hierro - 10000 Plastico - 6666 Vídrio');
  }

  if (msg.content === '!zentorno') {
    msg.reply('⚙️ Zentorno ($1.300.000) ⚙️\n\t\t\t20000 Hierro - 10000 Plastico - 6666 Vídrio');
  }
  
   if (msg.content === '!entityxf') {
    msg.reply('⚙️ Entity XF ($2.700.000) ⚙️\n\t\t\t20000 Hierro - 10000 Plastico - 6666 Vídrio');
  }
  
   if (msg.content === '!penetrator') {
    msg.reply('⚙️ Penetrator ($2.100.000) ⚙️\n\t\t\t22000 Hierro - 11000 Plastico - 7334 Vídrio');
  }
  
   if (msg.content === '!tyrus') {
    msg.reply('⚙️ Tyrus ($3.100.000) ⚙️\n\t\t\t22000 Hierro - 11000 Plastico - 7334 Vídrio');
  }
  
   if (msg.content === '!voltic') {
    msg.reply('⚙️ Voltic ($500.000) ⚙️\n\t\t\t21000 Hierro - 10500 Plastico - 7000 Vídrio');
  }

   if (msg.content === '!gp1') {
    msg.reply('⚙️ GP 1 ($1.000.000) ⚙️\n\t\t\t21000 Hierro - 10500 Plastico - 7000 Vídrio');
  }    

   if (msg.content === '!reaper') {
    msg.reply('⚙️ Reaper ($2.600.000) ⚙️\n\t\t\t20000 Hierro - 10000 Plastico - 6666 Vídrio');
  }   
    
   if (msg.content === '!italirsx') {
    msg.reply('⚙️ Itali RSX ($500.000) ⚙️\n\t\t\t20000 Hierro - 10000 Plastico - 6666 Vídrio');
  }
    
   if (msg.content === '!osiris') {
    msg.reply('⚙️ Osiris ($1.400.000) ⚙️\n\t\t\t20000 Hierro - 10000 Plastico - 6666 Vídrio');
  } 
    
});

//OFF-ROAD

client.on('message', msg => {
  if (msg.content === '!bfinjection') {
    msg.reply('⚙️ BF Injection ($8.000) ⚙️\n\t\t\t3500 Hierro - 1167 Plastico - 700 Vídrio');
  }

  if (msg.content === '!bifta') {
    msg.reply('⚙️ Bifta ($8.000) ⚙️\n\t\t\t4500 Hierro - 1500 Plastico - 1125 Vídrio');
  }

  if (msg.content === '!blazer') {
    msg.reply('⚙️ Blazer ($11.000) ⚙️\n\t\t\t4500 Hierro - 1500 Plastico - 1125 Vídrio');
  }

  if (msg.content === '!blazer2') {
    msg.reply('⚙️ Blazer 2 ($12.000) ⚙️\n\t\t\t4500 Hierro - 1500 Plastico - 1125 Vídrio');
  }

  if (msg.content === '!blazer4') {
    msg.reply('⚙️ Blazer 4 ($11.000) ⚙️\n\t\t\t4500 Hierro - 1500 Plastico - 1125 Vídrio');
  }

  if (msg.content === '!bodhi2') {
    msg.reply('⚙️ Bodhi 2 ($12.000) ⚙️\n\t\t\t3500 Hierro - 1167 Plastico - 875 Vídrio');
  }

  if (msg.content === '!brawler') {
    msg.reply('⚙️ Brawler ($55.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!dloader') {
    msg.reply('⚙️ Dloader ($10.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!dune') {
    msg.reply('⚙️ Dune ($18.000) ⚙️\n\t\t\t5500 Hierro - 1833 Plastico - 1375 Vídrio');
  }

  if (msg.content === '!freecrawler') {
    msg.reply('⚙️ Freecrawler ($48.000) ⚙️\n\t\t\t5000 Hierro - 1667 Plastico - 1250 Vídrio');
  }

  if (msg.content === '!hellion') {
    msg.reply('⚙️ Hellion ($34.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!kalahari') {
    msg.reply('⚙️ Kalahari ($12.000) ⚙️\n\t\t\t5500 Hierro - 1833 Plastico - 1375 Vídrio');
  }

  if (msg.content === '!rancherxl') {
    msg.reply('⚙️ Rancher XL ($14.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!rancherxl2') {
    msg.reply('⚙️ Rancher XL 2 ($14.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!rebel') {
    msg.reply('⚙️ Rebel ($11.000) ⚙️\n\t\t\t5000 Hierro - 1667 Plastico - 1250 Vídrio');
  }

  if (msg.content === '!rebel2') {
    msg.reply('⚙️ Rebel 2 ($12.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!riata') {
    msg.reply('⚙️ Riata ($14.000) ⚙️\n\t\t\t5500 Hierro - 1833 Plastico - 1375 Vídrio');
  }

  if (msg.content === '!sandking') {
    msg.reply('⚙️ Sandking ($32.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!sandking2') {
    msg.reply('⚙️ Sandking 2 ($34.000) ⚙️\n\t\t\t6500 Hierro - 2167 Plastico - 1625 Vídrio');
  }

  if (msg.content === '!trophytruck') {
    msg.reply('⚙️ Trophytruck ($50.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!trophytruck2') {
    msg.reply('⚙️ Trophytruck 2 ($52.000) ⚙️\n\t\t\t5500 Hierro - 1833 Plastico - 1375 Vídrio');
  }
    
  if (msg.content === '!verus') {
    msg.reply('⚙️ Verus ($70.000) ⚙️\n\t\t\t4000 Hierro - 1333 Plastico - 1000 Vídrio');
  }
    
  if (msg.content === '!winky') {
    msg.reply('⚙️ Winky ($150.000) ⚙️\n\t\t\t5500 Hierro - 1833 Plastico - 1375 Vídrio');
  }
    
});

//VANS

client.on('message', msg => {
  if (msg.content === '!bison') {
    msg.reply('⚙️ Bison ($34.000) ⚙️\n\t\t\t8500 Hierro - 2833 Plastico - 2125 Vídrio');
  }

  if (msg.content === '!bison2') {
    msg.reply('⚙️ Bison 2 ($35.000) ⚙️\n\t\t\t8500 Hierro - 2833 Plastico - 2125 Vídrio');
  }

  if (msg.content === '!bison3') {
    msg.reply('⚙️ Bison 3 ($36.000) ⚙️\n\t\t\t8000 Hierro - 2667 Plastico - 2000 Vídrio');
  }

  if (msg.content === '!bobcatxl') {
    msg.reply('⚙️ Bobcat XL ($13.000) ⚙️\n\t\t\t5500 Hierro - 1833 Plastico - 1375 Vídrio');
  }

  if (msg.content === '!boxville') {
    msg.reply('⚙️ Boxville ($30.000) ⚙️\n\t\t\t6500 Hierro - 2167 Plastico - 1625 Vídrio');
  }

  if (msg.content === '!boxville2') {
    msg.reply('⚙️ Boxville 2 ($30.000) ⚙️\n\t\t\t6500 Hierro - 2167 Plastico - 1625 Vídrio');
  }

  if (msg.content === '!boxville3') {
    msg.reply('⚙️ Boxville 3 ($30.000) ⚙️\n\t\t\t6500 Hierro - 2167 Plastico - 1625 Vídrio');
  }

  if (msg.content === '!boxville4') {
    msg.reply('⚙️ Boxville 4 ($30.000) ⚙️\n\t\t\t6500 Hierro - 2167 Plastico - 1625 Vídrio');
  }

  if (msg.content === '!burrito') {
    msg.reply('⚙️ Burrito ($24.000) ⚙️\n\t\t\t5500 Hierro - 1833 Plastico - 1375 Vídrio');
  }

  if (msg.content === '!burrito2') {
    msg.reply('⚙️ Burrito 2 ($24.000) ⚙️\n\t\t\t5500 Hierro - 1833 Plastico - 1375 Vídrio');
  }

  if (msg.content === '!burrito3') {
    msg.reply('⚙️ Burrito 3 ($24.000) ⚙️\n\t\t\t5500 Hierro - 1833 Plastico - 1375 Vídrio');
  }

  if (msg.content === '!burrito4') {
    msg.reply('⚙️ Burrito 4 ($24.000) ⚙️\n\t\t\t5500 Hierro - 1833 Plastico - 1375 Vídrio');
  }

  if (msg.content === '!burrito5') {
    msg.reply('⚙️ Burrito 5 ($24.000) ⚙️\n\t\t\t5500 Hierro - 1833 Plastico - 1375 Vídrio');
  }

  if (msg.content === '!camper') {
    msg.reply('⚙️ Camper ($17.000) ⚙️\n\t\t\t6500 Hierro - 2167 Plastico - 1625 Vídrio');
  }

  if (msg.content === '!gburrito') {
    msg.reply('⚙️ Gburrito ($25.000) ⚙️\n\t\t\t5500 Hierro - 1833 Plastico - 1375 Vídrio');
  }

  if (msg.content === '!gburrito') {
    msg.reply('⚙️ Gburrito 2 ($25.000) ⚙️\n\t\t\t5500 Hierro - 1833 Plastico - 1375 Vídrio');
  }

  if (msg.content === '!journey') {
    msg.reply('⚙️ Journey ($25.000) ⚙️\n\t\t\t6500 Hierro - 2167 Plastico - 1625 Vídrio');
  }

  if (msg.content === '!minivan') {
    msg.reply('⚙️ Minivan ($12.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!minivan2') {
    msg.reply('⚙️ Minivan 2 ($12.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!paradise') {
    msg.reply('⚙️ Paradise ($23.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!paragon') {
    msg.reply('⚙️ Paragon ($260.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!pony') {
    msg.reply('⚙️ Pony ($23.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!pony2') {
    msg.reply('⚙️ Pony 2 ($23.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!rumpo') {
    msg.reply('⚙️ Rumpo ($20.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!rumpo2') {
    msg.reply('⚙️ Rumpo 2 ($23.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!rumpo3') {
    msg.reply('⚙️ Rumpo 3 ($25.000) ⚙️\n\t\t\t5500 Hierro - 1833 Plastico - 1375 Vídrio');
  }

  if (msg.content === '!speedo') {
    msg.reply('⚙️ Speedo ($20.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!surfer') {
    msg.reply('⚙️ Surfer ($12.000) ⚙️\n\t\t\t5500 Hierro - 1833 Plastico - 1375 Vídrio');
  }

  if (msg.content === '!surfer2') {
    msg.reply('⚙️ Surfer 2 ($12.000) ⚙️\n\t\t\t5500 Hierro - 1833 Plastico - 1375 Vídrio');
  }

  if (msg.content === '!youga') {
    msg.reply('⚙️ Youga ($17.000) ⚙️\n\t\t\t5000 Hierro - 1667 Plastico - 1250 Vídrio');
  }

  if (msg.content === '!youga2') {
    msg.reply('⚙️ Youga 2 ($18.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }
  
  if (msg.content === '!youga3') {
    msg.reply('⚙️ Youga 3 ($20.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }
});

//COMERCIALES

client.on('message', msg => {
  if (msg.content === '!benson') {
    msg.reply('⚙️ Benson ($100.000) ⚙️\n\t\t\t8500 Hierro - 2833 Plastico - 2125 Vídrio');
  }

  if (msg.content === '!biff') {
    msg.reply('⚙️ Biff ($80.000) ⚙️\n\t\t\t7500 Hierro - 2500 Plastico - 1875 Vídrio');
  }

  if (msg.content === '!hauler') {
    msg.reply('⚙️ Hauler ($120.000) ⚙️\n\t\t\t7000 Hierro - 2333 Plastico - 1750 Vídrio');
  }

  if (msg.content === '!hauler2') {
    msg.reply('⚙️ Hauler 2 ($120.000) ⚙️\n\t\t\t7500 Hierro - 2500 Plastico - 1875 Vídrio');
  }

  if (msg.content === '!mule') {
    msg.reply('⚙️ Mule ($70.000) ⚙️\n\t\t\t8500 Hierro - 2833 Plastico - 2125 Vídrio');
  }

  if (msg.content === '!mule2') {
    msg.reply('⚙️ Mule 2 ($70.000) ⚙️\n\t\t\t7500 Hierro - 2500 Plastico - 1875 Vídrio');
  }

  if (msg.content === '!mule3') {
    msg.reply('⚙️ Mule 3 ($70.000) ⚙️\n\t\t\t8500 Hierro - 2833 Plastico - 2125 Vídrio');
  }

  if (msg.content === '!mule4') {
    msg.reply('⚙️ Mule 4 ($70.000) ⚙️\n\t\t\t8000 Hierro - 2667 Plastico - 2000 Vídrio');
  }

  if (msg.content === '!packer') {
    msg.reply('⚙️ Packer ($130.000) ⚙️\n\t\t\t8000 Hierro - 2667 Plastico - 2000 Vídrio');
  }

  if (msg.content === '!phantom') {
    msg.reply('⚙️ Phantom ($140.000) ⚙️\n\t\t\t9000 Hierro - 3000 Plastico - 2250 Vídrio');
  }

  if (msg.content === '!phantom3') {
    msg.reply('⚙️ Phantom 3 ($140.000) ⚙️\n\t\t\t9000 Hierro - 3000 Plastico - 2250 Vídrio');
  }

  if (msg.content === '!pounder') {
    msg.reply('⚙️ Pounder ($85.000) ⚙️\n\t\t\t10000 Hierro - 3333 Plastico - 2500 Vídrio');
  }
  
  if (msg.content === '!stockade3') {
    msg.reply('⚙️ Stockade 3 ($60.000) ⚙️\n\t\t\t8000 Hierro - 2667 Plastico - 2000 Vídrio');
  }
    
  if (msg.content === '!stockade') {
    msg.reply('⚙️ Stockade ($60.000) ⚙️\n\t\t\t8000 Hierro - 2667 Plastico - 2000 Vídrio');
  }
  
});


//SUVS

client.on('message', msg => {
  if (msg.content === '!baller') {
    msg.reply('⚙️ Baller ($60.000) ⚙️\n\t\t\t7000 Hierro - 2333 Plastico - 1400 Vídrio');
  }

  if (msg.content === '!baller2') {
    msg.reply('⚙️ Baller 2 ($70.000) ⚙️\n\t\t\t7000 Hierro - 2333 Plastico - 1400 Vídrio');
  }

  if (msg.content === '!baller3') {
    msg.reply('⚙️ Baller 3 ($86.000) ⚙️\n\t\t\t7000 Hierro - 2333 Plastico - 1750 Vídrio');
  }

  if (msg.content === '!baller4') {
    msg.reply('⚙️ Baller 4 ($92.000) ⚙️\n\t\t\t6500 Hierro - 2167 Plastico - 1300 Vídrio');
  }
  
  if (msg.content === '!baller5') {
    msg.reply('⚙️ Baller 5 ($86.000) ⚙️\n\t\t\t7000 Hierro - 2333 Plastico - 1750 Vídrio');
  }

  if (msg.content === '!bjxl') {
    msg.reply('⚙️ BJXL ($32.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!cavalcade') {
    msg.reply('⚙️ Cavalcade ($31.000) ⚙️\n\t\t\t7000 Hierro - 2333 Plastico - 1750 Vídrio');
  }

  if (msg.content === '!cavalcade2') {
    msg.reply('⚙️ Cavalcade 2 ($34.000) ⚙️\n\t\t\t7000 Hierro - 2333 Plastico - 1750 Vídrio');
  }

  if (msg.content === '!contender') {
    msg.reply('⚙️ Contender ($56.000) ⚙️\n\t\t\t11500 Hierro - 3833 Plastico - 2875 Vídrio');
  }

  if (msg.content === '!dubsta') {
    msg.reply('⚙️ Dubsta ($75.000) ⚙️\n\t\t\t7000 Hierro - 2333 Plastico - 1750 Vídrio');
  }

  if (msg.content === '!dubsta2') {
    msg.reply('⚙️ Dubsta 2 ($85.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!dubsta3') {
    msg.reply('⚙️ Dubsta 3 ($35.000) ⚙️\n\t\t\t23000 Hierro - 7667 Plastico - 5750 Vídrio');
  }

  if (msg.content === '!fq2') {
    msg.reply('⚙️ Fq 2 ($36.000) ⚙️\n\t\t\t7000 Hierro - 2333 Plastico - 1750 Vídrio');
  }

  if (msg.content === '!granger') {
    msg.reply('⚙️ Granger ($75.000) ⚙️\n\t\t\t6500 Hierro - 2167 Plastico - 1625 Vídrio');
  }

  if (msg.content === '!gresley') {
    msg.reply('⚙️ Gresley ($56.000) ⚙️\n\t\t\t7000 Hierro - 2333 Plastico - 1750 Vídrio');
  }

  if (msg.content === '!habanero') {
    msg.reply('⚙️ Habanero ($18.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!huntley') {
    msg.reply('⚙️ Huntley ($24.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!landstalker') {
    msg.reply('⚙️ Landstalker ($19.000) ⚙️\n\t\t\t7000 Hierro - 2333 Plastico - 1750 Vídrio');
  }
  
  if (msg.content === '!landstalker2') {
    msg.reply('⚙️ Landstalker 2 ($25.000) ⚙️\n\t\t\t6500 Hierro - 2167 Plastico - 1625 Vídrio');
  }

  if (msg.content === '!mesa') {
    msg.reply('⚙️ Mesa ($35.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!patriot') {
    msg.reply('⚙️ Patriot ($45.000) ⚙️\n\t\t\t7000 Hierro - 2333 Plastico - 1750 Vídrio');
  }

  if (msg.content === '!patriot2') {
    msg.reply('⚙️ Patriot 2 ($62.000) ⚙️\n\t\t\t8000 Hierro - 2667 Plastico - 2000 Vídrio');
  }

  if (msg.content === '!radi') {
    msg.reply('⚙️ Radi ($25.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!rocoto') {
    msg.reply('⚙️ Rocoto ($51.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }

  if (msg.content === '!seminole') {
    msg.reply('⚙️ Seminole ($19.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }
  
  if (msg.content === '!seminole2') {
    msg.reply('⚙️ Seminole 2 ($30.000) ⚙️\n\t\t\t6000 Hierro - 2000 Plastico - 1500 Vídrio');
  }
  
  if (msg.content === '!serrano') {
    msg.reply('⚙️ Serrano ($26.000) ⚙️\n\t\t\t7000 Hierro - 2333 Plastico - 1750 Vídrio');
  }

  if (msg.content === '!xls') {
    msg.reply('⚙️ Xls ($41.000) ⚙️\n\t\t\t7000 Hierro - 2333 Plastico - 1750 Vídrio');
  }
});

//HELICOPTEROS

client.on('message', msg => {
  if (msg.content === '!supervolito') {
    msg.reply('⚙️ Supervolito ($2.000.000) ⚙️\n\t\t\t9500 Hierro - 3167 Plastico - 2375 Vídrio');
  }

  if (msg.content === '!swift') {
    msg.reply('⚙️ Swift ($2.500.000) ⚙️\n\t\t\t12500 Hierro - 4167 Plastico - 3125 Vídrio');
  }

  if (msg.content === '!volatus') {
    msg.reply('⚙️ Volatus ($4.100.000) ⚙️\n\t\t\t11500 Hierro - 3833 Plastico - 2875 Vídrio');
  }
    
  if (msg.content === '!annihilator2') {
    msg.reply('⚙️ Annihilator Stealth ($50.000) ⚙️\n\t\t\t13500 Hierro - 4500 Plastico - 3375 Vídrio');
  }
    
});

//AVIONES

client.on('message', msg => {
  if (msg.content === '!mogul') {
    msg.reply('⚙️ Mogul ($410.000) ⚙️\n\t\t\t15500 Hierro - 5167 Plastico - 3875 Vídrio');
  }

  if (msg.content === '!nimbus') {
    msg.reply('⚙️ Nimbus ($1.000.000) ⚙️\n\t\t\t21000 Hierro - 7000 Plastico - 5250 Vídrio');
  }

  if (msg.content === '!vestra') {
    msg.reply('⚙️ Vestra ($700.000) ⚙️\n\t\t\t14500 Hierro - 4833 Plastico - 3625 Vídrio');
  }
    
  if (msg.content === '!alkonost') {
    msg.reply('⚙️ R0-86 Alkonost ($50.000) ⚙️\n\t\t\t38500 Hierro - 12833 Plastico - 9625 Vídrio');
  }
    
});

//UTILIDAD

client.on('message', msg => {
  if (msg.content === '!caddy') {
    msg.reply('⚙️ Caddy ($24.000) ⚙️\n\t\t\t2500 Hierro - 833 Plastico - 625 Vídrio');
  }

  if (msg.content === '!caddy2') {
    msg.reply('⚙️ Caddy 2 ($24.000) ⚙️\n\t\t\t3000 Hierro - 1000 Plastico - 750 Vídrio');
  }

  if (msg.content === '!sadler') {
    msg.reply('⚙️ Sadler ($40.000) ⚙️\n\t\t\t5000 Hierro - 1667 Plastico - 1250 Vídrio');
  }

  if (msg.content === '!sadler2') {
    msg.reply('⚙️ Sadler 2 ($40.000) ⚙️\n\t\t\t5000 Hierro - 1667 Plastico - 1250 Vídrio');
  }

  if (msg.content === '!gruagrande') {
    msg.reply('⚙️ Grúa Grande ($56.000) ⚙️\n\t\t\t5000 Hierro - 1667 Plastico - 1250 Vídrio');
  }

  if (msg.content === '!gruapequeña') {
    msg.reply('⚙️ Grúa Pequeña ($35.000) ⚙️\n\t\t\t4500 Hierro - 1500 Plastico - 1125 Vídrio');
  }
});


//INDUSTRIALES

client.on('message', msg => {
  if (msg.content === '!flatbed') {
    msg.reply('⚙️ Flatbed ($80.000) ⚙️\n\t\t\t8500 Hierro - 2833 Plastico - 2125 Vídrio');
  }

  if (msg.content === '!mixer') {
    msg.reply('⚙️ Mixer ($75.000) ⚙️\n\t\t\t8000 Hierro - 2667 Plastico - 2000 Vídrio');
  }

  if (msg.content === '!mixer2') {
    msg.reply('⚙️ Mixer 2 ($75.000) ⚙️\n\t\t\t7500 Hierro - 2500 Plastico - 1875 Vídrio');
  }

  if (msg.content === '!rubble') {
    msg.reply('⚙️ Rubble ($75.000) ⚙️\n\t\t\t8000 Hierro - 2667 Plastico - 2000 Vídrio');
  }

  if (msg.content === '!tiptruck2') {
    msg.reply('⚙️ Tiptruck 2 ($40.000) ⚙️\n\t\t\t7000 Hierro - 2333 Plastico - 1750 Vídrio');
  }
});

//BOTES

client.on('message', msg => {
  if (msg.content === '!dinghy') {
    msg.reply('⚙️ Dinghy ($150.000) ⚙️\n\t\t\t6500 Hierro - 2167 Plastico - 1625 Vídrio');
  }

  if (msg.content === '!dinghy2') {
    msg.reply('⚙️ Dinghy 2 ($200.000) ⚙️\n\t\t\t6500 Hierro - 2167 Plastico - 1625 Vídrio');
  }

  if (msg.content === '!marquis') {
    msg.reply('⚙️ Marquis ($400.000) ⚙️\n\t\t\t11500 Hierro - 3833 Plastico - 2875 Vídrio');
  }

  if (msg.content === '!seashark') {
    msg.reply('⚙️ Seashark ($15.000) ⚙️\n\t\t\t5000 Hierro - 1667 Plastico - 1250 Vídrio');
  }

  if (msg.content === '!seashark2') {
    msg.reply('⚙️ Seashark 2 ($18.000) ⚙️\n\t\t\t5000 Hierro - 1667 Plastico - 1250 Vídrio');
  }

  if (msg.content === '!seashark3') {
    msg.reply('⚙️ Seashark 3 ($20.000) ⚙️\n\t\t\t5000 Hierro - 1667 Plastico - 1250 Vídrio');
  }

  if (msg.content === '!speeder') {
    msg.reply('⚙️ Speeder ($330.000) ⚙️\n\t\t\t8000 Hierro - 2667 Plastico - 2000 Vídrio');
  }

  if (msg.content === '!speeder2') {
    msg.reply('⚙️ Speeder 2 ($330.000) ⚙️\n\t\t\t8000 Hierro - 2667 Plastico - 2000 Vídrio');
  }

  if (msg.content === '!squalo') {
    msg.reply('⚙️ Squalo ($90.000) ⚙️\n\t\t\t7000 Hierro - 2333 Plastico - 1750 Vídrio');
  }

  if (msg.content === '!tropic') {
    msg.reply('⚙️ Tropic ($22.000) ⚙️\n\t\t\t7500 Hierro - 2500 Plastico - 1875 Vídrio');
  }

  if (msg.content === '!tug') {
    msg.reply('⚙️ Tug ($1.000.000) ⚙️\n\t\t\t19000 Hierro - 6333 Plastico - 4750 Vídrio');
  }
    
  if (msg.content === '!longfin') {
    msg.reply('⚙️ Longfin ($22.000) ⚙️\n\t\t\t10000 Hierro - 3333 Plastico - 2500 Vídrio');
  }
    
});

////////////////////////FIN ENSAMBLADOR/////////////////////////
client.on('ready', () => {
    console.log('Pro Performance Ensambladora disponible!');
});

client.login(process.env.BOT_TOKEN)
