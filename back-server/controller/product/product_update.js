const pool = require('../../db/db');

module.exports = {
  async putProduct(req, res) {
    const categoryId = req.body.category_id;
    const productImg = req.body.product_img;
    const productName = req.body.product_name;
    const productBrandName = req.body.product_brand_name;
    const productDetails = req.body.product_details;
    const productCode = req.body.product_code;
    const { pid } = req.params;

    let updateQuery = 'UPDATE `product` SET';
    updateQuery += ' cat_id= ?,';
    updateQuery += ' p_img= ?,';
    updateQuery += ' p_name= ?,';
    updateQuery += ' p_brand_name= ?,';
    updateQuery += ' p_detailse= ?,';
    updateQuery += ' p_code= ?';
    updateQuery += ' WHERE p_id= ?';
    console.log(updateQuery);
    pool.query(updateQuery, [categoryId, productImg, productName,
      productBrandName, productDetails, productCode, pid])
      .then((row) => {
        if (row) {
          res.send({ product_updated: true });
        }
      })
      .catch((err) => {
        console.log('putProduct Query Error ', err);
        res.end({ product_updated: false });
      });
  },
};
