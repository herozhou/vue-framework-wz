const conn = require('./config');
// 数据库连接配置
const connection = conn();
// 查询所有数据
let selectAll = (sql, callback) => {
  connection.query(sql, (err, result) => {
    if(err) {
      console.log('错误信息-', err.sqlMessage);
      let errNews = err.sqlMessage;
      callback(err, errNews);
    }else{
      var string = JSON.stringify(result);
      var data = JSON.parse(string);
      callback(err, data);
    //  callback('', data);
    }

    // console.log(string);
  })
}
// 插入一条数据
let insertData = (table, datas, callback) => {
  var fields = '';
  var values = '';
  for(var k in datas) {
    fields += k + ',';
    values = values + "'" + datas[k] + "',"
  }
  fields = fields.slice(0, -1);
  values = values.slice(0, -1);
  console.log(fields, values);
  var sql = "INSERT INTO " + table + '(' + fields + ') VALUES(' + values + ')';
  connection.query(sql, callback);
}
// 更新一条数据
let updateData = function(table, sets, where, callback) {
  var _SETS = '';
  var _WHERE = '';
  var keys = '';
  var values = '';
  for(var k in sets) {
    _SETS += k + "='" + sets[k] + "',";
  }
  _SETS = _SETS.slice(0, -1);
  for(var k2 in where) {
    //  _WHERE+=k2+"='"+where[k2]+"' AND ";
    _WHERE += k2 + "=" + where[k2];
  }
  // UPDATE user SET Password='321' WHERE UserId=12
  //update table set username='admin2',age='55'   where id="5";
  var sql = "UPDATE " + table + ' SET ' + _SETS + ' WHERE ' + _WHERE;
  console.log(sql);
  connection.query(sql, callback);
}

// 删除一条数据
let deleteData = function(table, where, callback) {
  var _WHERE = '';
  for(var k2 in where) {
    //多个筛选条件使用  _WHERE+=k2+"='"+where[k2]+"' AND ";
    _WHERE += k2 + "=" + where[k2];
  }
  // DELETE  FROM user WHERE UserId=12  注意UserId的数据类型要和数据库一致
  var sql = "DELETE  FROM " + table + ' WHERE ' + _WHERE;
  connection.query(sql, callback);
}
exports.conn = connection;
exports.selectAll = selectAll;
exports.insertData = insertData;
exports.deleteData = deleteData;
exports.updateData = updateData;
