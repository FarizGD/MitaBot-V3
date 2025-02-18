const fs = require('node:fs')
  module.exports = {
  command: "tqto",
  alias: ["credit"],
  category: ["info"],
  description: "List Contrubutor bot ini",
  async run(m) {
    let cap = `
    i just stoled this bot :3
`;

await m.reply({
  document: fs.readFileSync("./image/doc.txt"),
fileName: `Thank You To`,
mimetype: 'application/msword',
jpegThumbnail:fs.readFileSync("./image/Dekusad.jpg"),
caption: cap,
contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    forwardedNewsletterMessageInfo: {
        newsletterJid: saluran,
        serverMessageId: -1,
        newsletterName: `Tqto By: ${ownername}`,
       }
     }
    });
  },
};
