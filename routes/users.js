var express = require('express');
var router = express.Router();
var wx =require('../spider/get_wx_article');

/* GET users listing. */
router.post('/wx', function(req, res, next) {
  var params = req.body.wxname || 'mcyhxbb';
  wx.getWX(params, function(lists) {
    res.json(lists)
  });
  
});

module.exports = router;
