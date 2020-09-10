/* eslint-disable */
const bcrypt = require('bcryptjs');
const pool = require('../../db/db');
const userAuth = require('./user_auth');
const userUtil = require('./user_util');
const userValInaset = require('./user_val/userval_insert');

// generating and inserting hash password into table
const addPass = async (pass, userId) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(pass, salt);

  let insertQuery = 'INSERT INTO user_hash';
  insertQuery += '(u_id, password)';
  insertQuery += 'VALUES(?, ?)';

  return await pool
    .query(insertQuery, [userId, hash])
    .then((res) => res.affectedRows)
    .catch((err) => {
      console.log(err);
      return 0;
    });
};

module.exports = {
  // Registration of a user
  async addUser(req, res) {
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const phone = req.body.phone;
    const gender = userUtil.filterGender(req.body.gender);
    const typeId = req.body.type;
    const password = req.body.password;
    const email = req.body.email;

    if (!gender) return res.sendStatus(406);

    // If user is present not insert user
    if (!await userAuth.checkDuplicateUser(phone)) {
      let insertQuery = 'INSERT INTO `user`';
      insertQuery += '(`f_name`, `l_name`,`phone`,`gender`,`type_id`)';
      insertQuery += ' VALUES ';
      insertQuery += '(?,?,?,?,?)';

      pool.query(insertQuery, [firstName, lastName, phone, gender, typeId])
        .then(async (row) => {
          // checking that password also inserted
          if (addPass(password, row.insertId)) {
            res.send({ user_prsernt: false, registration: true });
            // checking email is present or not then inserting
            if (email !== null && email !== '' && row.insertId) {
              const data = {
                value: email,
                property: 'email',
                u_id: row.insertId,
              };
              console.log(data);
              const emailInsert = await userValInaset.UserValInsertBySys(data);

              console.log('email insert : ', emailInsert);
            } else {
              console.log('email is not present');
            }
          } else {
            res.send({ password_insertion: false });
          }
        })
        .catch((err) => {
          console.log('addUser Query Error', err);
          res.end();
        });
    } else {
      res.send({ user_present: true, registration: false });
    }
  },
};
