const pool = require('../../db/db');

module.exports = {
  async ShipingUpdate(req, res) {
    const uId = req.body.u_id;
    const aId = req.body.a_id;
    const oId = req.body.o_id;
    const { id } = req.params;

    let ShipingUpdateSql = 'UPDATE shiping SET ';
    ShipingUpdateSql += 'u_id=?,';
    ShipingUpdateSql += 'a_id=?,';
    ShipingUpdateSql += 'o_id=?';
    ShipingUpdateSql += 'WHERE ';
    ShipingUpdateSql += 'ship_id=?';

    pool.query(ShipingUpdateSql, [uId, aId, oId, id])
      .then((row) => {
        if (row) {
          res.send({ shiping_updated: true });
        }
      })
      .catch((err) => {
        console.log(`sql err${err}`);
        res.end({ shiping_updated: true });
      });
  },
};
