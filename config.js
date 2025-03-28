

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1169613006179668090", ""], 
  mongodbUri : "mongodb+srv://QXMX5:<db_password>@discordbot.hj0h9fw.mongodb.net/?retryWrites=true&w=majority&appName=DiscordBot",
  spotifyClientId : "021408395ac8482ea680a0a9176d4030",
  spotifyClientSecret : "339f6da30ba9486abf0f4e5f910e27a7",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "GlaceYT",
      password: "glaceyt",
      host: "193.226.78.187",
      port:  9372,
      secure: false
    }
  ]
}
