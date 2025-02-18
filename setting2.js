const fs = require('fs');
const chalk = require('chalk');

//new
global.botname = 'MitaBot' //ur bot name
global.ownernumber = ['62895393325895'] //ur owner number, dont add more than one
global.ownername = 'FarizGD' //ur owner name
global.ownername2 = 'FarizGD' //ur owner name
global.websitex = ""
global.wagc = ""
global.saluran = ""
global.jidgroupnotif = ''
global.saluran2 = ""
global.jidgroup = ''
global.jidch = ''
global.tiktokname = '' //name tiktok owner
global.tiktokname2 = '' //name tiktok2 owner
global.tiktokname3 = '' //name tiktok3 owner
global.linkch = ""
global.linkgc = ""
global.linksosmed = ""
global.version = ""

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
