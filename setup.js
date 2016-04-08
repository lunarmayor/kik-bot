import request from 'request'

request.post({
  url : 'https://api.kik.com/v1/config',
  auth: {
    'user' : process.env.BOT_USERNAME,
    'pass' : process.env.KIK_API_KEY
  },
  headers:{
    'Content-Type': 'application/json'
  },
  json: true,
  body :{
    "webhook": process.env.BASE_URL,
    "features": {
      "manuallySendReadReceipts": false,
      "receiveReadReceipts": false,
      "receiveDeliveryReceipts": false,
      "receiveIsTyping": false
    }
  }
})

console.log('setup')
