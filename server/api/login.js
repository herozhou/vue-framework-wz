var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};
var admin = {
  role: ['admin'],
  token: 'admin',
  introduction: '我是超级管理员123',
  name: 'Super Admin',
  uid: '001'
}
// 增加用户接口
router.post('/loginbyemail', (req, res) => {
  jsonWrite(res, admin);
});
router.get('/loginbyemail', (req, res) => {
  jsonWrite(res, admin);
});
module.exports = router;
