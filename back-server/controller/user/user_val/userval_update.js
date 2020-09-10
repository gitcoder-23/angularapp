const pool = require('../../../db/db');

module.exports = {
  async UserValUpdate(req, res) {
    const { id } = req.params;
    const { value } = req.body;
    const uId = req.body.u_id;

    const UserValUpdateSql = 'UPDATE user_val SET value=?,u_id=? WHERE id=?';

    pool.query(UserValUpdateSql, [value, uId, id])
      .then((row) => {
        if (row) {
          res.send({ user_val_updated: true });
        }
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ user_val_updated: false });
      });
  },
};
