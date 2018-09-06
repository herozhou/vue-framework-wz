// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into user(id, name, age) values (0, ?, ?)',
    all: 'select * from user',
    getUserByid: 'select * from user where id=1 ',
    getCarouserAll: 'select * from carouser '
  }
}

module.exports = sqlMap;
