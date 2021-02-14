let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Bot :

COMO INSTALAR *[TERMUX]*
1) $pkg install git
2) $pkg install ffmpeg
3) $pkg install imagemagick
4) $pkg install nodejs


5) $git clone https://github.com/alanxdpro/psmods.git 
6) $ls
7) $cd psmods

o último.
Instalação  :

8) npm i
9) node index.js

_
_You pode ver o tutorial no
*Nosso Youtube:*
SITE:https://www.youtube.com/c/PsMods


`.trim(), m)
}
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

