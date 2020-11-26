const Discord = require('discord.js');  //discord api library
const client = new Discord.Client();
const auth = require('./auth.json');  //authentication file
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', msg => {

	if(msg.content === '>>leader usa'){
		msg.channel.send ('President Donald Trump (Republican), Joe Biden (Democrat) is the President-elect');
	}
	
	if(msg.content === '>>leader canada'){
		msg.channel.send ('Prime Minister Justin Trudeau (Liberal)');
	}
	
	if(msg.content === '>>leader mexico'){
		msg.channel.send ('President Andrés Manuel López Obrador (MORENA)');
	}
	
	if(msg.content === '>>leader panama'){
		msg.channel.send ('President Laurentino Cortizo (PRD)');
	}
	
	if(msg.content === '>>leader haiti'){
		msg.channel.send ('President Jovenel Moïse (Tèt Kale)');
	}
	
	if(msg.content === '>>leader jamaica'){
		msg.channel.send ('Prime Minister Andrew Holness (Labour)');
	}
	
	if(msg.content === '>>leader peru'){
		msg.channel.send ("President Francisco Sagasti (Purple)");
	}
	
	if(msg.content === '>>leader dominican republic'){
		msg.channel.send ('President Luis Abinader (Modern Revolutionary)');
	}
	
	if(msg.content === '>>leader cuba'){
		msg.channel.send ('First-Secretary Raul Castro (Communist)');
	}
	
	if(msg.content === '>>leader el salvador'){
		msg.channel.send ('President Nayib Bukele (GANA)');
	}
	

});
client.login('NzgwMTM2MDUzNTMyMTMxMzg4.X7qsUQ.3Rruy4FtOJoGRL2k2VL7azGxq-M'); //keep at end
