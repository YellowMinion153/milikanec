const Discord = require('discord.js');
const bot = new Discord.Client();
var ignoreCase = require('ignore-case');

bot.on('ready', () => {
    console.log('Go bitch');
bot.user.setPresence({ game: { name: 'Вьетнам'} });
});

bot.on('message', msg => {
    if(ignoreCase.equals(msg.content, 'Заткнись')){
    msg.reply('Саткнись миликанец');
    return;
}

    if(ignoreCase.equals(msg.content, 'Гуки на деревьях')){
       msg.channel.send('****спрыгнул с дерева****');
       return;
    }

    if(ignoreCase.equals(msg.content, 'Хитрый гук')){
        msg.channel.send({
            embed:{
                image:{
                url: "https://cdn.discordapp.com/attachments/419427467795628037/423403907440574464/unknown.png",
                }
            }
        })
    }

    if(ignoreCase.equals(msg.content, 'g!heart')){
        if(msg.author.id === '207571677851287552'){
        msg.reply('Пошел нахер пидр');
        }else {
        msg.channel.send({
            embed:{
                image:{
                    url: "https://cdn.discordapp.com/attachments/363625385025601546/421985363557613568/heart.gif",
                }
            }
        })
        msg.reply('У гуков тоже есть сердце');}
});

bot.login(process.env.BOT_TOKEN);
