const pool = require('../../../db/db');

module.exports = {
  async GetUserType(req, res) {
    const uType = req.body.u_type;

    const uTypeSql = 'SELECT * FROM user_type';

    pool.query(uTypeSql, [uType])
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log(`sql error${err}`);
        res.end({ fetch_user_type: false });
      });
  },
  async GetSingaleUserType(req, res) {
    const { id } = req.params;

    const uTypeSql = 'SELECT * FROM user_type WHERE t_id=?';

    pool.query(uTypeSql, [id])
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log(`sql erroe${err}`);
        res.end({ fetch_user_type: false });
      });
  },
};
