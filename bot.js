const TwitchBot = require('twitch-bot')
 
const Bot = new TwitchBot({
  username: 'bot_sofia',
  oauth: 'oauth:ohoaqkxrw5t3152brd4pbcmxjfdxdm',
  channels: ['bot_sofia']
})
 
Bot.on('join', channel => {
  console.log(`Canal associado: ${channel}`)
})
 
Bot.on('error', err => {
  console.log(err)
})
 
Bot.on('message', chatter => {
  if(chatter.message === '!teste') {
    Bot.say('Comando executado com sucesso')
  }
})


