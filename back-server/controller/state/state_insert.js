const pool = require('../../db/db');

module.exports = {
  async addState(req, res) {
    const cId = req.body.c_id;
    const stateName = req.body.state_name;

    let insertQuery = 'INSERT INTO `state`(c_id,state';
    insertQuery += ') VALUES (?,?)';

    pool.query(insertQuery, [cId, stateName])
      .then((row) => {
        if (row) {
          res.send({ state_inserted: true });
        }
      })
      .catch((err) => {
        console.log('addState Query Error', err);
        res.end({ state_inserted: false });
      });
  },
};
