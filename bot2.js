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
};

const client = new tmi.client(options)

client.connect()

client.on('connected', function(adress, port)  {
    client.action('Bot', 'Olá, bot_sofia agora está conectado')
})

client.on('chat', (channel, user, message, self) => {
    if(message === '!teste') {
        client.action('Comando executado com sucesso')
    }
})


