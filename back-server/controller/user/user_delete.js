const pool = require('../../db/db');

module.exports = {
  async delUser(req, res) {
    const deleteQuery = 'DELETE FROM `user` WHERE u_id = ?';
    pool.query(deleteQuery, [req.params.uid])
      .then((row) => {
        if (row) {
          res.send({ user_eleted: true });
        }
      })
      .catch((err) => {
        console.log('delUser Query Error ', err);
        res.end({ user_eleted: true });
      });
  },
};
