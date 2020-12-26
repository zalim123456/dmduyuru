const chalk = require('chalk')
const moment = require('moment')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

var prefix= ayarlar.prefix;

module.exports = client => {
  console.log(`➢Sandra artık aktif!`);
  console.log(`➢komutlar yüklendi!`);
  console.log(`《Bot yapımcısı: ( discord.gg/qGWXFs8 | !SΛИDRΛ HOLİGΛИ#0001)》`);
  client.user.setStatus("online");
  //idle = boşta
  //dnd = rahatsız etmeyin
  //online = çevrimiçi
    var oyun = [
        "Kateria Guard "  + client.guilds.size +   " sunucuya ve "  + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +   "  kullanıcıya hizmet veriyor!",
        "!yardım | Türkiyenin en iyisi olmaya geliyoruz!"
    ];
  
    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], );
        }, 2 * 9000);
  
};
///discord.gg/qGWXFs8