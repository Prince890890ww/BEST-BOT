const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs")


module.exports = {
    config: {
        name: "fuck",
        aliases: ["fuck"],
        version: "1.2",
        author: "Siam",
        countDown: 5,
        role: 0,
        shortDescription: "tag a person to kick fuck/fuck fuck",
        longDescription: "",
        category: "funn",
        guide: "{pn}"
    },



    onStart: async function ({ message, event, args }) {
        const mention = Object.keys(event.mentions);
        if (mention.length == 0) return message.reply("Please mention Girl😋");
        else {
            const one = event.senderID, two = mention[0];
            bal(one, two).then(ptth => { message.reply({ body: "Fuck you baby🥵", attachment: fs.createReadStream(ptth) }) })
        }
    }


};

async function bal(one, two) {

    let avone = await jimp.read(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)
    avone.circle()
    let avtwo = await jimp.read(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)
    avtwo.circle()
    let pth = "ball.png"
    let img = await jimp.read("https://i.ibb.co/nbXY5d3/image.jpg")

    img.resize(1080, 1320).composite(avone.resize(170, 170), 200, 320).composite(avtwo.resize(170, 170), 610, 70);

    await img.writeAsync(pth)
    return pth
      }