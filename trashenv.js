const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'trashcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK05MUEN1UC8yTnRTa3lCV2FpZGp0UllhaEI3ODFOY1dKR1A3eUJ3T2lXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXc0RHBzclBYQ1lCZHVlMThiQlh6Q3pscFMwSGtOa3FkcStydWxtNnl4MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSmdRRTRveTJ0ZWdQcitWZVA5WGEvQWdyOTFyRE5aSm9vM2hHWnBlcldrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNaktMOHdOb29wMWQzUmNQdjlnL3UzOWxiK0NCMWliSzZrM2ZqMXNLN0hvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdBdHhHYSs2RitINXg3SXYrN1NxUk5RM3hCclRBWTE2TFhLdVplbmxlVzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJEK0p1RFVReU1GSGdrRFdhTjIrM29md3A3SzEzTEdCNnJ5RXhHUXFkaEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUlNQ1FYMVdCZDVNMksyWmUvU0hEcENhaW9WbUhpZ1Zlb3FoVURyUkJGdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1ptWW1WZGFsSGRSNmYyTU83dWZXd1YzMGE3ZFAvZ1MrQzZmL2xyVU5scz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjIwdXNCN09CQVQzUXMrUVJuUXU1QmhtNDBZTWhjZFdzaEJ2MmNwVUZpSjQvczJONnpjb2taL1YrZEJDbHFiNGJHNWlZcHZkOHgxY3hXZlBmNzRsTWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6IldFZG5laFlCeVlwbWRua2FpTmREaGxIZVBkVHJmQ0dpMUVwaUVhYm9RNVU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InBjSHozbG54U0VXQlNId2FSZ3ZQemciLCJwaG9uZUlkIjoiMTEzMzMzNDEtMmQ4YS00NDI4LWFlOTgtYWMxNGU5N2NhNDk2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBUQU5UcWFCYjlneUZua2NNaGdDRDdNVGk1UT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3aE9pNmY4em1VQTJReXRTTm9JaGtYb2xaKzg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVFJBU0hCT1QiLCJtZSI6eyJpZCI6Ijk0NzEyMzcyMTc2OjIyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTIzMDA4NDUwNjAxMDE5OjIyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTUhQNTVNRkVPcmhsc1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaEs4UVFHUmtGckZMeU1GVEdVUU9ac2FWdWRLbjhlUnVKNE5yUUFIb0h5ST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiL1ZnN0xOWDJzTlovZUVOelQ4b2owdHphRnpvb01TaUwwSDBzQjQ3NXpQYW1LQk9MMjJYcFY2TkZQSXN2R1BDWmRGNVdFUmNLUW9jUHFlWHVWOW1GREE9PSIsImRldmljZVNpZ25hdHVyZSI6Inpkd3Y1K3pyanBZa09KRW5ZMW9WNDREUDJrZVFlL0l3NG1GKzRwME5zd3hwdTZHYzhScHVEWDFXemxzUW1WUXdMeG5COVB5WXJpeGhPc0JzVlRNUmhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTIzNzIxNzY6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWVN2RUVCa1pCYXhTOGpCVXhsRURtYkdsYm5TcC9Ia2JpZURhMEFCNkI4aSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUzNTkyMDU2LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFZTyJ9' 
// Owner Setting
global.prefix = process.env.BOT_PREFIX ||'.'
global.owner = ["94712372176",]
global.error = ["6666",]
global.ownername = process.env.OWNER_NAME ||'Trashcore'
global.antidelete = process.env.ANTI_DELETE || true
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Bot Setting
global.botname = "Trashcore"
global.botversion = "1.4.0"
global.typebot = "Plugin"
global.session = "trashsession"
global.connect = true
global.statusview = process.env.AUTO_STATUS || true
global.antilinkgc = process.env.ANTILINK_GROUP || false 
global.autoTyping = process.env.AUTO_TYPE || false
global.autoRecord = process.env.AUTO_RECORD || true 
global.thumb = "https://files.catbox.moe/4ryp6k.jpg"
global.wagc = "https://chat.whatsapp.com/BPyIptm3ZH68y4pSPrLMyq?mode=r_t"
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Sticker Marker
global.packname = process.env.PACK_NAME ||'𝐓𝐑𝐀𝐒𝐇𝐂𝐎𝐑𝐄'
global.packname = process.env.AUTHOR||'𝐏𝐀𝐂𝐊𝐒'
//━━━━━━━━━━━━━━━━━━━━━━━━//
// Respon Message
global.mess = {
    success: '✅ Done.',
    admin: '🚨 Admin only.',
    premium: '🆘must be a premium user.',
    botAdmin: '🤖 Make me admin first.',
    owner: '👑 Owner only.',
    OnlyGrup: '👥 Group only.',
    private: '📩 Private chat only.',
    wait: '⏳ Processing...',
    error: '⚠️ Error occurred.',
}
//━━━━━━━━━━━━━━━━━━━━━━━━//
// File Update
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update File 📁 : ${__filename}`)
delete require.cache[file]
require(file)
})
