const pool = require('../../../db/db');

module.exports = {
  async UserValDelete(req, res) {
    const { id } = req.params;

    const UserValDeleteSql = 'DELETE FROM user_val WHERE id=?';

    pool.query(UserValDeleteSql, [id])
      .then((row) => {
        if (row) {
          res.send({ user_val_deleted: true });
        }
      })
      .catch((err) => {
        console.log(`sql error${err}`);
        res.end({ user_val_deleted: false });
      });
  },
};
