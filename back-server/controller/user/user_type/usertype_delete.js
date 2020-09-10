const pool = require('../../../db/db');

module.exports = {
  async DeleteUserType(req, res) {
    const { id } = req.params;

    const DeleteUserTypesql = 'DELETE FROM  user_type WHERE t_id = ?';

    pool.query(DeleteUserTypesql, [id])
      .then((row) => {
        if (row) {
          res.send({ user_type_deleted: true });
        }
      })
      .catch((err) => {
        console.log(`sql error${err}`);
        res.end({ user_type_deleted: false });
      });
  },
};
