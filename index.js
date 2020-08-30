const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once(`ready`, () => {
	console.log(`Ready`);
});

client.on(`message`, message => {
if(message.content.includes (`${prefix}`)){
	//message.delete (10);
	message.channel.send('<@241268589095682049>').then(d_msg => { d_msg.delete({timeout: 10}); }).catch(console.error);
	console.log(`pinged`);
}
});

client.login(token);