module.exports = {
  command: "delete",
  alias: [ "d", "del" ],
  category: ["main"],
  description: "Delete Pesan",
  loading: true,
  async run(m, { sock, config, Func }) {

if (!m.quoted) throw 'reply pesan kalau mau apus pesan'

 if (!m.isOwner && !m.isAdmin) throw 'maaf command ini bisa nya ke admin and owner'

return sock.sendMessage(m.cht, { delete: { remoteJid: m.cht, id: m.quoted.id, participant: m.quoted.sender }})

}
}