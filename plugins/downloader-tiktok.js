import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya Mana?`
m.reply(wait)
  let res = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=Maslent&url=${text}`)
  let json = await res.json()
  let cap = `Nih`
  conn.sendMessage(m.chat, { video: { url: json.result.link }, caption: cap }, { quoted: m })
  conn.sendMessage(m.chat, { audio: { url: json.result.link }, mimetype: 'audio/mp4' }, { quoted : m })
  }
handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = /^(tiktok|tt|ttdl|tiktokdl)$/i
handler.limit = true

export default handler