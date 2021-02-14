let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠══
▒█▀▀█ ▒█▀▀▀█ 　 ▒█▀▄▀█ ▒█▀▀▀█ ▒█▀▀▄ ▒█▀▀▀█ 
▒█▄▄█ ░▀▀▀▄▄ 　 ▒█▒█▒█ ▒█░░▒█ ▒█░▒█ ░▀▀▀▄▄ 
▒█░░░ ▒█▄▄▄█ 　 ▒█░░▒█ ▒█▄▄▄█ ▒█▄▄▀ ▒█▄▄▄█
   Creator ═
╠➥ Feito em javascript via NodeJs 
║
╠➥ Nome  :ALAN PS  
│➥ Phone :94991822942
│➥ InstaGRAM :allan.psxd
│➥ Link do Whatsapp https://criarlink.com/btp
╠➥ wa.me/+559491822942
║➥ YᴏᴜTᴜʙᴇ: Canal PS Mods https://www.youtube.com/channel/UCAjnR_CXJIScNE44ZPcYszg
║
╠══ bot Ps Mods
╠➥   Querem o meu bot no seu grupo chame pv
╠➥ 
╠➥   CONTACT : wa.me//+559492823978
║
║
║
╠══ psmods  BOT  ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
