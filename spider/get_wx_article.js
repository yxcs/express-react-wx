var cheerio = require('cheerio');
var request = require('request');
var async = require('async');

module.exports = {
    getWX: function(wx, callback) {
        // 'http://www.gsdata.cn/query/wx?q='+wx
        request({
          method: 'GET',
          uri: 'http://www.gsdata.cn/query/wx?q='+wx,
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36'
          }
        },function (error, response, body) {
            var $ = cheerio.load(body); 
            var url = $("#nickname").attr('href');
            if(!!url) {
              var wxname = url.split('=')[1];
                request({
                  method: 'GET',
                  uri: 'http://www.gsdata.cn/rank/toparc?wxname='+wxname+'&sort=-1',
                  headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36'
                  }
                },function (error, response, data) {
                  var lists = JSON.parse(data)
                  callback(lists)
              })
            }else {
                lists = {error: 1, data:[]}
                callback(lists)
            }
        })
    }
}