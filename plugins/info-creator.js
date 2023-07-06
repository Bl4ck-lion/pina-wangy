import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorwa}`, `${await conn.getName(nomorwa+'@s.whatsapp.net')}`, `LeonGanz `, `My Skill Just Copas`, `admin@leonganz.eu.org`, `Indonesia`, `https://leonganz.eu,org`, `Developer Yui-Ai`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `Whatsapp Bot`, `Jangan Di Spam`, `Nothing`, `Indonesia`, `https://youtube.com/@LeonGanz`, `Hanyalah hayalan semata`]
  ], m)
  let vn = "./vn/owner.mp3"
  await conn.sendFile(m.chat, vn, 'kuru.mp3', null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
  } 

handler.help = ['owner', 'creator']
handler.tags = ['main']
handler.command = /^(owner|creator)/i
export default handler