const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "munnab",
    aliases: [],
    author: "kshitiz",// idea and half code stolen from mirai coded by Rickiel haha
    version: "2.0",
    cooldowns: 5,
    role: 0,
    shortDescription: {
      en: ""
    },
    longDescription: {
      en: "get bot owner info"
    },
    category: "munnab",
    guide: {
      en: "{p}{n}"
    }
  },
  onStart: async function ({ api, event }) {
      try {
        const loadingMessage = "Loading owner information...";
        await api.sendMessage(loadingMessage, event.threadID);

        const ownerInfo = {
          name: '𝗦𝗶𝗮𝗺 𝗜𝘀𝗹𝗮𝗺',
          gender: '𝑴𝒂𝒍𝒆',
          hobby: '𝗵𝗮𝗰𝗸𝗲𝗿',
          relationship: '𝗦𝗶𝗻𝗴𝗹𝗲',
          facebookLink: 'https://www.facebook.com/profile.php?id=100089118994023',
          bio: '𝗙𝘂𝗰𝗸 𝗮𝘁𝘁𝗶𝘁𝘂𝗱𝗲'
        };

        const videoUrl = 'https://imgur.com/yDpmGfb.mp4';
        const tmpFolderPath = path.join(__dirname, 'tmp');

        if (!fs.existsSync(tmpFolderPath)) {
          fs.mkdirSync(tmpFolderPath);
        }

        const videoResponse = await axios.get(videoUrl, { responseType: 'arraybuffer' });
        const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

        fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

        const response = `
          𝗼𝘄𝗻𝗲𝗿 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻:
          Name: ${ownerInfo.name}
          Gender: ${ownerInfo.gender}
          Hobby: ${ownerInfo.hobby}
          Relationship: ${ownerInfo.relationship}
          Facebook: ${ownerInfo.facebookLink}
          Status: ${ownerInfo.bio}
        `;

        await api.sendMessage({
          body: response,
          attachment: fs.createReadStream(videoPath)
        }, event.threadID);
      } catch (error) {
        console.error('Error in munnab command:', error);
        api.sendMessage('An error occurred while processing the command.', event.threadID);
      }
    },
    onChat: async function({ api, event }) {
      try {
        const lowerCaseBody = event.body.toLowerCase();
        
        if (lowerCaseBody === "munnab" || lowerCaseBody.startsWith("{p}munnab")) {
          await this.onStart({ api, event });
        }
      } catch (error) {
        console.error('Error in onChat function:', error);
      }
    }
  };

/*

To add new video 
1. upload your video on drive
2. after uploading change the video acces to anyone with the link 
3. copy video link
4. go to direct drive link convert website
5. paste that link there and copy direct link
6. paste that link in code 

*/