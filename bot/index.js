import http from 'http'
import Bot from '@kikinteractive/kik'
import request from 'request'

let bot = new Bot({
  username: process.env.BOT_USERNAME,
  apiKey: process.env.KIK_API_KEY,
  baseUrl: process.env.BASE_URL,
})

bot.onTextMessage((incoming, bot) => {
 incoming.reply(incoming.body)
})

http
  .createServer(bot.incoming())
  .listen(8080, () => console.log('hello'))
