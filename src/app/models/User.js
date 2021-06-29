var db = require('../../config/db').sqlDb
const query = require('../../config/db').query

exports.show = async function() {
    let sql = `SELECT * FROM user`;
    const data = await query(sql)
    return data;
    // return await query(sql)
}

exports.findByID = async id => {
    let sql = `SELECT * FROM user where id = '${id}'`;
    const data = await query(sql)
    console.log(data[0])
    return data[0];
    // return await query(sql)
}

exports.create = async (name,email,fullname) => {
    let sql = `INSERT INTO user (name, fullname, email) VALUES ('${name}', '${email}', '${fullname}')`;
    db.query(sql, function(err, d) {
        if (err) throw err;
    });
}

exports.delete = async id => {
    let sql = `DELETE FROM user WHERE id = ${id}`;
    db.query(sql, function(err, d) {
        if (err) throw err;
    });
}

exports.update = async (id,name,email,fullname) => {
    let sql = `UPDATE user SET name = '${name}' , email = '${email}', fullname = '${fullname}' WHERE id = ${id}`;
    db.query(sql, function(err, d) {
        if (err) throw err;
    });
}