const pool = require('../../db/db');

module.exports = {
  async ShipingInsert(req, res) {
    const uId = req.body.u_id;
    const aId = req.body.a_id;
    const oId = req.body.o_id;

    const ShipingInsertSql = 'INSERT INTO shiping (u_id,a_id,o_id) VALUES';

    pool.query(ShipingInsertSql, [uId, aId, oId])
      .then((row) => {
        if (row) {
          res.send({ shiping_inserted: true });
        }
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ shiping_inserted: false });
      });
  },
};
