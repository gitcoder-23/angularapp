const pool = require('../../db/db');

module.exports = {
  async getCategory(req, res) {
    const selectQuery = 'SELECT * FROM category';

    pool.query(selectQuery)
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log('getcategory Query Error', err);
        res.end({ fetch_all_category: false });
      });
  },

  async singleCategory(req, res) {
    const { id } = req.params;

    const selectQuery = 'SELECT * FROM category WHERE cat_id=?';

    pool.query(selectQuery, [id])
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log('getcategory Query Error', err);
        res.end({ fetch_single_category: false });
      });
  },
};
