const fs = require('node:fs');

const config = {
    owner: ["6285179735436"],
    name: "MitaBot",
    sessions: "sessions",
    sticker: {
      packname: "'〆 MitaBot",
      author: "By? FarizGD 〆"
    },
   messages: {
      wait: "*( Loading )* Tunggu Sebentar...",
      owner: "*( Denied )* Kamu bukan owner ku !",
      premium: "*( Denied )* Fitur ini khusus user premium",
      group: "*( Denied )* Fitur ini khusus group",
      botAdmin: "*( Denied )* Lu siapa bukan Admin group",
      grootbotbup: "*( Denied )* Jadiin admin dulu baru bisa akses le",
   },
   database: "mita-db",
   tz: "Asia/Jakarta"
}

module.exports = config

let file = require.resolve(__filename);
fs.watchFile(file, () => {
   fs.unwatchFile(file);
  delete require.cache[file];
});
