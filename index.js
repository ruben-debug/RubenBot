const util = require('util');
const log = message => {
  console.log(util.inspect(message, { depth: Infinity }));
};

const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_TOKEN;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Rubenbot') {
    msg.reply('Wassuppp');
  }
});

client.login(token);
