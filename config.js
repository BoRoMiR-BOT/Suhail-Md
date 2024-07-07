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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0751 645 671";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_39_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDY3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg2LFxuICAgICAgICA3MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMyLFxuICAgICAgICA5MCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAxNCxcbiAgICAgICAgODgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQyLFxuICAgICAgICA0NixcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgsXG4gICAgICAgIDI1LFxuICAgICAgICAzOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg4LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDcxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTksXG4gICAgICAgIDQzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTczLFxuICAgICAgICAxNzEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUyLFxuICAgICAgICA1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICA4MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDc0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjksXG4gICAgICAgIDMwLFxuICAgICAgICA2MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk2LFxuICAgICAgICA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkYjR3bnNCMGhCWnJHZVZDRVFIc0NHQkI5amQ2aGxnT1Q5bHlUMlVOY1NJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQwNzUxNjQ1NjcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFNkM3QjVFOEMzQTQ0OTRBMzZFOTQ5NDEyRDU2MkIxOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzNDg3NzRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0MDc1MTY0NTY3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjM3MzM4N0E4NUU4NTZBNDU0QjYxMkM2OUIzMjZEMDBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMzQ4Nzc1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZzUXJWeDFZUWRtUnVHbTgwcERYSEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTkxNDNkMDAtMjZlYi00ZGM5LWI4MzgtMjg4NzUzMTZkNGQ2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDIyMCxcbiAgICAgIDE5OCxcbiAgICAgIDEyNyxcbiAgICAgIDE3MixcbiAgICAgIDIzNCxcbiAgICAgIDIwOSxcbiAgICAgIDE2MixcbiAgICAgIDE2OCxcbiAgICAgIDkzLFxuICAgICAgNjUsXG4gICAgICAzMCxcbiAgICAgIDEzNCxcbiAgICAgIDU3LFxuICAgICAgMjIsXG4gICAgICA5LFxuICAgICAgMTU1LFxuICAgICAgMTk0LFxuICAgICAgMjI4LFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgxLFxuICAgICAgMTY4LFxuICAgICAgNTgsXG4gICAgICAzOSxcbiAgICAgIDUzLFxuICAgICAgMjQ4LFxuICAgICAgNDksXG4gICAgICA2NixcbiAgICAgIDQwLFxuICAgICAgMjIsXG4gICAgICA3NCxcbiAgICAgIDMzLFxuICAgICAgMjE3LFxuICAgICAgNzUsXG4gICAgICA1NyxcbiAgICAgIDIzMCxcbiAgICAgIDE2LFxuICAgICAgMSxcbiAgICAgIDIxMSxcbiAgICAgIDE2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLNTZDQTNIQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDA3NTE2NDU2NzE6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCeXRlR2hvc3RcIixcbiAgICBcImxpZFwiOiBcIjUxMzYzOTgzNjc5NTUyOjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0llRTB0Y0JFT0hncWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUW1DSDdJdVVtM2t4c3U4U0o5alMySlRXYTRwYnVHNldLYWxMaXU1dVV6Zz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoVG1jT2NhVWJCMWdIaUtvdC9TNWVPSVlsRlBmMlNTY2Fyank5cTV5QkNKTHF4TWtkTDlCMXNpWTdnZW05Q3l5VkRMY25SeWl0L1ZIL0FDSWROY3JBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpc3FNK01zUFRMQVVEazhyVXlLZmV3TmN0SUxDdUxSNmw4ZW4rWWhMV0RqNUpwc2FjOXp0cFZycE93U0gvV1h0NzJGcnU0dmlqVyszQW1qcFMrZ3RDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0MDc1MTY0NTY3MToxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzQ4NzcyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUG1NXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQbU0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpMW1SWktUTFYyK2Zic2N2S0tVeFUvYlBDQWxpdXdzcEF4K1NwY29EN2lRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ1MjIzMTY4NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMzQ4Nzc1MDcyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ByteGhost",
  ownername:process.env.OWNER_NAME|| "ByteGhost",


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
