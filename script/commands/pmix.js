module.exports.config = {
  name: "pxmix",
  version: "1.0.1",
  permssion: 0,
  credits: "123 motin",
  prefix: true,
  description: "Mix emoji",
  category: "image",
  usages: "[emoji1 | emoji2]",
  cooldowns: 0,
  dependencies: {
      "fs-extra": "",
      "request": ""
  }
};
module.exports.run = async ({ api, event,args }) => {  {
  const fs = require("fs-extra");
  const request = require("request");
const axios = require('axios')
  try {
const apis = await axios.get('https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json')
const n = apis.data.api
 const { threadID, messageID, senderID, body } = event; 

const content = args.join(" ").split("+").map(item => item = item.trim());
let emoji1 = content[0]
let emoji2 = content [1]
if (!args[0])
  return api.sendMessage("provide a link1 or link2", event.threadID, event.messageID);
  api.sendMessage("[🤍] 𝘐𝘮𝘢𝘨𝘦 𝘨𝘦𝘯𝘦𝘳𝘢𝘵𝘪𝘯𝘨,  𝘸𝘢𝘪𝘵...",event.threadID, event.messageID);

 var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/system/emix.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/biden.png"),event.messageID);
 return request(encodeURI(`https://kaiz-apis.gleeze.com/api/faceswap-v2?targetUrl=${emoji2}&sourceUrl=${emoji1}`)).pipe(fs.createWriteStream(__dirname+'/system/emix.png')).on('close',() => callback()); 
} catch (err){
api.sendMessage(`বাচ্চাদের দেওয়া জিনিস মিক্স করিনা আমি, করবো না `, event.threadID, event.messageID)
}   
}}
