const pool = require('../../../db/db');

module.exports = {
  async UserTypeInsert(req, res) {
    const uType = req.body.u_type;

    const userTypesql = 'INSERT INTO user_type (u_type) VALUES (?)';
    pool.query(userTypesql, [uType])
      .then((row) => {
        if (row) {
          res.send({ user_inserted: true });
        }
      })
      .catch((err) => {
        console.log(`sql error${err}`);
        res.end({ user_inserted: false });
      });
  },
};
