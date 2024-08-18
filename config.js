/**
   * Created By Amaan Bashir.
   * Recode By Amaan Bashir
   * Contact Me on wa.me/923317282386
   * Follow https://github.com/rehmanihoon
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['923317282386']
global.ownernomer = "923317282386"
global.premium = ['923317282386']
global.packname = 'Sticker By'
global.author = 'Amaan Bashir'
global.sessionName = 'amaanbashir'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''

// Setting Mess
global.mess = {
    success: '✅Done',
    admin: 'This Feature is only used by Group Admin!',
    botAdmin: 'This Feature is only used by Bot Admin!',
    premime: 'This Feature is Only For Premium Users / Chat Owner',
    owner: 'This feature is only used by Bot Owner',
    group: 'This Feature Only used in Group!',
    private: 'This Feature Only used in Private Chat!',
    bot: 'This Feature is only for Bot Number',
    wait: 'Loading...',
    error: 'Error!',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}

// Limit
global.limitawal = {
    premium: "Infinity",
    free: 25
}

// Fake
global.thumb = fs.readFileSync('./media/image/naze.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')

// Url
global.mygit = 'https://github.com/rehmanihoon/naze-md/edit/main/config.js'
global.myyt = 'https://youtube.com/c/amaan2211'
global.myytv = 'https://youtu.be/2211'
global.mygc = "https://whatsapp.com/channel/0029Vag06KlLSmbUEGefRp16"

// Engak Ngaruh, Belum Kepasang
global.botname = 'AMAAN BOT'
global.akulaku = 'Bot By Naze'
global.ytname = 'AMAAN 2211' //Kalo Ngk Punya Yt Ngak Usah Di Ganti


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
