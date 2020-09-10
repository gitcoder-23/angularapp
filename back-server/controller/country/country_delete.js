const pool = require('../../db/db');

module.exports = {
  async delCountry(req, res) {
    const deleteQuery = `DELETE FROM \`country\` WHERE c_id = ${req.params.cunid}`;

    pool.query(deleteQuery)
      .then((row) => {
        if (row) {
          res.send({ country_deleted: true });
        }
      })
      .catch((err) => {
        console.log('delCountry Query Error ', err);
        res.end({ country_deleted: false });
      });
  },
};
