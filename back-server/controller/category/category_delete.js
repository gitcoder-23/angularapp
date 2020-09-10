const pool = require('../../db/db');

module.exports = {
  async delCategory(req, res) {
    const deleteQuery = `DELETE FROM \`category\` WHERE cat_id = ${req.params.cid}`;

    pool.query(deleteQuery)
      .then((row) => {
        if (row) {
          res.send({ deleted: true });
        }
      })
      .catch((err) => {
        console.log('delCategory Query Error ', err);
        res.end({ category_deleted: false });
      });
  },
};
