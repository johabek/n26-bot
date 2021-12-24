require('dotenv').config()

const TelegramBot =require('node-telegram-bot-api')

const bot = new TelegramBot(process.env.TOKEN, {polling: true})
bot.on("polling_error" , console.log)

const step = {
    START   : 0,
    NAME    : 1,
    CONTACT : 2,
    GENDER  : 3,
    ADDRESS : 4
}


//...............Keybords...............//

const startKeyboard =  {
    inline_keyboard: [ 
        [{ text: "Start" , callback_data: "start" }]
    ]
}

// ...............Logic............... //
bot.on('message', (msg) => {
    if (msg.text === '/start') {
       const welcome = " \n\n Salom hurmatli foydalonuvchi!!" +
                       " \n\n Biz hammani malumotlarini yig'amiz"+
                       " \n\n Tugmani bosing" 

        bot.sendPhoto(msg.chat.id , __dirname + "/img/salom.jpg" , {caption: welcome , reply_markup: JSON.stringify(startKeyboard) } )
    } 
})