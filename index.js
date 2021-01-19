const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');

let tasks = ["Создать колонию на Марсе", "Запустить спутник на орбиту Земли", "Построить самолет", "Слетать на Венеру и обратно", "Соединить два коробля на орбите Меркурия", "Ничего не делать"];

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
  if(message.content.startsWith(config.prefix + "help")){
    const embed = new Discord.MessageEmbed()
      .setColor('#00ff50')
      .setTitle('HELP')
      .addFields(
        { name: 'Tasks', value: config.prefix + 'randTask'}
      );
    message.channel.send(embed);
  } else if(message.content.startsWith(config.prefix + "randTask")){
    let rand = Math.floor(Math.random() * tasks.length);
    message.channel.send(tasks[rand]);
  }
});

client.login(config.token);
