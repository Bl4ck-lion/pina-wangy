import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Mau Nanya Apa?`
    let res = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=Maslent&text=${text}`)
    let zel = await res.json()
   m.reply(zel.result)
}
handler.help = ['openai']
handler.tags = ['ai']
handler.command = /^(ai|openai)$/i
handler.limit = true
export default handler