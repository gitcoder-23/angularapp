const pool = require('../../db/db');

module.exports = {
  async getProduct(req, res) {
    let selectQuery = 'select p_id, cat_id, p_img, p_name, p_brand_name,';
    selectQuery += 'p_detailse, p_code from `product`';

    pool.query(selectQuery)
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log('getproduct Query Error', err);
        res.end({ fetch_all_product: false });
      });
  },
  async singleProduct(req, res) {
    let selectQuery = 'select p_id, cat_id, p_img, p_name, p_brand_name,';
    selectQuery += 'p_detailse, p_code from `product`';
    selectQuery += 'where product.p_id ';
    selectQuery += 'and p_id = ?';

    pool.query(selectQuery, [req.params.pid])
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log('getproduct Query Error', err);
        res.end({ fetch_single_product: false });
      });
  },

  async getProductFullDetails(req, res) {
    let selectQuery = 'select *';
    selectQuery += ' from `product_full_detailse` ';

    pool.query(selectQuery)
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        res.end({ fetch_single_product: false });
        throw err;
      });
  },
};
