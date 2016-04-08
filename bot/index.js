import http from 'http'
import Bot from '@kikinteractive/kik'
import Witbot from 'witbot'
import request from 'request'

let witbot = Witbot(process.env.WIT_TOKEN)

let bot = new Bot({
  username: process.env.BOT_USERNAME,
  apiKey: process.env.KIK_API_KEY,
  baseUrl: process.env.BASE_URL,
})

bot.onTextMessage((message, bot) => {
 witbot
   .process(message.body, message)
   .hears('hello', 0.5, (message) => {
     message.reply('hello')
   })
})

http
  .createServer(bot.incoming())
  .listen(8080, () => console.log('hello'))
