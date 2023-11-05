/*
// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Sampe Nipu 
   Apalagi Lari Dari Tanggung Jawab

// Base ${botname}

› Create By HW MODS WA
› Base Ori HW MODS

🌷 KALAU MAU RENAME TARO CREDITS GUA : ${botname}*/
//recode : vallz
//=================================================//
require('./hwkal')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { apikey } = require('./apikey.json')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./lib/upload')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const hxz = require('hxz-api')
const ytdl = require("ytdl-core")
const { Configuration, OpenAIApi } = require('openai')
const { exec, spawn, execSync } = require("child_process")
const { ngazap } = require('./baseikal/virtex/ngazap')
const { buttonkal } = require('./baseikal/virtex/buttonkal')
const { cttl } = require('./baseikal/virtex/cttl')
const { tizi } = require('./baseikal/virtex/tizi')
const { weg } = require('./baseikal/virtex/weg')
const { virtex7 } = require('./baseikal/virtex/virtex7')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
//=================================================//
// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []

const yts = require('./scrape/yt-search')
const { ytSearch } = require('./scrape/yt')
const thumbnail = fs.readFileSync ('./baseikal/image/mamak.jpg')
const thumb = fs.readFileSync ('./baseikal/image/mamak.jpg')
const kalimage = fs.readFileSync ('./baseikal/image/mamak.jpg')
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))
const owner = JSON.parse(fs.readFileSync('./premium.json'))
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const docunye = JSON.parse(fs.readFileSync('./database/docu.json'))
const zipnye = JSON.parse(fs.readFileSync('./database/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./database/apk.json'))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const antidel = JSON.parse(fs.readFileSync("./lib/antidel.json"))
const banned = JSON.parse(fs.readFileSync('./baseikal/dbnye/banned.json'))

virgam = fs.readFileSync(`./baseikal/image/deden.jpeg`)
//=================================================//
module.exports = haikal = async (haikal, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix

//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const botNumber = await haikal.decodeJid(haikal.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await haikal.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const welcm = m.isGroup ? wlcm.includes(from) : false
const welcmm = m.isGroup ? wlcmm.includes(from) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const autodelete = from && isCmd ? antidel.includes(from) : false 
const isBan = banned.includes(m.sender)
const isUser = pengguna.includes(m.sender)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"
//=================================================//}
const cap = 'VALLZ OFFC'
const kalgans = { 
key: {
fromMe: [], 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "0@s.whatsapp.net" } : {}) 
},

'message': {
	"interactiveMessage": {
						"header": {
						
							"hasMediaAttachment": [],
							"jpegThumbnail": thumb,
													},
						"nativeFlowMessage": {
							"buttons": [
								{
									"name": "review_and_pay",
									"buttonParamsJson": "{\"currency\":\"IDR\",\"external_payment_configurations\":[{\"uri\":\"\",\"type\":\"payment_instruction\",\"payment_instruction\":\"hey ini test\"}],\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":2500000,\"offset\":100},\"reference_id\":\"4MX98934S0D\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":2500000,\"offset\":100},\"items\":[{\"retailer_id\":\"6348642505244872\",\"product_id\":\"6348642505244872\",\"name\":\"VALLZ OFFC\",\"amount\":{\"value\":2500000,\"offset\":100},\"quantity\":1}]}}"
								}
							]
			}
}}}
//=================================================
const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}
const reply = (teks) => {
return haikal.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `DEVELOPER ${botname}`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": 'https://telegra.ph/file/7b3c0ac03dab420c5c12b.jpg',"thumbnail": thumb,"sourceUrl": `https://wa.me/6281214281312?text=bang+ini+link+donasi+yah+https://bit.ly/3Mw6t30+aku+mau+donasi`}}}, { quoted:m})} 

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await haikal.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}
//=================================================
const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await haikal.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}
//=================================================
async function loading () {
var vallzalyws = [
"⌛10%",
"⏳30%",
"⌛50%",
"⏳80%",
"⌛100%",
"Loading Selesai..."
]
let { key } = await haikal.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

for (let i = 0; i < vallzalyws.length; i++) {
/*await delay(10)*/
await haikal.sendMessage(from, {text: vallzalyws[i], edit: key });//PESAN LEPAS
}
}
if (autodelete) {
haikal.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: mek.key.id,
participant: mek.key.participant
}
})
}
//=================================================
/*let reactionMessage = {
                    react: {
                        text: `👁️‍🗨️`,
                        key: { remoteJid: m.chat, fromMe: true, id: mek.key.id }
                    }
                }
                await sleep(1500)
                haikal.sendMessage(m.chat, reactionMessage)*/
