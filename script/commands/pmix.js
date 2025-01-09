module.exports.config = {
    name: "pmix",
    permission: 0,
    credits: "Tanvir143",
    author: " Tanvir143",
    category: "image",
    prefix: true,
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
};
module.exports.run = async ({ api, event,args }) => {  {
    const fs = require("fs-extra");
    const request = require("request");
	 const { threadID, messageID, senderID, body } = event; 
try {
const content = args.join(" ").split("1").map(item => item = item.trim());
let imgLink1 = content[0]
let imgLink2 = content [1]
if (!args[0])
    return api.sendMessage("Use "+global.config.PREFIX+this.config.name+" "+this.config.usages, event.threadID, event.messageID);

	 var callback = () => api.sendMessage({body:`[🤍] 𝘚𝘵𝘢𝘺 𝘞𝘪𝘵𝘩 𝘛𝘢𝘯𝘷𝘪𝘳 𝘉𝘰𝘵 🥀`,attachment: fs.createReadStream(__dirname + "/system/143.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/system/b143.png"),event.messageID);
	 return request(encodeURI(`https://kaiz-apis.gleeze.com/api/faceswap-v2?targetUrl=${imgLink1}&sourceUrl=${imgLink2}`)).pipe(fs.createWriteStream(__dirname+'/system/143.png')).on('close',() => callback()); 
} catch (err){
return api.sendMessage("error", event.threadID, event.messageID)
}   
}} //FIXED BY TANVIR-TAMIM-@143
