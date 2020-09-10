const pool = require('../../db/db');

module.exports = {
  async TempCartDelete(req, res) {
    const { id } = req.params;

    const TempCartDeleteSql = 'DELETE FROM temp_cart WHERE temp_id=?';

    pool.query(TempCartDeleteSql, [id])
      .then((row) => {
        if (row) {
          res.send({ tempcat_deleted: true });
        }
      })
      .catch((err) => {
        console.log(`saql err${err}`);
        res.end({ tempcat_deleted: false });
      });
  },
};
