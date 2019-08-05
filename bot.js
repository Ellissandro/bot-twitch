const tmi = require('tmi.js')


const options = {
    options: {
      debug: true
    },

    connection: {
      reconnect: true
    },

    identify: {
      username: "bot_sofia",
      password: "oauth:ohoaqkxrw5t3152brd4pbcmxjfdxdm"
    },

  // Caso queira criar bots para outros canais.
  channels: ['bot_sofia']
}

const client = new tmi.client(options)


client.on('message', onMessageHandler)
client.on('connected', onConnectedHandler)

client.connect()

function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignorar mensagens do bot

  // Remover espaço em branco da mensagem de bate-papo
  const commandName = msg.trim()

  // Se o comando é conhecido, vamos executá-lo
  if (commandName === '!teste') {
    const command = rollTest();
    client.say(target, `Voce executou um ${command}`)
    console.log(`* Comando ${commandName} executado`)
  } else {
    console.log(`* Comando desconhecido ${commandName}`)
  }
}

// Função chamada quando o comando "teste" é emitido
function rollTest () {
    return 'Comando !teste executado com sucesso'
  }
  
  // Chamado toda vez que o bot se conecta ao chat do Twitch
  function onConnectedHandler (addr, port) {
    console.log(`* Conectado em ${addr}:${port}`)
  }

  