module.exports = {
	config: {
		name: "xaros",
    aliases: ["murgi"],
		version: "1.0",
		author: "Siam",
		role: 0,
		category: "Fun-cmd",
    shortDescription: " Murgi dholai cmd",
		longDescription: "",
		guide: {
			vi: "not Available",
			en: "{p} chik"
		} 
	},

  onStart: async function ({ api, event, userData, args }) {
      var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("আপনার xaros সন্তান কে Mantion করুন 😌", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = []; 
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("বাদ্ধ হয়ে তোর জন্ম কাহিনি টা বলতেই হচ্ছে 😌");
setTimeout(() => {a({body: "কিভাবে বলি রে এত চরম সত্য কথা তুই দিনকাল খারাপ হয়ে জাচ্ছিস তাই আমাকে বাদ্ধ হয়ে বলতে হচ্ছে আসলে বর্তমান যে তোর বাপ ওটা তোর আসল বাপ না পুরা কাহিনি টা সোন 😌...১৫ বছর আগে তোর মার সাথে আমার পতিতালয় স্টেশনে দেখা তোর মা সবাইকে ১০ টাকা করে ২০ মিনিট চুদতে দিচ্ছিলো তোর মা এতই সুন্দরি ছিলো যে আমি লোব সামলাতে পারলামনা লাস্টে আমার বন্ধু Munna,Najmul,Redoy রে কল করে ডেকে আনলাম then তোর মাকে ২০ টাকা না ৩ জন মিলে ১০ হাজার টাকা দিয়ে চুদেছিলাম অনেক সুখ পাইছিলাম রে তোর মাকে চুদে।  এরপর কন্ডম দুর্ঘটার ফলে তুই তোর মার পেটে আইলি এই নিয়ে তোর মার পরিবারে চিন্তা বাচ্চা এখন কি করে তখন তোর নানু এই বিষয়টা ঢাকার জন্য তারাতারি বিয়ে দিছে আর তোর মা বাসর রাতেই তোর সত বাবার সাথে সেক্স করছে জাতে তোর সৎ বাবা বুজতে না পারে তোর মার পেটে আমাদের জারস সন্তান আর সেই জারস সন্তান তুই রে আসলে আমাকে একপ্রকার বাদ্ধ হয়ে বলা লাগতেছে কেনো জানিস কারন তুই আমাদের সাথে লাগতে আসছিলি আমাদের ভুলের জন্য তোর জন্ম আমাদের খমা করে দিসরে" + " " + name, mentions: arraytag})}, 2000);
  }
}