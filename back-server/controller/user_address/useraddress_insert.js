const pool = require('../../db/db');

module.exports = {
  async addUseraddress(req, res) {
    const countryId = req.body.country_id;
    const stateId = req.body.state_id;
    const { zip } = req.body;
    const { city } = req.body;
    const nearestLocation = req.body.nearest_location;
    const currentLocation = req.body.current_location;
    const uId = req.body.u_id;

    let sqlInsert = 'INSERT INTO user_address';
    sqlInsert += '(country_id,state_id,zip,city,nearest_location,';
    sqlInsert += 'current_location,u_id) VALUES';
    sqlInsert += '(?,?,?,?,?,?,?)';

    pool.query(sqlInsert, [countryId, stateId, zip, city,
      nearestLocation, currentLocation, uId])
      .then((row) => {
        if (row) {
          res.send({ address_inserted: false });
        }
      })
      .catch((err) => {
        console.log(`mysql error${err}`);
        res.end({ address_inserted: false });
      });
  },
};
