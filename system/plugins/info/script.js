const fs = require('node:fs')

module.exports = {
  command: "script",
  alias: ["sc", "scbot"],
  category: ["info"],
  description: "nuh uh",
  async run(m, { sock, Func }) {
  let tekssc = `⏤͟͟͞͞╳── *[ MitaBot ]* ── .々─ᯤ
│    =〆 ᴄᴀsᴇ x ᴘʟᴜɢɪɴ
│    =〆 ʙᴀsᴇ idk
│    =〆 ғɪᴛᴜʀ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴀᴅᴀ
│    =〆 ғɪᴛᴜʀ sᴇᴀʀᴄʜ ᴀᴅᴀ
│    =〆 ғɪᴛᴜʀ ᴀɴɪᴍᴇ ᴀᴅᴀ
│    =〆 ᴅʟʟ ᴀᴅᴀ
│    =〆 ʀᴇbrand: FarizGD
│    =〆 ᴄʜ:
│    =〆 taknak
⏤͟͟͞͞╳────────── .✦`

await sock.sendMessage(m.cht, {
  document: fs.readFileSync("./image/doc.txt"),
fileName: `Sc ${botname}`,
mimetype: 'application/msword',
jpegThumbnail:fs.readFileSync("./image/Dekusad.jpg"),
caption: tekssc,
  buttons: [
  {
    buttonId: ".tqto", 
    buttonText: {
      displayText: 'Thanks to'
    }
  }
],
  viewOnce: true,
  headerType: 6,
contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    forwardedNewsletterMessageInfo: {
        newsletterJid: saluran,
        serverMessageId: -1,
        newsletterName: `Script By: ${ownername}`,
       }
     }
   }, { quoted: m });
  },
};
