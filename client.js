const SteamUser = require("steam-user");
const client = new SteamUser();
const {red, green, yellow} = require('colors')
const config = require('./config.json')
const logOnOptions = {
    accountName: config.user,
    password: config.pass,
    twoFactorCode: 'PX2QV',
};

client.logOn(logOnOptions);

client.on("loggedOn", () => {
    console.log(yellow(`Logged as : ${config.user}`));
    client.setPersona(SteamUser.EPersonaState.Online);
    try {
        client.gamesPlayed(["Made By Txreq",730]); 
        console.log(green("Hourboost started !"));
    } catch (error) {
        console.log(red(`Error while starting hourboost :(`));
    }
     
});