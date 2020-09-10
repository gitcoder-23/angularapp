const pool = require('../../db/db');

module.exports = {
  async putCountry(req, res) {
    const countryName = req.body.country_name;
    const { cunid } = req.params;

    let updateQuery = 'UPDATE `country` SET ';
    updateQuery += 'country= ?';
    updateQuery += 'WHERE c_id= ?';

    pool.query(updateQuery, [countryName, cunid])
      .then((row) => {
        if (row) {
          res.send({ country_updated: true });
        }
      })
      .catch((err) => {
        console.log('putCountry Query Error ', err);
        res.end({ country_updated: false });
      });
  },
};
