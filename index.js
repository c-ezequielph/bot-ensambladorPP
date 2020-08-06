require("dotenv").config()
const Discord = require('discord.js');
const client = new Discord.Client();
require('events').EventEmitter.defaultMaxListeners = 4000;

/////////////////////////ENSAMBLADOR////////////////////////////



client.on('ready', () => {
    console.log('Estoy listo!');
});

client.login(process.env.BOT_TOKEN)
