const pool = require('../../../db/db');

module.exports = {
  async ProductUpdate(req, res) {
    const { property } = req.body;
    const { id } = req.params;

    const ProductUpdateSql = 'UPDATE product_prop SET property=? WHERE prop_id=?';

    pool.query(ProductUpdateSql, [property, id])
      .then((row) => {
        if (row) {
          res.send({ product_prop_updated: true });
        }
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ product_prop_updated: false });
      });
  },
};
