const pool = require('../../db/db');

module.exports = {
  async addCategory(req, res) {
    const categoryName = req.body.category_name;
    const categoryImgLoc = req.body.category_img_loc;
    const categoryDetails = req.body.category_details;
    const categoryMeta = req.body.category_meta;

    let insertQuery = 'INSERT INTO `category`';
    insertQuery += '(`cat_name`, `cat_img_loc`,`cat_detailse`,`cat_meta`)';
    insertQuery += ' VALUES (?,?,?,?)';

    pool.query(insertQuery,
      [categoryName, categoryImgLoc, categoryDetails, categoryMeta])
      .then((row) => {
        if (row) {
          res.send({ inserted: true });
        }
      })
      .catch((err) => {
        console.log('addcategory Query Error', err);
        res.end({ category_inserted: false });
      });
  },
};
