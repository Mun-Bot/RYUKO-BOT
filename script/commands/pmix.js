module.exports.config = {
    name: "xmix",
    version: "1.0.2",
    permission: 2,
    credits: "Deku/Prince",
    description: "Mix emoji",
    category: "image",
    prefix: true,
    usages: "mix [emoji1 + emoji2]",
    cooldowns: 0,
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
const content = args.join(" ").split("+").map(item => item = item.trim());
let emoji1 = content[0]
let emoji2 = content [1]
if (!args[0])
    return api.sendMessage("ভুল সিস্টেম \nUse "+global.config.PREFIX+this.config.name+" "+this.config.usages, event.threadID, event.messageID);

	 var callback = () => api.sendMessage({body:`◆---------------------------------◆\n[🩵] THANKS FOR USING TANVIR-143 BOT.\n◆---------------------------------◆`,attachment: fs.createReadStream(__dirname + "/cache/biden.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/biden.png"),event.messageID);
	 return request(encodeURI(`https://kaiz-apis.gleeze.com/api/faceswap-v2?targetUrl=${emoji1}&sourceUrl=${emoji2}`)).pipe(fs.createWriteStream(__dirname+'/cache/biden.png')).on('close',() => callback()); 
} catch (err){
return api.sendMessage("Can't mix "+emoji1+" and "+emoji2, event.threadID, event.messageID)
}   
}} //FIXED BY TANVIR-TAMIM-@143
