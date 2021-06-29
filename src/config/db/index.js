const mongoose =  require('mongoose')
const mysql = require('mysql')

async function connect_mongodb() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error) {
        console.log('connet mongodb fail!') 
    }
}

const sqlDb = mysql.createConnection({
    // database: 'nhat2', 
    database: 'node1a',
    host: 'localhost',
    user: 'root',
    password: '0'
});

function connect_mysql() {
    sqlDb.connect(err => {
        if(err)
        console.log('conect sql fail', err)
    });
}

const connect_mysql1 = async () => new Promise(
    (resolve,reject) =>{
        sqlDb.connect(err =>{
            if (err) {
            console.log(err)
            reject(err)
            }
            resolve()
        })
    }
)

const query =  (q) => new Promise(
(resolve, reject) => {
  sqlDb.query(q, (err,data) => {
      if (err){
          console.log(err);
          reject(err)
      }
      resolve(data)
  })
});

var queryCreateDB = `CREATE TABLE user (
            id INT(0) AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50), 
            fullname VARCHAR(255),
            email VARCHAR(100),
        )`;

module.exports = { connect_mongodb, connect_mysql, sqlDb, query, connect_mysql1 }