const pool = require('../../../db/db');

module.exports = {
  async UpdateUserProp(req, res) {
    const { id } = req.params;
    const { property } = req.body;

    const UpdateUserPropSql = 'UPDATE user_prop SET property=? WHERE prop_id=?';

    pool.query(UpdateUserPropSql, [property, id])
      .then((row) => {
        if (row) {
          res.send({ user_prop_updated: true });
        }
      })
      .catch((err) => {
        console.log(`sql error${err}`);
        res.end({ user_prop_updated: false });
      });
  },
};
