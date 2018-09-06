var db = require('../db');
var express = require('express');
var router = express.Router();
//var mysql = require('mysql');
var $sql = require('../sqlMap');
var multer = require('multer');
var conn = db.conn;
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'static/uploads');
  },
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split(".");
    cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})

var upload = multer({ storage: storage })

// 连接数据库
//var conn = mysql.createConnection(models.mysql);

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

// 增加用户接口
router.post('/addUser', (req, res) => {
/*  var sql = $sql.user.add;
  var params = req.body;
  console.log(params);
   db.selectAll()
  conn.query(sql, [params.username, params.age], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })*/
});
router.get('/getUser', (req, res) => {
  var sql = $sql.user.all;
  conn.query(sql, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
router.get('/', (req, res) => {
  var sql = $sql.user.all;
  conn.query(sql, ['1'], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
router.post('/uploadFile', upload.array('logo', 2), (req, res) => {
  // console.log("dddd");
  // console.log(req.files[0]); // 上传的文件信息
  let response22 = {
    message: 'File uploaded successfully',
    filename: req.files[0].filename,
    path: req.files[0].path
  };

  res.end(JSON.stringify(response22));
});
module.exports = router;
