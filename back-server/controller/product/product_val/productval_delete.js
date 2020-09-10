const pool = require('../../../db/db');

module.exports = {
  async ProductValDelete(req, res) {
    const { id } = req.params;

    const ProductValDeleteSql = 'DELETE FROM product_val WHERE id=?';

    pool.query(ProductValDeleteSql, [id])
      .then((row) => {
        if (row) {
          res.send({ product_val_delete: true });
        }
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ product_val_delete: false });
      });
  },
};
