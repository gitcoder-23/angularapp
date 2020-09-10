const pool = require('../../db/db');

module.exports = {
  async putState(req, res) {
    const stateName = req.body.state_name;
    const sid = req.params.sid;

    let updateQuery = 'UPDATE `state` SET ';
    updateQuery += 'state= ?';
    updateQuery += 'WHERE s_id= ?';

    pool.query(updateQuery, [stateName, sid])
      .then((row) => {
        if (row) {
          res.send({ state_updated: true });
        }
      })
      .catch((err) => {
        console.log('putState Query Error ', err);
        res.end({ state_updated: false });
      });
  },
};
