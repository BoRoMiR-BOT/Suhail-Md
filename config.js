const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0742 874 298";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_54_06_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTExLFxuICAgICAgICA0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg2LFxuICAgICAgICAxODYsXG4gICAgICAgIDQyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgNSxcbiAgICAgICAgMjksXG4gICAgICAgIDM0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjksXG4gICAgICAgIDY3LFxuICAgICAgICA5NixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMyxcbiAgICAgICAgODcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM0LFxuICAgICAgICA0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgODQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI2LFxuICAgICAgICAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNixcbiAgICAgICAgMTE3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIyLFxuICAgICAgICA2MixcbiAgICAgICAgNzMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMixcbiAgICAgICAgOTUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExLFxuICAgICAgICAxMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDM3LFxuICAgICAgICA5NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzLFxuICAgICAgICA5MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzMsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA4OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDkzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA5OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrcUFVRi9aL1ZCRkJvOWtaRVI0YThBQ2Y4dUgwWFA4NFEvQmZFRkpKT0xBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQwNzQyODc0Mjk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxMUJBOTI4QzkzNkZGRDI1OThFRUY5MkI1NjFFQjhCRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg2MDM2NDBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0MDc0Mjg3NDI5OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzIzREM5MjJDRDg4OTVDMTUxOUQzOUFEM0RGNUI0M0RcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4NjAzNjQwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIng2VF9oa2ZWUVVpNDJpQjZWSkpCd1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGZmOGE1YWUtZTY5ZS00YjFjLTkwOTQtMjQ3MzU5ZDQ2MGQ2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc2LFxuICAgICAgMyxcbiAgICAgIDIxMixcbiAgICAgIDExMCxcbiAgICAgIDIzMyxcbiAgICAgIDE2NSxcbiAgICAgIDI0MSxcbiAgICAgIDQ1LFxuICAgICAgMzUsXG4gICAgICAxMzIsXG4gICAgICAxMzIsXG4gICAgICAxMTAsXG4gICAgICAxOTgsXG4gICAgICA2OCxcbiAgICAgIDE0NCxcbiAgICAgIDE3MCxcbiAgICAgIDIxNCxcbiAgICAgIDE0OSxcbiAgICAgIDI1NCxcbiAgICAgIDE4OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MSxcbiAgICAgIDY0LFxuICAgICAgMTAyLFxuICAgICAgMTE5LFxuICAgICAgMCxcbiAgICAgIDIwMCxcbiAgICAgIDE1MixcbiAgICAgIDE5NyxcbiAgICAgIDg3LFxuICAgICAgMjExLFxuICAgICAgMTk2LFxuICAgICAgODcsXG4gICAgICAyMDUsXG4gICAgICA1NSxcbiAgICAgIDEyNyxcbiAgICAgIDQxLFxuICAgICAgMTg2LFxuICAgICAgMTMzLFxuICAgICAgMTExLFxuICAgICAgNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYTlpWREIyTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDA3NDI4NzQyOTg6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0MTMwNDg3NzA0MzgyOTo0M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLimL5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJMmsrYllHRVBDZXY3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZTcFpLQWg1bnVEU3Ezd3YrNGZsWU9DRG00eDhZelZ2L0JZNm5SSTZ1VWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUHA3VlRnR2tlcjc1alVCVlFySk1GMUkxSWRkR21nQklOL25weCs2Sm9nUkJGMVlONXVRL1hjRHVCQlJTWFlpSTJjcGJOMjU3OUduTUNISGhJNWxrQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaHNwc0hVcmpWaGlUcHRsRFlSQy8zanFmOUFtZlAvNDBIWjZLbUZiMGNuczc1WjFlRlBhd3BvR2RsNFZGRzdhQno4QVNkY0hVWmpmRkt4Rk1hNm5CQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDA3NDI4NzQyOTg6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg2MDM2MzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDMVBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUMxUC5qc29uIjogIntcImtleURhdGFcIjpcIktRSUJWZmZmdkRYc05waXBxSG1lSEtuUnhSRGIvZm1FenVLQXI3L3laTWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcyNTg0NjAyNCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzE4NDc2ODIyMDk1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "BoRoMiR- BOT",
  ownername:process.env.OWNER_NAME|| "BoRoMiR",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
