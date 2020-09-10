/* eslint-disable no-restricted-syntax */
const pool = require('../../db/db');
const userExtraValue = require('./user_val/userval_select');

const putingExtraDataIntoObject = (existingObject, ExtraData) => {
  const row = existingObject;
  // eslint-disable-next-line guard-for-in
  for (const i in ExtraData) {
    row[0][i] = ExtraData[i];
  }
  return row;
};

module.exports = {
  // get all user
  async getUser(req, res) {
    let selectQuery = 'select u_id,f_name,l_name,phone ,gender ,u_type';
    selectQuery += ' from `user` ,user_type ';
    selectQuery += 'where user.type_id  = user_type.t_id ';
    pool
      .query(selectQuery)
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log('getUser Query Error', err);
        res.end();
      });
  },

  // get single user
  async singleUser(req, res) {
    let selectQuery = 'select u_id,f_name,l_name,phone ,gender ,u_type';
    selectQuery += ' from `user` ,user_type ';
    selectQuery += 'where user.type_id  = user_type.t_id ';
    selectQuery += 'and u_id = ?';
    pool
      .query(selectQuery, [req.params.uid])
      .then(async (row) => {
        const ExtraData = await userExtraValue.getdata(req.params.uid);
        const FinalData = await putingExtraDataIntoObject(row, ExtraData);
        res.send(FinalData);
      })
      .catch((err) => {
        console.log('getUser Query Error', err);
        res.end();
      });
  },

};
