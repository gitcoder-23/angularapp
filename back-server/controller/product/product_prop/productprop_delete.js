const pool = require('../../../db/db');

module.exports = {
  async ProductDelete(req, res) {
    const { id } = req.params;

    const ProductDeleteSql = 'DELETE FROM product_prop WHERE prop_id=?';

    pool.query(ProductDeleteSql, [id])
      .then((row) => {
        if (row) {
          res.send({ product_prop_deleted: true });
        }
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ product_prop_deleted: false });
      });
  },
};
