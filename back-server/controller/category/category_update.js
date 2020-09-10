const pool = require('../../db/db');

module.exports = {
  async putCategory(req, res) {
    const categoryName = req.body.category_name;
    const categoryImgLoc = req.body.category_img_loc;
    const categoryDetails = req.body.category_details;
    const categoryMeta = req.body.category_meta;
    const { cid } = req.params;

    let updateQuery = 'UPDATE `category` SET ';
    updateQuery += 'cat_name= ?,';
    updateQuery += 'cat_img_loc= ?,';
    updateQuery += 'cat_detailse= ?,';
    updateQuery += 'cat_meta= ?';
    updateQuery += ' WHERE cat_id= ?';

    pool.query(updateQuery,
      [categoryName, categoryImgLoc, categoryDetails, categoryMeta, cid])
      .then((row) => {
        if (row) {
          res.send({ category_updated: true });
        }
      })
      .catch((err) => {
        console.log('putCategory Query Error ', err);
        res.end({ category_updated: false });
      });
  },
};
