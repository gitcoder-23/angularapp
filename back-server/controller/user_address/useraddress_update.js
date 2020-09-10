const pool = require('../../db/db');

module.exports = {
  async putuser_address(req, res) {
    const countryId = req.body.country_id;
    const stateId = req.body.state_id;
    const { zip } = req.body;
    const { city } = req.body;
    const nearestLocation = req.body.nearest_location;
    const currentLocation = req.body.current_location;
    const uId = req.body.u_id;
    const aId = req.params.id;

    let sqlAddress = 'UPDATE `user_address` SET country_id=?,';
    sqlAddress += 'state_id=?,';
    sqlAddress += 'zip=?,';
    sqlAddress += 'city=?,';
    sqlAddress += 'nearest_location =?,';
    sqlAddress += 'current_location =?,';
    sqlAddress += 'u_id=? WHERE a_id=?';

    pool.query(sqlAddress, [countryId, stateId, zip, city, nearestLocation,
      currentLocation, uId, aId])
      .then((row) => {
        if (row) {
          res.send({ address_updated: true });
        }
      })
      .catch((err) => {
        console.log('putUser Query Error ', err);
        res.end({ address_updated: false });
      });
  },
};
