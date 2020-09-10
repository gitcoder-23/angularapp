const pool = require('../../../db/db');
const userPropSelect = require('../user_prop/userprop_select');

module.exports = {

  // for manual insery for user
  async UserValInsert(req, res) {
    const { value } = req.body;
    const propId = req.body.prop_id;
    const uId = req.body.u_id;

    let UserValInsertSql = 'INSERT INTO user_val (value,prop_id,u_id)';
    UserValInsertSql += 'VALUES(?,?,?)';

    pool.query(UserValInsertSql, [value, propId, uId])
      .then((row) => {
        if (row) {
          res.send({ user_val_inserted: true });
        }
      })
      .catch((err) => {
        console.log(`sql error${err}`);
        res.end({ user_val_inserted: false });
      });
  },

  // for automatic insert by system
  async UserValInsertBySys(data) {
    const { value } = data;
    const propId = await userPropSelect.findPropertyId(data.property);
    const uId = data.u_id;

    let UserValInsertSql = 'INSERT INTO user_val (value,prop_id,u_id)';
    UserValInsertSql += 'VALUES(?,?,?)';

    return pool.query(UserValInsertSql, [value, propId, uId])
      .then((row) => (!!row))
      .catch((err) => err);
  },

};
