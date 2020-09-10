const pool = require('../../../db/db');

module.exports = {
  async ProductInsert(req, res) {
    const { property } = req.body;

    const ProductInsertSql = 'INSERT INTO product_prop (property) VALUES(?)';

    pool.query(ProductInsertSql, [property])
      .then((row) => {
        if (row) {
          res.send({ product_prop_inserted: true });
        }
      })
      .catch((err) => {
        console.log(`sql error${err}`);
        res.end({ product_prop_inserted: false });
      });
  },
};
