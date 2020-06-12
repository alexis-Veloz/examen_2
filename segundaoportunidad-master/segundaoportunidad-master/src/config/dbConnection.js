const mysql = require('mysql');

/*
module.exports = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyecto'
  });
}*/

module.exports = () => {
  return mysql.createConnection({
    host: 'sql12.freemysqlhosting.net',
    user: 'sql12346246',
    password: 'e47GNqfWda',
    database: 'sql12346246'
  });
}
