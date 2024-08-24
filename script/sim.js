const axios = require("axios");

module.exports.config = {
  name: "sim",
  version: "1.0.1",
  role: 0,
  credits: "Lorenzl",
  description: "Chat with Sim",
  usages: "sim [yor message]",
  commandCategory: "Fun",
  cooldowns: 5,
};;

module.exports.run = async ({ api, event, args }) => {
  try {
    let message = args.join(" ");
    if (!message) {
      return api.sendMessage(`📝  | Please put message`, event.threadID, event.messageID);
    }

    const response = await axios.get(`https://lorenzo-rest-api.onrender.com/sim?ask=${message}`);
    const respond = response.data.respond;
    api.sendMessage(respond, event.threadID, event.messageID);
  } catch (error) {
    console.error("An error occurred:", error);
    api.sendMessage("Oops! Something went wrong.", event.threadID, event.messageID);
  }
};￼Enter
