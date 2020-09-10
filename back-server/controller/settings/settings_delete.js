const pool = require('../../db/db');

module.exports = {

  async delSettings(req, res) {
    const { sid } = req.params;
    const deleteQuery = `DELETE FROM \`site_settings\` WHERE sId = ${sid}`;

    pool.query(deleteQuery)
      .then((row) => {
        if (row) {
          res.send({ settings_deleted: true });
        }
      })
      .catch((err) => {
        res.end({ settings_deleted: false });
        throw err;
      });
  },
};
