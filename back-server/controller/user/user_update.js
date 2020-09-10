const pool = require('../../db/db');

module.exports = {
  async putUser(req, res) {
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const { phone } = req.body.phone;
    const { gender } = req.body.gender;
    const { typeId } = req.body.type;
    const { uid } = req.params.uid;

    let updateQuery = 'UPDATE `user` SET ';
    updateQuery += 'f_name= ?,';
    updateQuery += 'l_name= ?,';
    updateQuery += 'phone= ?,';
    updateQuery += 'gender= ?,';
    updateQuery += 'type_id= ? ';
    updateQuery += 'WHERE u_id= ?';

    pool.query(updateQuery, [firstName, lastName,
      phone, gender, typeId, uid])
      .then((row) => {
        if (row) {
          res.send({ usr_updated: true });
        }
      })
      .catch((err) => {
        console.log('putUser Query Error ', err);
        res.end({ usr_updated: false });
      });
  },
};