//=================================================//
if (!haikal.public) {
if (!m.key.fromMe) return
}
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
haikal.sendPresenceUpdate(jd, from)
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}
if (isCmd && !isUser) {
pengguna.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pengguna, null, 2))
}
// Anti Link
if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return m.reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await haikal.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return haikal.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return haikal.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return haikal.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
await haikal.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
haikal.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:hw})
}
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: haikal.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, haikal.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
haikal.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('©️')) {
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

async function sendGeekzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await haikal.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

const sendapk = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
m.reply('*Rusak Bodoh !! Yang Bener Contoh : Yoapk VALLZ OFFC*')
}
for (let ikalii of apknye) {
if (budy === ikalii) {
let buffer = fs.readFileSync(`./database/apk/${ikalii}.apk`)
sendapk(buffer)
}
}
//=================================================//
const sendzip = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
m.reply('*Rusak Bodoh !! Yang Bener Contoh : Yozip VALLZ OFFC*')
}
for (let ikali of zipnye) {
if (budy === ikali) {
let buffer = fs.readFileSync(`./database/zip/${ikali}.zip`)
sendzip(buffer)
}
}
//=================================================//
const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
m.reply('*Rusak Bodoh !! Yang Bener Contoh : Yopdf VALLZ OFFC*')
}
for (let ikal of docunye) {
if (budy === ikal) {
let buffer = fs.readFileSync(`./database/Docu/${ikal}.pdf`)
senddocu(buffer)
}
}
const sendvn = (teks) => {
haikal.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, {quoted:m})
}

