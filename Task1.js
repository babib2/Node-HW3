var request = require('request');
var cheerio = require('cheerio');
request('http://mail.ru/', function (error, response, html) {
if (!error && response.statusCode == 200) {
var $ = cheerio.load(html);
$('.news__list__item_simple').each(function(i, element){
 var cols = $(this).find('span');

console.dir(
cols.eq(0).text()
+ " " + cols.eq(1).text()
+ " " + cols.eq(2).text()
);
});
}
});