const pool = require('../../db/db');

module.exports = {
  async delProduct(req, res) {
    const { pid } = req.params;
    const deleteQuery = 'DELETE FROM `product` WHERE p_id = ?';

    pool.query(deleteQuery, [pid])
      .then((row) => {
        if (row) {
          res.send({ product_deleted: true });
        }
      })
      .catch((err) => {
        res.end({ product_deleted: false });
        throw err;
      });
  },
};
