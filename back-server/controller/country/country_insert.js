const pool = require('../../db/db');

module.exports = {
  async addCountry(req, res) {
    const countryName = req.body.country_name;

    let insertQuery = 'INSERT INTO `country`(`country`';
    insertQuery += ') VALUES (';
    insertQuery += ' ?';
    insertQuery += ')';

    pool.query(insertQuery, [countryName])
      .then((row) => {
        if (row) {
          res.send({ country_inserted: true });
        }
      })
      .catch((err) => {
        console.log('addCountry Query Error', err);
        res.end({ country_inserted: false });
      });
  },
};
