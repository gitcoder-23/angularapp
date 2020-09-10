const pool = require('../../db/db');

class RFTokenOperations {}

RFTokenOperations.prototype.storeToken = (refershToken) => {
  const insetrToken = 'INSERT INTO auth_token(token) VALUES (?)';
  pool.query(insetrToken, [refershToken])
    .then((row) => row)
    .catch((err) => console.log(err));
};

RFTokenOperations.prototype.checkToken = async (refershToken) => {
  const findToken = 'SELECT COUNT(*) found from auth_token at3 WHERE token = ?';
  return await pool.query(findToken, [refershToken])
    .then((row) => row[0].found)
    .catch((err) => console.log(err));
};

RFTokenOperations.prototype.removeToken = async (refershToken) => {
  const removeToken = 'DELETE FROM  auth_token WHERE token   = ?';
  return await pool.query(removeToken, [refershToken])
    .then((row) => row.affectedRows)
    .catch((err) => console.log('RFstore_del ==> ', err));
};

module.exports = new RFTokenOperations();
