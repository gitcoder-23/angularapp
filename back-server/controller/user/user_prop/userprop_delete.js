const pool = require('../../../db/db');

module.exports = {
  async DleteUserProp(req, res) {
    const { id } = req.params;

    const DleteUserPropSql = 'DELETE FROM user_prop WHERE prop_id=?';

    pool.query(DleteUserPropSql, [id])
      .then((row) => {
        if (row) {
          res.send({ user_prop_deleted: true });
        }
      })
      .catch((err) => {
        console.log(`sql error${err}`);
        res.end({ user_prop_deleted: false });
      });
  },
};
