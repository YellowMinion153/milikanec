const Discord = require('discord.js');
const bot = new Discord.Client();
var ignoreCase = require('ignore-case');

var d = 00, h = 00, m = 00;

bot.on('ready', () => {
    console.log('Go bitch');
bot.user.setPresence({ game: { name: 'Вьетнам', type: 1} });
});

bot.on('message', msg => {
    if(ignoreCase.equals(msg.content, 'Заткнись')){
    msg.reply('Саткнись миликанец');
    return;
}

    if(ignoreCase.equals(msg.content, 'Гуки на деревьях')){
       msg.channel.send('`*спрыгнул с дерева*`');
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

    if(ignoreCase.equals(msg.content, 'Солнечный гук')){
        msg.channel.send({
            embed:{
                image:{
                url: "https://cdn.discordapp.com/attachments/423241965325254657/423591361292533770/421956339351420928.png",
                }
            }
        })
    };

    if(ignoreCase.equals(msg.content, 'g!heart')){
        if(msg.author.id === '207571677851287552'){
        msg.reply('Пошел нахер пидр');
            return;
        }
        }
    
    if(ignoreCase.equals(msg.content, 'g!heart')){
        msg.channel.send({
            embed: {
                image: {
                    url: "https://cdn.discordapp.com/attachments/363625385025601546/421985363557613568/heart.gif",
                }
            }
        });
        msg.reply('У гуков тоже есть сердце');
    }
        return;
});

bot.login(process.env.BOT_TOKEN);

updateInOneMinute = function(){
    m = m + 1;
    if(m >= 60){
        h = h + 1;
        m = 0;
    }

    if(h >= 24){
        d = d + 1;
        h = 0;
        console.log('Updating hours....');
    }

    formateTime();
    setTimeout(updateInOneMinute, 60000);
}

formateTime = function(){

    var formattedM = '', formattedH = '', formattedD = '';

    if(m < 10)
        formattedM = '0' + m;
    else
        formattedM = m;

    if(h < 10)
        formattedH = '0' + h;
    else
        formattedH = h;

    if(d < 10)
        formattedD = '0' + d;
    else
        formattedD = d;
    bot.user.setPresence({ game: { name: 'Вьетнам ' + formattedD + ':' + formattedH + ':' + formattedM, type: 1 } });
}

logTime = function () {
    console.log('M:' + m);
    console.log('H:' + h);
    console.log('D:' + d);
}

getRandomInt = function(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setTimeout(updateInOneMinute, 60000);