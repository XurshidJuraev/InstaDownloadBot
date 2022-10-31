const TelegramBot =require('node-telegram-bot-api')
const {tiktok_downloader}=require('./request')
require('dotenv').config()

const token=process.env.token

const bot=new TelegramBot(token,{polling:true})


bot.on('message', async(message)=>{
    try {
        const chatId=message.chat.id
        const name=message.from.first_name 
        if(message.text=='/start'){
            await bot.sendMessage(chatId,`Assalomu alaykum ${name} botimizga xush kelibsiz. Botga biror bir  \n Instagram video link yuboring.  Men video tarzda qaytarib beraman`)
        }
    
        const video_link =await tiktok_downloader(message.text)
        await bot.sendVideo(chatId, video_link)
        
        
    } catch (error) {
        
        console.log(error+"")
    }
    
})


