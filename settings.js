/* 

=========================================================================

  #- Credits By Dimzxz
  #- Recode By Cann
   Contact: https://6287795094578
   Youtube: Cannnxy
   Telegram: https://t.me/_cannxzz
    
  Developer : https://wa.me/6289518611500
  
  -[ ! ]- Jangan hapus contact developer! hargai pembuat script ini

=========================================================================

*/

const fs = require('fs');
const chalk = require('chalk');

// Settings Bot 
global.owner = '6287795094578'
global.versi = "0.0.3"
global.namaOwner = "Cann"
global.packname = 'Bot WhatsApp'
global.botname = 'Takina Assistant'
global.botname2 = 'Takina Assistant'

global.tempatDB = 'database.json' // Jangan ubah
global.pairing_code = true // Jangan ubah

// Settings Link / Tautan
global.linkOwner = "https://wa.me/6287795094578"
global.linkGrup = "https://chat.whatsapp.com/B7Lx27Jdii98mbguGU4aba"
global.linkGrup2 = "https://whatsapp.com/channel/0029Vaj2A5s6buMM2XicjZ0x"

// Delay Jpm & Pushctc || 1000 = 1detik
global.delayJpm = 3500
global.delayPushkontak = 6000

// Settings Channel / Saluran
global.linkSaluran = "https://whatsapp.com/channel/0029Vaj2A5s6buMM2XicjZ0x"
global.idSaluran = "120363329561414919@newsletter"
global.namaSaluran = "Takina Assistant"

global.merchantIdOrderKuota = "OK2138351"
global.apiOrderKuota = "114267517319470152138351OKCT10C33F7CD04FFFE1CBE7C448CE217834"
global.qrisOrderKuota = "-"

// Settings All Payment
global.dana = "085973150738"
global.ovo = "085973150738"
global.gopay = "085973150738"
global.qris = "https://pomf2.lain.la/f/f4bg3pb.jpg"

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://-"
global.apikey = "-" //ptla
global.capikey = "-" //ptlc

// Settings Api Panel Pterodactyl Server 2
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https://-"
global.apikeyV2 = "-" //ptla
global.capikeyV2 = "-" //ptlc

// Settings Api Subdomain
global.subdomain = {
"skyzopedia.us.kg": {
"zone": "9e4e70b438a65c1d3e6d0e48b82d79de", 
"apitoken": "odilM9DpvLVPodbPyZwW7UcDKg1aIWsivJc0Vt_o"
}, 
"marketplace.us.kg": {
"zone": "2f33118c3db00b12c38d07cf1c823ed1", 
"apitoken": "6WS_Op6yuPOWcO17NiO-sOP8Vq9tjSAFZyAn82db"
}, 
"serverpanell.biz.id": {
"zone": "225512a558115605508656b7bdf29b28", 
"apitoken": "XasxSSnGp8M9QixvT6AAlh1vEm4icVgzDyz7KDiF"
}, 
"sincecraf.my.id": {
"zone": "a89500d3dcf7e531f5a6e25081c7c874", 
"apitoken": "aV-ilSaLRwfgIGz0c79ah6fbnpcLilDREvysdUsk"
}, 
"xyz-store.biz.id": {
"zone": "8ae812c35a94b7bd2da993a777b8b16d", 
"apitoken": "oqZafkd3mSt1bABD9MMTidpCtD9VZdiPTjElVKJB"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "4qOupI-Of-6yNrBaeS1-H0KySuKCd0wS-x0P5XQ4"
}
}

// Message Command 
global.mess = {
	owner: "* *Akses Ditolak*\nFitur ini hanya untuk owner bot!",
	admin: "* *Akses Ditolak*\nFitur ini hanya untuk admin grup!",
	botAdmin: "* *Akses Ditolak*\nFitur ini hanya untuk ketika bot menjadi admin!",
	group: "* *Akses Ditolak*\nFitur ini hanya untuk dalam grup!",
	private: "* *Akses Ditolak*\nFitur ini hanya untuk dalam private chat!",
	prem: "* *Akses Ditolak*\nFitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})