const Discord = require('discord.js');  //discord api library
const client = new Discord.Client();
const auth = require('./auth.json');  //authentication file
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  
	if (msg.content === '.gandalf the white'){
		msg.channel.send('Gandalf the Fool!');
	}
	
	if (msg.content === '.help'){
		msg.channel.send('```.help```');
		msg.channel.send('```.gandalf the white```');
		msg.channel.send('```.bookquote```');
		msg.channel.send('```.insult```');
	}
	
	if (msg.content === '.bookquote'){
		var bookquote = Math.floor((Math.random() * 4) + 1);
		switch(bookquote){
			case 1:
				msg.channel.send('So do all who live to see such times, but that is not for them to decide. All we have to decide is what to do with the time that is given to us. -Gandalf');
				break;
			case 2:
				msg.channel.send('Many that live deserve death. And some that die deserve life. Can you give it to them? Then do not be too eager to deal out death in judgement. -Gandalf');
				break;
			case 3:
				msg.channel.send('There’s some good in this world, Mr. Frodo… and it’s worth fighting for. -Samwise Gamgee');
				break;
			case 4:
				msg.channel.send("I am old, Gandalf. I don't look it, but I am beginning to feel it in my heart of hearts. Well-preserved indeed! Why, I feel all thin, sort of stretched, if you know what I mean: like butter that has been scraped over too much bread. That can't be right. I need a change, or something. - Bilbo Baggins");
				break;
			}
	}
	
	if(msg.content === '.insult'){
		var insult = Math.floor((Math.random() * 12) + 1);
		switch(insult){
			case 1:
				msg.channel.send('Begone, foul dwimmerlaik, lord of carrion!');
				break;
			case 2:
				msg.channel.send('Murderers and elf-friends!');
				break;
			case 3:
				msg.channel.send('I would cut off your head, beard and all... if it stood but a little higher from the ground.')
				break;
			case 4:
				msg.channel.send('Dotard!');
				break;
			case 5:
				msg.channel.send('Fool of a Took!');
				break;
			case 6:
				msg.channel.send('Miserable slinker!');
				break;
			case 7:
				msg.channel.send('You dirty thieving ruffians! (accent by swinging an umbrella at your target)');
				break;
			case 8:
				msg.channel.send('I like less than half of you half as well as you deserve!');
				break;
			case 9: 
				msg.channel.send('Thou jail-crow of Mandos!');
				break;
			case 10:
				msg.channel.send('Try but once more to usurp my place and the love of my father, and maybe it will rid the Noldor of one who seeks to be the master of thralls!');
				break;
			case 11:
				msg.channel.send('A witless worm have you become. Therefore be silent, and keep your forked tongue behind your teeth. I have not passed through fire and death to bandy crooked words with a serving-man till the lightning falls.');
				break;
			case 12:
				msg.channel.send('Knock your head against these doors, and if that does not shatter them, and I am allowed a little peace from foolish questions, I will try to find the opening words.');
				break;

		}
	}
		
});
client.login('<This section contains the token, which must be kept private for security reasons>'); //keep at end
