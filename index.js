const express = require("express")
const app = express()
const { MessageEmbed } = require("discord.js")
const fetch = require("node-fetch")

app.get("/", (req, res) => {
 res.send("Im using Grootie Api!")
});

app.listen(3000, () => {
 console.log("Website Running!");
}) ;


const Discord = require('discord.js');
const client = new Discord.Client({
  intents: [
    'GUILDS',
    'GUILD_MESSAGES'
  ]
});
 

client.once('ready', async () => {
  console.log(`Logged On As ${client.user.tag}!`);
  client.user.setActivity(`Im using grootie api! | https://api.grootie.ml`, { type: 'WATCHING' });
});
  const prefix = 't.'; //Put Your Prefix.

  
client.on('messageCreate', async (message) => {


  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  const meme = await fetch("https://api.grootie.ml/other/memes")
 
.then(r => r.json())

  
  if(command === 'meme') {
    
const memee = new MessageEmbed()
    .setTitle(meme.title)
    .setDescription(meme.url)
    .setImage(meme.image)
    .setFooter(`${meme.upvotes} upvotes and ${meme.comments} comments`)


      
    message.channel.send({ embeds: [memee] })
    //Or You Can Use messsage.reply
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();
  const fact = await fetch("https://api.grootie.ml/other/facts")
  .then(r => r.json())

  if(command === 'fact') {

    const facte = new MessageEmbed()
    .setTitle('Here is your fact')
    .setDescription(fact.message)
    message.channel.send({ embeds: [facte] })
  }

});

//NOTW THAT COMMAND BELOW ARE NSFW, PLEASE ADD AN NSFW CHANNEL ONLY SYSTEM SINCE THIS IS JUST AN SHOWCASE ON HOW TO USE THE API AND DOESN'T HAVE ANY OTHER SYSTEMS

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const rhgif = await fetch("https://api.grootie.ml/nsfw/anime/rhgif")
.then(r => r.json())

  if(command ==='randomnsfwgif'){
    const rhgife = new MessageEmbed()
    .setTitle('Here is your random nsfw gif')
    .setImage(rhgif.url)
    message.channel.send({ embeds: [rhgife] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const panties = await fetch("https://api.grootie.ml/nsfw/anime/panties")
.then(r => r.json())

  if(command ==='panties'){
    const pantiese = new MessageEmbed()
    .setTitle('Here is your panties')
    .setImage(panties.url)
    message.channel.send({ embeds: [pantiese] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const paizuri = await fetch("https://api.grootie.ml/nsfw/anime/paizuri")
.then(r => r.json())

  if(command ==='paizuri'){
    const paizurie = new MessageEmbed()
    .setTitle('Here is your paizuri')
    .setImage(paizuri.url)
    message.channel.send({ embeds: [paizurie] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const netorare = await fetch("https://api.grootie.ml/nsfw/anime/netorare")
.then(r => r.json())

  if(command ==='netorare'){
    const netoraree = new MessageEmbed()
    .setTitle('Here is your netorare')
    .setImage(netorare.url)
    message.channel.send({ embeds: [netoraree] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const maid = await fetch("https://api.grootie.ml/nsfw/anime/maid")
.then(r => r.json())

  if(command ==='maid'){
    const maide = new MessageEmbed()
    .setTitle('Here is your random nsfw gif')
    .setImage(maid.url)
    message.channel.send({ embeds: [maide] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const milf = await fetch("https://api.grootie.ml/nsfw/anime/milf")
.then(r => r.json())

  if(command ==='milf'){
    const milfe = new MessageEmbed()
    .setTitle('Here is your milf')
    .setImage(milf.url)
    message.channel.send({ embeds: [milfe] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const hentaiass = await fetch("https://api.grootie.ml/nsfw/anime/hentaiass")
.then(r => r.json())

  if(command ==='hentaiass'){
    const hentaiasse = new MessageEmbed()
    .setTitle('Here is your hentai ass')
    .setImage(hentaiass.url)
    message.channel.send({ embeds: [hentaiasse] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const hentai = await fetch("https://api.grootie.ml/nsfw/anime/hentai")
.then(r => r.json())

  if(command ==='hentai'){
    const hentaie = new MessageEmbed()
    .setTitle('Here is your hentai')
    .setImage(hentai.url)
    message.channel.send({ embeds: [hentaie] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const glasses = await fetch("https://api.grootie.ml/nsfw/anime/glasses")
.then(r => r.json())

  if(command ==='glasses'){
    const glassese = new MessageEmbed()
    .setTitle('Here is your glasses')
    .setImage(glasses.url)
    message.channel.send({ embeds: [glassese] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const feet = await fetch("https://api.grootie.ml/nsfw/anime/feet")
.then(r => r.json())

  if(command ==='feet'){
    const feete = new MessageEmbed()
    .setTitle('Here is your feet')
    .setImage(feet.url)
    message.channel.send({ embeds: [feete] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const doujin = await fetch("https://api.grootie.ml/nsfw/anime/doujin")
.then(r => r.json())

  if(command ==='doujin'){
    const doujine = new MessageEmbed()
    .setTitle('Here is your doujin')
    .setImage(doujin.url)
    message.channel.send({ embeds: [doujine] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const boobs = await fetch("https://api.grootie.ml/nsfw/real/boobs")
.then(r => r.json())

  if(command ==='boobs'){
    const boobse = new MessageEmbed()
    .setTitle('Here is your boobs')
    .setImage(boobs.url)
    message.channel.send({ embeds: [boobse] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const anal = await fetch("https://api.grootie.ml/nsfw/real/anal")
.then(r => r.json())

  if(command ==='anal'){
    const anale = new MessageEmbed()
    .setTitle('Here is your anal')
    .setImage(anal.url)
    message.channel.send({ embeds: [anale] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const blowjob = await fetch("https://api.grootie.ml/nsfw/anime/blowjob")
.then(r => r.json())

  if(command ==='blowjob'){
    const blowjobe = new MessageEmbed()
    .setTitle('Here is your blowjob')
    .setImage(blowjob.url)
    message.channel.send({ embeds: [blowjobe] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const trap = await fetch("https://api.grootie.ml/nsfw/anime/trap")
.then(r => r.json())

  if(command ==='trap'){
    const trape = new MessageEmbed()
    .setTitle('Here is your trap')
    .setImage(trap.url)
    message.channel.send({ embeds: [trape] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const neko = await fetch("https://api.grootie.ml/nsfw/anime/neko")
.then(r => r.json())

  if(command ==='neko'){
    const nekoe = new MessageEmbed()
    .setTitle('Here is your neko')
    .setImage(neko.url)
    message.channel.send({ embeds: [nekoe] })
  }
});

client.on('messageCreate', async (message) => {
  

  const args = message.content.slice(prefix.length).trim().split(/ + /g);
const command = args.shift().toLowerCase();

  
  const waifu = await fetch("https://api.grootie.ml/nsfw/anime/waifu")
.then(r => r.json())

  if(command ==='waifu'){
    const waifue = new MessageEmbed()
    .setTitle('Here is your waifu')
    .setImage(waifu.url)
    message.channel.send({ embeds: [waifue] })
  }
});

//Go To Secret Tab And Make A New Secret Named "TOKEN" and Put The Bot's Token In The Value Then Hit Enter.
client.login(process.env.TOKEN).catch((err) => {
  console.log(`The Bot's Token Is Empty Or Invalid!`);
});
