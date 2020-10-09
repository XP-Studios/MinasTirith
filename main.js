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
		msg.channel.send('```.lotrfact```');
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
	
	if(msg.content === ".lotrfact"){
		var fact = Math.floor((Math.random() * 20) + 1);
		switch(fact){
			case 1:
				msg.channel.send('J.R.R. Tolkien, the author of Lord of the Rings didnt invent the Elvish languages to fit into the Lord of the Rings timeline, but wrote Lord of the Rings as a background history for the 15 different languages he created.');
				break;
			case 2:
				msg.channel.send('An Elvish language (Sindarin) J.R.R. Tolkien used for The Lord of the Rings was entirely independent from any other language, and as of 2008 contained some 25000 words.');
				break;
			case 3:
				msg.channel.send('The budget for the two The Hobbit movies is almost twice the budget of the entire Lord of the Rings Trilogy.');
				break;
			case 4:
				msg.channel.send('Tolkien considered Sam Gamgee the chief hero of The Lord of the Rings.');
				break;
			case 5:
				msg.channel.send('While filming Lord of the Rings in the mountainous New Zealand, Sean Bean refused a helicopter ride to a set that was high in the mountains due to his fear of flying. He instead hiked up to the set in his full Boromir armor every day that they shot up there.');
				break;
			case 6:
				msg.channel.send("In 1999, Russian author Kirill Eskov published a novel that retold The Lord of The Rings from Sauron's Perpective. In his version, he depicted Mordor as a peaceful country and Gandalf and Aragorn as evil. It is called The Last Ringbearer");
				break;
			case 7:
				msg.channel.send('Not surprisingly, Tolkiens son, Christopher Tolkien hates The Lord of the Rings movies.');
				break;
			case 8:
				msg.channel.send('Christopher Lee (Saruman) was the only person involved with the Lord of the Rings films to have actually met Tolkien.');
				break;
			case 9: 
				msg.channel.send('The Lord of the Rings novels were written as if they were translated to English, and the original common tongue of the books is called Westron.');
				break;
			case 10:
				msg.channel.send('Instead of The Lord of the Rings, Tolkien intended to write A New Hobbit about Bilbo who had spent all his riches from The Hobbit and wanted to go on another adventure. Tolkien remembered the powers of the ring from his first book and decided to write about that instead.');
				break;
			case 11:
				msg.channel.send("Frodo's original name was going to be Bingo Bolger-Baggins.");
				break;
			case 12:
				msg.channel.send('While filming The Lord of the Rings trilogy, Viggo Mortensen got so into character that during a conversation, Peter Jackson referred to him as Aragorn for over half an hour without him even realizing it.');
				break;
			case 13:
				msg.channel.send("JRR Tolkien's estate only received $62,500 for the Lord of the Rings film trilogy until a lawsuit was filed.");
				break;
			case 14:
				msg.channel.send("In The Lord of the Rings: The Return of the King (2003), they made a special effort to make sure that Sauron's tower being destroyed did not resemble the 2001 World Trade Center attack.");
				break;
			case 15:
				msg.channel.send('Around 10,000 prosthetic facial appliances, over 3,500 pairs of Hobbit feet, 2 500 foam body suits, 1,200 suits of armour, 2,000 weapons and 10,000 arrows were made for the Lord of The Rings trilogy.');
				break;
			case 16:
				msg.channel.send('The gravestone of J.R.R. Tolkien and his wife is inscribed with Luthien and Beren. They were two tragic legendary characters in The Lord of the Rings, who were madly in love.');
				break;
			case 17:
				msg.channel.send("In the scene where Frodo is stabbed by Shelob's stinger, Elijah Wood was actually stabbed with a prop one.");
				break;
			case 18:
				msg.channel.send("It was Christopher Lee's lifelong dream to play Gandalf in the LOTR movies. He auditioned for the role, but was given the part of Saruman instead because they thought he was too old to handle the fighting scenes.");
				break;
			case 19:
				msg.channel.send('The length of time from when Frodo first gets the ring to when he actually sets out on his adventure is 17 years, not a few weeks like the movie makes it seem.');
				break;
			case 20:
				msg.channel.send('In The Two Towers movie, Viggo Mortensen (Aragorn) kicks an orc helmet and screams to mourn the loss of the hobbits, but his scream was real because he broke his toe kicking the helmet.');
				break;
		}
	}
		
		
});
client.login('<This section contains the token, which must be kept private for security reasons>'); //keep at end
