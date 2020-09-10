const pool = require('../../db/db');
const qty = require('./product_pricing/product_pricing_insert');

module.exports = {
  async addProduct(req, res) {
    const categoryId = req.body.category_id;
    const productImg = req.body.product_img;
    const productName = req.body.product_name;
    const productBrandName = req.body.product_brand_name;
    const productDetails = req.body.product_details;
    const productCode = req.body.product_code;

    let insertQuery = 'INSERT INTO `product`';
    insertQuery += '(`cat_id`,`p_img`,`p_name`,`p_brand_name`,';
    insertQuery += ' `p_detailse`,`p_code`) VALUES ';
    insertQuery += ' ( ?, ?, ?, ?, ?, ?)';
    console.log(insertQuery);
    pool.query(insertQuery,
      [categoryId, productImg, productName, productBrandName,
        productDetails, productCode])
      .then((row) => {
        if (row) {
          console.log(row);
          qty.addProductId(row.insertId);
          res.send({ product_inserted: true, pid: row.insertId });
        }
      })
      .catch((err) => {
        if (err) {
          res.end({ product_inserted: false });
        }
      });
  },
};
