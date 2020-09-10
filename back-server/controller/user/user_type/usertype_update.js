const pool = require('../../../db/db');

module.exports = {
  async UpdateUserType(req, res) {
    const uType = req.body.u_type;
    const { id } = req.params;
    const UpdateUserTypesql = 'UPDATE user_type SET u_type=? WHERE t_id=?';
    pool.query(UpdateUserTypesql, [uType, id])
      .then((row) => {
        if (row) {
          res.send({ user_type_updated: true });
        }
      })
      .catch((err) => {
        console.log(`sql error${err}`);
        res.end({ user_type_updated: true });
      });
  },
};
