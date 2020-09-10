const pool = require('../../../db/db');

module.exports = {
  async InsertUserProp(req, res) {
    const { property } = req.body;

    const InsertUserPropSql = 'INSERT INTO user_prop (property) VALUES (?)';

    pool.query(InsertUserPropSql, [property])
      .then((row) => {
        if (row) {
          res.send({ user_prop_inserted: true });
        }
      })
      .catch((error) => {
        console.log(`sql error${error}`);
        res.end({ user_prop_inserted: false });
      });
  },
};
