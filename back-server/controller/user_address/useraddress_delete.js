const pool = require('../../db/db');

module.exports = {
  async delUser_address(req, res) {
    let deleteQuery = 'DELETE FROM user_address WHERE';
    deleteQuery += ` a_id = ${req.params.id}`;

    pool.query(deleteQuery)
      .then((row) => {
        if (row) {
          res.send({ address_deleted: true });
        }
      })
      .catch((err) => {
        console.log('delUser Query Error ', err);
        res.end({ address_deleted: false });
      });
  },
};
