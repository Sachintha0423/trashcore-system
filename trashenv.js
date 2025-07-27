const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'trashcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUFEVGJjMG90NGtVdllkekQxUFJCNEluZ0hDTE9VRGRBUFJmSzRKY2gydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWZWNXFlanlPM0x3ZTg0SzhaWXlMSStEdG1FZ1FHUWxZajFlVTlWQTVYST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSENya3ZTRkE2U2VBdURFOHVhdjJMUDE1R0JROTFSWUlsOVM1a0Nvd25ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqNlJwVkd5OUFsSzgwTXJxVFJlYk05UHVhZVZMNk94ci8yVWtQbmlqd1RVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZLckFycm1lMDlXVnMzSHd5amVjd2xCRDJ5d1FrelI4bmNJRm5POXdxRVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJoTE5wSkZBUXZ6RnE5aGV5Sm8yMjlaUklFSURmRDlSUHBMYyt5Yk4yaTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU51bCtKOWVZSkkwTHRMZVd3Nmpuc1BqbmZGV1ZBLzgyZGRKM0Z3cUVYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZlRLMnBQOGdveHllWDR2Wk5ERzVIc2I4S3dsNUxlNVZMTTV2cytSSkducz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE1T214WHQ5SzNySDNaWDF6SnBaOWxNTjM4SlVkWHlqSGtpSnFNUDgwZDBTN1RZYWxHSGpwM3VaNlhXVEVTd3dIZktIYURiY1F0OG0yL0hnYjN1emhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiJBbXNBdDFaVktHL0lTYXRHSG1sMEM4U3Fsb3E3cTJkdU9RazQvcXExM21VPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzEyMzcyMTc2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjI1OTNBMzFDNzlEMDM5MThEQTQxMTg4NjFEOUQ1MkYwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTM2MDE2NDZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InotRnZ2QThkVHRhMFJtNm0ydkhmdVEiLCJwaG9uZUlkIjoiN2Y5MDI4YTMtMjAzNy00MzY0LTk1MzctNDdiZTQ4ZjZlMWZkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9HQk81VjJrQlF2L1hCa0F0MThkUnVwaExqUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkZnQxYmRYSVRta0FGYWtBeTh0V1ZVeGtvWnc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVFJBU0hCT1QiLCJtZSI6eyJpZCI6Ijk0NzEyMzcyMTc2OjI0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTIzMDA4NDUwNjAxMDE5OjI0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVBQNTVNRkVOeXNsOFFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaEs4UVFHUmtGckZMeU1GVEdVUU9ac2FWdWRLbjhlUnVKNE5yUUFIb0h5ST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiU0lTOEllTDJ5NE1hVW9JVHMvR3VLOTArV01KQ2E5TmJoUGgrU0JpUkVhRHg1VmRyc29EbCtwWUU3RlNYK0tlMXFZZ09rRmViaHJkRWRDOGJ0aUNpRGc9PSIsImRldmljZVNpZ25hdHVyZSI6ImZoa1J1RGVOOHVsdnRGUmlUSmFPeXd4U2M0UjBYaUI1emk1R0NKZytGbll0THdhUXNKU05uN29RMjFRMDFISlIwdXMzVGliV1k5L3dQcERBRW9yTGlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTIzNzIxNzY6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWVN2RUVCa1pCYXhTOGpCVXhsRURtYkdsYm5TcC9Ia2JpZURhMEFCNkI4aSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUzNjAxNjQyLCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFZVyJ9' 
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
