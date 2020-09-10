const pool = require('../../../db/db');

module.exports = {
  async GetUserPropSelect(req, res) {
    const { property } = req.body;

    const PropertySql = 'SELECT * FROM user_prop';

    pool.query(PropertySql, [property])
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log(`get user_pro erro${err}`);
        res.end({ fetch_all_user_prop: false });
      });
  },

  async GetUserPropSelectSingale(req, res) {
    const { id } = req.params;

    const PropertySql = 'SELECT * FROM user_prop WHERE prop_id=?';

    pool.query(PropertySql, [id])
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log(`get user prop single${err}`);
        res.end({ fetch_single_user_prop: false });
      });
  },

  async findPropertyId(propName) {
    const findPropertyId = 'SELECT prop_id FROM user_prop WHERE property=?';
    return pool.query(findPropertyId, [propName])
      .then((row) => row[0].prop_id)
      .catch((err) => err);
  },

  async findPropertyNameById(propId) {
    const findPropertyId = 'SELECT property FROM user_prop WHERE prop_id=?';
    return pool.query(findPropertyId, [propId])
      .then((row) => row[0].property)
      .catch((err) => err);
  },
};
