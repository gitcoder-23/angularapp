const pool = require('../../db/db');

module.exports = {
  async delState(req, res) {
    const deleteQuery = `DELETE FROM \`state\` WHERE s_id = ${req.params.sid}`;

    pool.query(deleteQuery)
      .then((row) => {
        if (row) {
          res.send({ state_deleted: true });
        }
      })
      .catch((err) => {
        console.log('delState Query Error ', err);
        res.end({ state_deleted: false });
      });
  },
};
