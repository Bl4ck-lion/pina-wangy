import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285859314712', 'LeonGanz', true]
] 
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285859314712'
global.packname = 'Yui - Ai by'
global.author = '© LeonGanz'
global.namebot = '​Yui - Ai'
global.wm = '© Yui By Rama'
global.stickpack = 'Yui - Ai by'
global.stickauth = '© LeonGanz'
// Link Sosmed
global.sig = 'https://leonganz.eu.org'
global.sgh = 'https://github.com/Bl4ck-lion'
global.sgc = 'https://chat.whatsapp.com/LwRa5bWVjhdK6UoebpXLeC'
// Donasi
global.psaweria = 'https://saweria.co/LeonGanz'
global.ptrakterr = 'https://saweria.co/LeonGanz'
global.povo = 'Gopay : 085859314712'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'xCOpP5f36W'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "Clk2rplE2w",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})