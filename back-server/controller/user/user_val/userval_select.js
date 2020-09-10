const pool = require('../../../db/db');
const UserProperty = require('../user_prop/userprop_select');

const makeDataUsingPropertyName = async (FoundedDataObject) => {
  const craftedData = [];
  for (let i = 0; i !== FoundedDataObject.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const propName = await UserProperty.findPropertyNameById(
      FoundedDataObject[i].prop_id,
    );
    craftedData[propName] = FoundedDataObject[i].value;
  }
  return craftedData;
};

module.exports = {
  async UserValSelect(req, res) {
    const UserValSelectSql = 'SELECT * FROM user_val';

    pool.query(UserValSelectSql)
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log(`sql error${err}`);
        res.end({ fetch_all_user_val: false });
      });
  },
  async UserValSelectSingale(req, res) {
    const { id } = req.params;

    const UserValSelectSingaleSql = 'SELECT * FROM user_val WHERE id=?';

    pool.query(UserValSelectSingaleSql, [id])
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log(`sql error${err}`);
        res.end({ fetch_single_user_val: false });
      });
  },

  async checkEmail(req, res) {
    const { email } = req.query.email;

    const SelectEmailSql = 'SELECT  count(value) email from user_val where value = ?';

    pool.query(SelectEmailSql, [email])
      .then((row) => {
        res.json({ email: row[0].email !== 0 });
      })
      .catch((err) => {
        console.log(`sql error checkEmail in user val${err}`);
        res.end({ fetch_email: false });
      });
  },

  async getdata(uid) {
    const UserValSelectSingaleSql = 'SELECT * FROM user_val WHERE u_id=?';

    return await pool.query(UserValSelectSingaleSql, [uid])
      .then(async (row) => {
        console.log(row);
        return await makeDataUsingPropertyName(row);
      })
      .catch((err) => {
        console.log(`sql error${err}`);
        return false;
      });
  },
};
