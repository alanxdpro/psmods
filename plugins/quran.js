let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
BOT:
Via Copas {SEBARKAN}

*YouTube:*
https://music.youtube.com
https://www.spotify.com/br/



`.trim(), m)
}
handler.command = /^(quran)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

