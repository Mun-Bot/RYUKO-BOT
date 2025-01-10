module.exports.config = {
    name: "imgur",
    version: "1.0.0",
    permission: 0,
    credits: "twst",
    prefix: true,
    description: "test",
    category: "test",
    usages: "[reply]",
    cooldowns: 5,
	dependencies: {
  "axios": "",}
};

module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule['axios'];  
var tanvir143 = event.messageReply.attachments[0].url || args.join(" ");
	if(!tanvir143) return api.sendMessage('TX test', event.threadID, event.messageID)
const res = await axios.get(`https://kaiz-apis.gleeze.com/api/imgur?url=${encodeURIComponent(tanvir143)}`);    
var tanvir = res.data.uploaded.image;
    return api.sendMessage(`${tanvir}`, event.threadID, event.messageID);
	
}
