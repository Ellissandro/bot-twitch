const TwitchBot = require('twitch-bot');
const configuracoes = require('./configuracoes');
const { executarComando } = require('./comandos');
const Bot = new TwitchBot(configuracoes);

Bot.on('join', channel => {
  console.log(`Canal associado: ${channel}`);
});

Bot.on('error', err => {
  console.log(err);
});

Bot.on('message', chatter => {
  Bot.say(executarComando(chatter));
});
