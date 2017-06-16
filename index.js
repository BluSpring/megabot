const Discord = require('discord.js')
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == '>botinfo') {
        message.reply('Hey there! I am `MegaBot`! I was coded by `@IndoHQ Blu YT✓ᵛᵉʳᶦᶠᶦᵉᵈ` and coded using `Discord.js` and `Visual Studio Code` for the Mega Collab hosted by Dragons99990 and IndoHQ Blu YT!');
    
    }

    if(message.content == '>help') {
        message.reply('``Help``: `>help` shows this message. `>botinfo` shows bot info. `>collabyt` shows the current animators in the collab. `>parts` shows the collab parts that are taken or not taken. ')

    }

    if(message.content == '>play') {
        message.reply('I cannot do this. I have no idea why, but Node.JS would not let music work.')
    }

    if(message.content == '>collabyt') {
        message.reply('Here you go! Links: https://www.youtube.com/channel/UCfMwlVqas3DZIml24FXY7rw https://www.youtube.com/user/dragons99990 https://www.youtube.com/channel/UCpeDyTTNh2rGL8JR0mrlsGA https://www.youtube.com/channel/UCGcCoTDThq3sEGQRNeIzWbQ')
    }
	
	if(message.content == '>parts') {
		message.reply('`Part 1` is __MichTheElf__, `Part 2` is __MichTheElf__, `Part 3` is **<Untaken>**, `Part 4` is __nightmareMrmatt__, `Part 5` is __nightmareMrmatt__, `Part 6` is **<untaken>**, `Part 7` is __Dragons__, `Part 8` is **<untaken>**, `part 9` is __Blu__, `part 10` is **<untaken>**, `part 11` is **<untaken>**, `part 12` is __Dragons__, `part 13` is __Blu__ and `part 14` is **<untaken>**')
	}

// TODO: Replace <untaken> with the user name if taken
	
})

bot.on('ready', () => {
        bot.user.setStatus('online');
        bot.user.setGame('My prefix is >');
});

bot.login('MzI1MjE3ODY1Njc2MzU3NjM0.DCVCSg.IZJZvc899N40i_NwiWgVE6ufOFk', output);

function output(error, token) {
        if (error) {
                console.log(`There was an error logging in: ${error}`);
                return;
        } else
                console.log(`Logged in. Token: ${token}`);
}   

