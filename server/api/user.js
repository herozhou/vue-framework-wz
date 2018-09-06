var db = require('../db');
var express = require('express');
var router = express.Router();
var $sql = require('../sqlMap');
var conn = db.conn;
var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '0',
      msg: '操作失败'
    });
  } else {
    /*   ret.push({
      code: '1',
      msg: '操作成功',
    })*/
    res.json(ret);
  }
};

// 增加用户接口
router.post('/addUser', (req, res) => {
  var sql = $sql.user.add;
  var params = req.body;
  console.log(params);
  conn.query(sql, [params.username, params.age], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
router.get('/getUser', (req, res) => {
  // console.info("到了")
  var sql = $sql.user.all;

  //console.log("到了");
/*  conn.query(sql, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })*/
});

router.get('/', (req, res) => {
  // console.info("到了1")
  var sql = $sql.user.all;

  // console.log("到了");
/*  conn.query(sql, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })*/
});

router.post('/getCarouserAll', (req, res) => {
  console.info("getCarouserAll")
  // var sql = $sql.user.getUserByid;
  db.selectAll($sql.user.getCarouserAll, function(err, result) {
      console.info(err);
    if (err) {
      console.log(err);
    }
    console.info(result);
    if (result) {

      jsonWrite(res, result);
    }
  });
  //jsonWrite(res, userMap.dataCarouser)
  /*  conn.query(sql, function(err, result) {
        if (err) {
          console.log(err);
        }
        if (result) {
          jsonWrite(res, result);
        }
      })*/
});
router.post('/getNavigation', (req, res) => {
  console.info("到了1")
  // var sql = $sql.user.getUserByid;

  console.log("到了");
  jsonWrite(res, userMap.dataNavigation)
  /*  conn.query(sql, function(err, result) {
          if (err) {
            console.log(err);
          }
          if (result) {
            jsonWrite(res, result);
          }
        })*/
});

router.get('/info', (req, res) => {
  console.info("到了1")
  // var sql = $sql.user.getUserByid;

  console.log("到了");
  res.json(userMap.admin);
  //jsonWrite(res, userMap.admin)
/*  conn.query(sql, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })*/
});
router.post('/addCarousel', (req, res) => {
  //console.log(req);

  let formItem = req.body.formItem;

  delete formItem['id'];
    console.info("addCarousel");
  console.info(formItem);
  //  console.info( formItem.splice('id', 1));
  db.insertData('carouser', formItem);
  console.log("到了");

  jsonWrite(res, req.body)
/*  conn.query(sql, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })*/
});

const userMap = {
  admin: {
    role: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    name: 'Super Admin',
    uid: '001'
  },
  editor: {
    role: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    name: 'Normal Editor',
    uid: '002'

  },
  developer: {
    role: ['develop'],
    token: 'develop',
    introduction: '我是开发',
    name: '工程师小王',
    uid: '003'
  },
  dataCarouser: [
    {
      id: 1,
      switch: '0',
      name: '轮播图1',
      url: '../static/img/1535254224057.png',
      description: '北京市朝阳区芍药居',
      weights: 1

    },
    {
      id: 2,
      switch: '1',
      name: '轮播图2',
      url: '../static/img/1535254224057.png',
      description: '北京市海淀区西二旗',
      weights: 2

    },
    {
      id: 3,
      switch: '0',
      name: '轮播图3',
      url: '../static/img/1535254224057.png',
      description: '上海市浦东新区世纪大道',
      weights: 3
    },
    {
      id: 4,
      switch: '1',
      name: '轮播图4',
      url: '../static/img/1535254224057.png',
      description: '深圳市南山区深南大道',
      weights: 4
    }
  ],
  dataNavigation: [
    {
      id: 1,
      switch: 0,
      name: '首页1位置',
      url: '../static/img/1535254224057.png',
      description: '北京市朝阳区芍药居',
      weights: 1

    },
    {
      id: 2,
      switch: 1,
      name: '首页2位置',
      url: '../static/img/1535254224057.png',
      description: '北京市海淀区西二旗',
      weights: 2

    },
    {
      id: 3,
      switch: '0',
      name: '首页3位置',
      url: '../static/img/1535254224057.png',
      description: '上海市浦东新区世纪大道',
      weights: 3
    },
    {
      id: 4,
      switch: '1',
      name: '首页4位置',
      url: '../static/img/1535254224057.png',
      description: '深圳市南山区深南大道',
      weights: 4
    },
    {
      id: 5,
      switch: '0',
      name: '首页5位置',
      url: '../static/img/1535254224057.png',
      description: '深圳市南山区深南大道',
      weights: 4
    },
    {
      id: 6,
      switch: '1',
      name: '首页6位置',
      url: '../static/img/1535254224057.png',
      description: '深圳市南山区深南大道',
      weights: 4
    },
    {
      id: 7,
      switch: 1,
      name: '首页7位置',
      url: '../static/img/1535254224057.png',
      description: '深圳市南山区深南大道',
      weights: 4
    },
    {
      id: 8,
      switch: 1,
      name: '首页8位置',
      url: '../static/img/1535254224057.png',
      description: '深圳市南山区深南大道',
      weights: 4
    },
    {
      id: 9,
      switch: 1,
      name: '启动页图片',
      url: '../static/img/1535254224057.png',
      description: '深圳市南山区深南大道',
      weights: 4
    }
  ]
}
module.exports = router;
