const Discord = require('discord.js');
const bot = new Discord.Client();
var ignoreCase = require('ignore-case');

var d = 00, h = 00, m = 00;

bot.on('ready', () => {
    console.log('Go bitch');
bot.user.setPresence({ game: { name: 'Гуков на деревьх', type: 2} });
});

bot.on('message', msg => {
    if(ignoreCase.equals(msg.content, '``*собирает отряды гуков*``')){
    msg.hannel.send('``*высаживает войска на берега вьетнама*``');
    return;
}

    if(ignoreCase.equals(msg.content, '')){
    msg.channel.send('')
    return;
}
    if(ignoreCase.equals(msg.content, '')){
    msg.channel.send('')
    return;
}
    if(ignoreCase.equals(msg.content, '')){
    msg.channel.send('')
    return;
	}
});

bot.login(process.env.BOT_TOKEN);