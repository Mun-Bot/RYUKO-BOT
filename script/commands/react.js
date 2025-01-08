module.exports.config = {
	name: "react",
	version: "1.0.0",
	permission: 0,
	credits: "ryuko",
	description: "react posts by id",
  prefix: true,
  premium: false,
	category: "admin",
	usages: "[postID] <reaction type>: (unlike/like/love/heart/haha/wow/sad/angry)",
	cooldowns: 1
};


module.exports.run = async ({ api, event, args }) => {
  const allType = "unlike/like/love/heart/haha/wow/sad/angry".split("/");
  const postID = args[0];
  const type = args[1];
  if (!postID || !type) return global.utils.throwError(this.config.name, event.threadID, event.messageID);
  if (!allType.includes(type)) return api.sendMessage(`এরকম রিয়েক্ট নেই, ব্যবহার করুন: ${allType.join("/")}`, event.threadID, event.messageID);
  api.setPostReaction(Number(postID), type, (err, data) => {
    if (err) return api.sendMessage("something wrong,  please check PostID public or custom.", event.threadID, event.messageID);
    api.sendMessage(`Reacted [ ${type} ] To Your Post.\n\n PostID ${postID}`, event.threadID, event.messageID);
  });
};
