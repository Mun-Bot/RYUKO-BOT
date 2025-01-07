module.exports.config = {
    name: "2all",
    version: "1.0.0",
    permission: 1,
    category: "user",
    prefix: true,
    usages: "@mention",
    cooldowns: 20,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("T mention", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Try");
setTimeout(() => {a({body: "❎" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() =>"Unexpected")} , 3010);



  
  }
