const axios = require('axios');
const canvafy = require('canvafy')

module.exports = {
  command: "spotify",
  alias: ["sps", "spotifys", "spotifysearch"],
  category: ["downloader"],
  settings: {
    limit: true,
  },
  description: "Mencari/download musik dari Spotify",
  loading: true,
  async run(m, { sock, Func, Scraper, text, config }) {
    if (!text)
      throw `Nama Lagu Pengen Di Search?`;

    if (!text)
      throw `Nama Lagu Pengen Di Search?`;

if (/open.spotify.com/.test(text)) {
const downloader = `https://spotifyapi.caliphdev.com/api/download/track?url=${text}`
const data = await axios.get('https://spotifyapi.caliphdev.com/api/info/track?url=' + text).then(a => a.data)

let anuu = `╭──── *[ sᴘᴏᴛɪғʏ - ᴅᴏᴡɴʟᴏᴀᴅ ]* ──々\n`
anuu += `│ =〆 ᴊᴜᴅᴜʟ : ${data.title}\n`
anuu += `│ =〆 ᴀʀᴛɪs : ${data.artist}\n`
anuu += `│ =〆 ʟɪɴᴋ: ${data.url}\n`
anuu += `│ =〆 ᴅᴜʀᴀsɪ: ${data.duration}\n`
anuu += `╰─々`

const p = await new canvafy.Spotify()
  .setTitle(data.title)
  .setAuthor("Spotify Downloader")
  .setTimestamp(40, 100)
  .setOverlayOpacity(0.8)
  .setBorder("#fff", 0.8)
  .setImage(data.thumbnail)
  .setBlur(3)
  .build();

   await sock.sendMessage(m.cht, { image: p, caption: anuu }, { quoted: m })

await sock.sendMessage(m.cht, { audio: { url: downloader }, mimetype: 'audio/mpeg' }, { quoted: m })

} else {

const search = await axios.get('https://spotifyapi.caliphdev.com/api/search/tracks?q=' + text).then(a => a.data)
 sock.sendButtonMessage(m.cht, [{
        type: 'list',
        title: "Click Here",
        value: [{
          headers: "search",
          rows: search.map((a, i) => ({
             title: `${a.title} | ${a.release_date}`,
             command: `${m.prefix}spotify ${a.url}`  ,
             body: a.url
          }         
        ))
       }]
     }], m, { url: search[0].thumbnail, body: `yang anda search: ${text}`, footer: config.name });
}

  },
};