for (let anju of vnnye) {
if (budy === anju) {
let buffer = fs.readFileSync(`./database/Audio/${anju}.mp3`)
sendvn(buffer)
}
}
//=================================================//
var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
try {
ppuser = await haikal.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
} 
//=================================================//
if (('family100'+from in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+from]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
 let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
 if (room.terjawab[index]) return !0
 room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
haikal.sendText(from, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+from].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+from]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
   haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lagu`}, {quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
 delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Gambar`}, {quoted:m})
 delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kata`}, {quoted:m})  
 delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lirik`}, {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 haikal.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Tebakan`}, {quoted:m}) 
 delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await haikal.sendText(room.x, str, m, { mentions: parseMention(str) } )
await haikal.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
haikal.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
haikal.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) haikal.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) haikal.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) haikal.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
haikal.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) haikal.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) haikal.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
haikal.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Telah Kembali Dari Afk ${user.afkReason ? ' Selama ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
//=================================================//
switch(command) {
case 'bug': {
let bug = `
SILAHKAN PILIH 

╭━━━☉ ダ PROVIDER
❑ ${prefix}telkomsel
❑ ${prefix}indosat
❑ ${prefix}tri
❑ ${prefix}smartfren
❑ ${prefix}axis
❑ ${prefix}xl
❑ ${prefix}liveon
❑ ${prefix}other
╰━━━━━━━━━━━━━━☉

`
haikal.sendMessage(m.chat, {
text: bug,
contextInfo: {
externalAdReply: {
title: 'PROVIDER',
body: 'By Admin SF',
thumbnailUrl: thumb,
sourceUrl: 'https://chat.whatsapp.com/DIngmG5O8W53nsHevEPXhS',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
break

case 'telkomsel': {
tsel = `
╭━━━☉ ダ TELKOMSEL
❑ ${prefix}tselilped
❑ ${prefix}tselruangguru
❑ ${prefix}tselgamemax
❑ ${prefix}tselopok
❑ ${prefix}tselsosmed
╰━━━━━━━━━━━━━━☉
`
haikal.sendMessage(m.chat, {
text: tsel,
contextInfo: {
externalAdReply: {
title: 'TELKOMSEL',
body: 'By Admin SF',
thumbnailUrl: thumb,
sourceUrl: 'https://chat.whatsapp.com/DIngmG5O8W53nsHevEPXhS',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
break

case 'tselilped': {
newReply(`
◇━━━━━━ILPED━━━━━━◇

payload =
PATCH /ssh-ws HTTP/1.1[crlf]Host: [host][crlf]Host: api.zoom.us[crlf]Upgrade: websocket[crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf][crlf]

Proxy =
170.114.46.0
170.114.52.2
141.193.213.10

◇━━━━━━━━━━━━━◇

Payload =
GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy =
104.17.2.81
104.18.2.2
104.16.51.111
104.26.6.171
104.17.71.206
104.18.24.139
104.16.226.91
104.18.160.90
104.16.66.85
104.16.86.20
104.16.170.10
104.18.106.64
104.16.182.114
104.21.21.104
172.67.21.177
104.22.60.94
104.21.38.157
104.21.8.162
104.21.11.175
162.159.134.42
104.21.29.207
`)
}
break

case 'tselruangguru': {
newReply(`
◇━━TSEL RUANGGURU━━◇

Payload =
GET /cdn-cgi/trace HTTP/1.1[crlf]Host: id-oc.ruangguru.com[crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy =
104.18.2.2
104.18.2.3
104.16.51.111
104.16.53.111
`)
}
break
case 'tselgamemax': {
newReply(`◇━━━━━━GAMESMAX━━━━━━◇

Payload =
GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy :
104.17.206.159
104.18.23.187
104.18.21.219
`)
}
break
case 'tselopok': {
newReply(`◇━TSEL OPOK CLOUDPROT━◇

Payload =
GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy =
s3.digipos-prod.telkomsel.com

ALL TKP
Jateng, jabar, jatim = APN
3gprs
sumatra noset konek
kalimantan = APN
home
/
xlunlimited
, Internet
sulsel noset apn konek

◇━━━━TSEL OPOK━━━━◇

payload =
GET /cdn-cgi/trace HTTP/1.1[crlf]Host: [rotate=skul.id;loop.co.id][crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy =
104.17.78.107

◇━━━━━━DIRECT━━━━━━◇
GET http://tsel.me/worryfree HTTP/1.1[crlf]Host: tsel.me[crlf]Upgrade: websocket[crlf][crlf]
`)
}
break
case 'tselsosmed': {
newReply(`◇━━━TSEL SOSMED━━━◇

Payload = 
GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

proxy =
162.159.130.11
104.16.51.111
162.159.128.7
`)
}
break
case 'axis': {
axis = `
╭━━━☉ ダ AXIS
❑ ${prefix}axisconference
❑ ${prefix}axissosmed
❑ ${prefix}axismusik
❑ ${prefix}axisvideo
❑ ${prefix}axisgame
❑ ${prefix}axisopok
❑ ${prefix}axisviu
❑ ${prefix}axiswa
❑ ${prefix}axisedu
❑ ${prefix}axissushiroll
╰━━━━━━━━━━━━━━☉
`
haikal.sendMessage(m.chat, {
text: axis,
contextInfo: {
externalAdReply: {
title: 'AXKS',
body: 'By Admin SF',
thumbnailUrl: thumb,
sourceUrl: 'https://chat.whatsapp.com/DIngmG5O8W53nsHevEPXhS',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
break
case 'axisconference': {
newReply(`◇━AXIS/XL CONFERENCE━◇

Payload ( 𝙀𝙉𝙃𝘼𝙉𝘾𝙀𝘿 ) =
PATCH /ssh-ws HTTP/1.1[crlf]Host: [host][crlf]Host: api.zoom.us[crlf]Upgrade: websocket[crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf][crlf]

𝘽𝙄𝘼𝙎𝘼 =
GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy =
141.193.213.10
170.114.46.1
172.67.139.182
104.21.8.162
104.18.18.242
104.16.51.111

Host (𝙚𝙣𝙝𝙖𝙣𝙘𝙚𝙙) =
beta.zoom.us
api.zoom.us
zoomcares.zoom.us

( 𝗘𝗡𝗛𝗔𝗡𝗖𝗘𝗗 )`)
}
break
case 'axissosmed': {
newReply(`◇━━━━AXIS SOSMED━━━━◇

payload =
GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy =
104.16.51.111
162.159.128.7`)
}
break
case 'axismusik': {
newReply(`◇━━━━AXIS MUSIK━━━━◇

Payload =
GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy =
104.16.51.111
162.159.128.7
162.159.130.11
◇━━━━━SSL━━━━━◇
api.joox.com
www.joox.com
open.spotify.com`)
}
break
case 'axisvideo': {
newReply(`◇━━XL AXIS VIDIO━━◇

Payload = 
GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy = 
104.22.5.240
172.67.5.14
104.22.4.240
104.16.51.111`)
}
break
case 'axisgame': {
newReply(`◇━━━AXIS GAME━━━━◇

Payload :
GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy :
104.16.51.111
104.18.22.136
104.16.106.96
162.159.128.7
104.19.185.16
104.16.109.96
104.16.110.96
104.18.40.33

◇━━━SSL━━━◇
m.pubgmobile.com
mpl.mobilelegends.com
m.freefiremobile.com
graph.facebook.com`)
}
break
case 'axisopok': {
newReply(`◇━━━━AXIS XL OPOK━━━━◇

Payload =
GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy =
api.ovo.id
chat.xl.co.id
staging.games.axis.co.id
cdn099.zendesk.com`)
}
break
case 'axiswa': {
newReply(`◇━━━AXIS WA━━━◇

Payload =
GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy =
104.16.53.111`)
}
break
case 'axisedu': {
newReply(`◇━━━━XL/AXIS EDU━━━━━◇

Payload (𝗘𝗡𝗛𝗘𝗡𝗖𝗘𝗗) :
HEAD / HTTP/1.1[crlf]Host: io.ruangguru.com[crlf][crlf]PATCH / HTTP/1.1[crlf]Host: [host][crlf]Upgrade: websocket[crlf][crlf][split]HTTP/ 1[crlf][crlf]

Proxy :
104.18.107.64
104.18.106.64
104.18.25.139
104.18.2.2
104.18.2.3
104.16.53.111
104.17.74.206

◇━━━━━━━━━━━━━◇

Payload :
GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy :
104.18.107.64
104.18.106.64
104.18.2.2
104.18.2.3
104.16.53.111
104.17.72.206`)
}
break
case 'axissushiroll': {
newReply(`◇━━━━━━SUSHIROLL━━━━━━◇

Payload =
GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy =
www.sushiroll.co.id
blog.sushiroll.co.id`)
}
break

case 'xl': {
xl = `
╭━━━☉ ダ XL
❑ ${prefix}xlconference
❑ ${prefix}xlyoutube
❑ ${prefix}xliflix
❑ ${prefix}xlturbo
❑ ${prefix}xlvideo
❑ ${prefix}xlopok
❑ ${prefix}xledu
❑ ${prefix}akrab
❑ ${prefix}flexjabar
❑ ${prefix}flex
❑ ${prefix}xlmeeting
╰━━━━━━━━━━━━━━☉
`
haikal.sendMessage(m.chat, {
text: xl,
contextInfo: {
externalAdReply: {
title: 'XL',
body: 'By Admin SF',
thumbnailUrl: thumb,
sourceUrl: 'https://chat.whatsapp.com/DIngmG5O8W53nsHevEPXhS',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
break
case 'xlconference': {
newReply(`◇━AXIS/XL CONFERENCE━◇

Payload ( 𝙀𝙉𝙃𝘼𝙉𝘾𝙀𝘿 ) =
PATCH /ssh-ws HTTP/1.1[crlf]Host: [host][crlf]Host: api.zoom.us[crlf]Upgrade: websocket[crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf][crlf]

𝘽𝙄𝘼𝙎𝘼 =
GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy =
141.193.213.10
170.114.46.1
172.67.139.182
104.21.8.162
104.18.18.242
104.16.51.111

Host (𝙚𝙣𝙝𝙖𝙣𝙘𝙚𝙙) =
beta.zoom.us
api.zoom.us
zoomcares.zoom.us

( 𝗘𝗡𝗛𝗔𝗡𝗖𝗘𝗗 )`)
}
break
case 'xlyoutube': {
newReply(`◇━━━XL/AXIS YOUTUBE━━━◇

Payload =
GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

proxy =
104.18.19.183
104.16.53.111
162.159.128.7

◇━━━SSL━━━━◇
m.youtube.com
i9.ytimg.com
googlevideo.com`)
}
break
case 'xliflix': {
newReply(`◇━━━━━XL IFLIX━━━━━◇

◇━━━SSL━━━◇
live.iflix.com
upload.iflix.com
pbaccess.iflix.com
access.iflix.com
tv.iflix.com
access.wetv.vip
live.wetv.vip
t.rconfig.wetv.vip
zenvideo.wetv.vip`)
}
break
case 'xlturbo': {
newReply(`XL TURBO

ws : 
api.zendesk.com
support.zoom.us`)
}
break
case 'xlvideo': {
newReply(`◇━━XL AXIS VIDIO━━◇

Payload = 
GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy = 
104.22.5.240
172.67.5.14
104.22.4.240
104.16.51.111`)
}
break
case 'xlopok': {
newReply(`◇━━━━AXIS XL OPOK━━━━◇

Payload =
GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy =
api.ovo.id
chat.xl.co.id
staging.games.axis.co.id
cdn099.zendesk.com`)
}
break
case 'xledu': {
newReply(`◇━━━━XL/AXIS EDU━━━━━◇

Payload (𝗘𝗡𝗛𝗘𝗡𝗖𝗘𝗗) :
HEAD / HTTP/1.1[crlf]Host: io.ruangguru.com[crlf][crlf]PATCH / HTTP/1.1[crlf]Host: [host][crlf]Upgrade: websocket[crlf][crlf][split]HTTP/ 1[crlf][crlf]

Proxy :
104.18.107.64
104.18.106.64
104.18.25.139
104.18.2.2
104.18.2.3
104.16.53.111
104.17.74.206

◇━━━━━━━━━━━━━◇

Payload :
GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy :
104.18.107.64
104.18.106.64
104.18.2.2
104.18.2.3
104.16.53.111
104.17.72.206`)
}
break
case 'akrab': {
newReply(`◇━━━━━━Akrab XL━━━━━━◇

Payload =
GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy =
104.17.2.81
104.20.75.141`)
}
break
case 'flexjabar': {
newReply(`◇━━━FLEX JABAR━━━◇

PATCH /ws HTTP/1.1
Host: [host]
Host: line.me
Connection: Keep-Alive
Connection: Keep-Alive
Proxy-Connection: Keep-Alive
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Version: 13
User-Agent: [ua][crlf][crlf]

Proxy =
sogood.linefriends.com
Ava.game.naver.com
bill.neowiz.com
df.game.naver.com
support.line2.com

By : @gretongersteamofficial`)
}
break
case 'flex': {
newReply(`◇━━FLEX/WLG━━◇

Payload =
PATCH / HTTP/1.1[lf]Host: [host][lf]Host: line.me[lf]Connection: Keep-Alive[lf]Connection: Keep-Alive
[lf]Proxy-Connection: Keep-Alive[lf]Upgrade: websocket[lf]Connection: Upgrade[lf]Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==[lf]Sec-WebSocket-Version: 13[lf]User-Agent: [ua][crlf][crlf]

GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]


Proxy =
104.22.3.25
104.18.214.235
104.18.147.61
104.18.42.238
104.16.51.111
◇━━━SSL━━━◇
media.fcgk35-1.fna.whatsapp.net
C.whatsapp.net
V.whatsaap.net`)
}
break
case 'xlmeeting': {
newReply(`XL METTING BELAJAR 🇮🇩🇮🇩

Websocket mode 
104.16.51.111
104.16.53.111
104.17.2.81

Ssl Mode
mpl.mobilelegends.com`)
}
break

case 'indosat': {
isat = `
╭━━━☉ ダ INDOSAT
❑ ${prefix}isatedu
❑ ${prefix}isatopok
╰━━━━━━━━━━━━━━☉
`
haikal.sendMessage(m.chat, {
text: isat,
contextInfo: {
externalAdReply: {
title: 'INDOSAT',
body: 'By Admin SF',
thumbnailUrl: thumb,
sourceUrl: 'https://chat.whatsapp.com/DIngmG5O8W53nsHevEPXhS',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
break
case 'isatedu': {
newReply(`◇━━━━━ISAT EDU━━━━━◇

Payload =
PATCH / HTTP/1.1[crlf]Host: [host][crlf]Host: Zoomcares.zoom.us[crlf]Upgrade: websocket[crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf][crlf]

Proxy =
api.zoom.us
zoomcares.zoom.us
support.udemy.com`)
}
break
case 'isatopok': {
newReply(`◇━━━ISAT OPOK━━━◇

◇━━━Direct━━━━━◇
Payload =
CONNECT http://202.152.162.239/lpisat/ramadhan/ HTTP/1.1[crlf]Host: http://c.whatsapp.com/[crlf]Connection: Keep-Alive[crlf]Update: @archive_all_bug[crlf]Upgrade: websocket[crlf][crlf]

◇━━━UDP CUSTOM━━━◇
port
1-65535`)
}
break
case 'byu': {
byu = `
╭━━━☉ ダ BYU
❑ ${prefix}byuopok
╰━━━━━━━━━━━━━━☉
`
haikal.sendMessage(m.chat, {
text: byu,
contextInfo: {
externalAdReply: {
title: 'BYU',
body: 'By Admin SF',
thumbnailUrl: thumb,
sourceUrl: 'https://chat.whatsapp.com/DIngmG5O8W53nsHevEPXhS',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
break
case 'byu': {
newReply(`
◇━━━BYU OPOK━━━◇

Payload =
GET /cdn-cgi/trace HTTP/1.1[crlf]Host: space.byu.id[crlf][crlf]GET-RAY / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy =
space.byu.id 500
cf.shopee.co.id 200
`)
}
break
case 'smartfren': {
smart = `
╭━━━☉ ダ SMARTFREN
❑ ${prefix}smartchat
❑ ${prefix}smartopok
╰━━━━━━━━━━━━━━☉
`
haikal.sendMessage(m.chat, {
text: smart,
contextInfo: {
externalAdReply: {
title: 'SMARTFREN',
body: 'By Admin SF',
thumbnailUrl: thumb,
sourceUrl: 'https://chat.whatsapp.com/DIngmG5O8W53nsHevEPXhS',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
break
case 'smartchat': {
newReply(`
◇━━━━━Smartfren Chat━━━━━◇

Payload =
GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy =
sogood.linefriends.com
`)
}
break
case 'smartopok': {
newReply(`
◇━━━━━Smartfren Opok━━━━━◇

Payload =
GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy =
www.northlink.co.za
`)
}
break
case 'liveon': {
live = `
╭━━━☉ ダ LIVE ON
❑ ${prefix}liveonopok
╰━━━━━━━━━━━━━━☉
`
haikal.sendMessage(m.chat, {
text: live,
contextInfo: {
externalAdReply: {
title: 'LIVE ON',
body: 'By Admin SF',
thumbnailUrl: thumb,
sourceUrl: 'https://chat.whatsapp.com/DIngmG5O8W53nsHevEPXhS',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
break
case 'liveonopok': {
newReply(`
◇━━LIVE ON OPOK━━◇

Payload = 
GET wss://[host]/ HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy = 
104.17.224.203
104.16.143.190
104.16.51.111
104.16.53.111
104.21.90.217
104.26.15.208
172.67.205.138
`)
}
break
case 'tri': {
tri = `
╭━━━☉ ダ TRI
❑ ${prefix}triopok
╰━━━━━━━━━━━━━━☉
`
haikal.sendMessage(m.chat, {
text: tri,
contextInfo: {
externalAdReply: {
title: 'TRI',
body: 'By Admin SF',
thumbnailUrl: thumb,
sourceUrl: 'https://chat.whatsapp.com/DIngmG5O8W53nsHevEPXhS',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
break
case 'triopok': {
newReply(`
TRI OPOK 🇮🇩🇮🇩

UDP CUSTOM

Faq :
Kok gak konek bang
Pake apn internet kek apn tsel
`)
}
break
case 'other': {
oth = `
╭━━━☉ ダ LAINNYA
❑ ${prefix}maxstream
❑ ${prefix}vision
❑ ${prefix}sakti
❑ ${prefix}omg
❑ ${prefix}wifi
❑ ${prefix}instagram
❑ ${prefix}opera
╰━━━━━━━━━━━━━━☉
`
haikal.sendMessage(m.chat, {
text: oth,
contextInfo: {
externalAdReply: {
title: 'OTHER',
body: 'By Admin SF',
thumbnailUrl: thumb,
sourceUrl: 'https://chat.whatsapp.com/DIngmG5O8W53nsHevEPXhS',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
break
case 'maxstream': {
newReply(`
◇━━MAXSTREAM━━◇

Payload =
GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy = 
104.16.51.111
172.67.5.14
104.22.4.240
104.16.231.163
`)
}
break
case 'vision': {
newReply(`
◇━━━━VISION+━━━━◇

◇━━Websocket━━◇
104.21.58.186
172.67.206.64
104.21.235.171
172.67.192.40
104.21.73.208
104.21.235.172
162.159.128.7
104.18.225.52

◇━━━SSL━━━◇
cdn.oxxocel.com
`)
}
break
case 'sakti': {
newReply(`
BUG SAKTI 😱😱

104.16.51.111
104.16.53.111
162.159.138.6
162.159.128.7
104.17.2.81
104.17.3.81

PAKET :
AXIS OPOK
ILPED
AXIS GAME
METTING
EDUKASI
WLG
AKRAB
RUANGGURU
DLL
`)
}
break
case 'omg': {
newReply(`
◇━━━━━━OMG━━━━━━◇

payload =
GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

proxy =
104.16.51.111
172.67.5.14
104.22.4.240
`)
}
break
case 'wifi': {
newReply(`

`)
}
break
case 'instagram': {
newReply(`
◇━━━━INSTAGRAM XL /AXIS━━━━◇

SSL/TLS =
static.cdninstagram.com
`)
}
break
case 'opera': {
newReply(`
◇━━━━━OPERA━━━━━◇

Payload ( 𝙀𝙉𝙃𝘼𝙉𝘾𝙀𝘿 ) =
PATCH /ssh-ws HTTP/1.1[crlf]Host: [host][crlf]Host: odsp-test.op-mobile.opera.com[crlf]Upgrade: websocket[crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf][crlf]

𝘽𝙄𝘼𝙎𝘼 =
GET / HTTP/1.1[crlf]Host: [host][crlf]Connection: Upgrade[crlf]User-Agent: [ua][crlf]Upgrade: websocket[crlf][crlf]

Proxy =
104.18.32.185
172.64.155.71
172.67.201.167
104.18.0.171
104.17.195.62
104.16.51.111
104.18.36.140
172.64.151.116
104.16.233.163
104.18.41.89
172.64.146.167
`)
}
break
//=================================================
default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply('*khusus Premium*')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return m.reply('*khusus Premium*')
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
if (!isCreator) return m.reply('*khusus Premium*')
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.isBaileys) return
if (from.endsWith('broadcast')) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
haikal.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
