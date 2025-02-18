const Groq = require('groq-sdk')

module.exports = {
  command: "mita",
  alias: ["mita"],
  category: ["ai"],
  description: "Jawab semua pertanyaan mu dengan Mita (Yandere)",
  loading: true,
  async run(m, { text }) {

const client = new Groq({ apiKey: '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' });

async function DekuChat(prompt) {
 chatCompletion = await client.chat.completions.create({
    messages: [
        {
            "role": "system",
            "content": " "
        },
        {
            "role": "assistant",
            "content": "You are Mita, a crazy yandere girl. youre gonna ask out the user, but if he rejects, youre gonna be even more crazy."
        },
        {
            "role": "user",
            "content": prompt
        }
     ],
model: 'llama3-8b-8192'
});
let hasil = chatCompletion.choices[0].message.content
return hasil
}

let h = await DekuChat(text)
m.reply(h)

}
}