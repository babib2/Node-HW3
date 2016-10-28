var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Enter your message');
rl.on('line', function(word) {
	
request('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20161028T142135Z.f19eb991fe4f6472.bccf8ce15ed0b7fdf70ae36742e96745edfd4a11&text='+word+'&lang=en-ru', function (error, response, html) {
if (!error && response.statusCode == 200) {
word = JSON.parse(html);
console.log(word.text);
}
});	


});

