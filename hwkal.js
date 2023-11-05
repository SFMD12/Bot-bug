// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab



const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/BqPPlZ9gtSvGL07Y'
global.ig = '@defan_sugiarto' // ubah aja
global.email = 'defansugiarto5@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = '𝑫𝑬𝑭 𝑹𝑬𝑨𝑳𝑳' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6282114542876'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = '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'
//====================BY Hw Mods=============================//
global.botname = 'ABI MODS' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '𝑫𝑬𝑭 𝑹𝑬𝑨𝑳𝑳' // ubah aja ini nama sticker
global.author = '𝑫𝑬𝑭 𝑹𝑬𝑨𝑳𝑳' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'sessions' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
global.thumb = 'https://telegra.ph/file/50f1e14702af5e12e053c.jpg'
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})