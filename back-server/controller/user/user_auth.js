const bcrypt = require('bcryptjs');
const auth = require('../auth/auth');
const pool = require('../../db/db');

// eslint-disable-next-line no-multi-assign
const self = module.exports = {

  // check user presence
  async userPresence(req, res) {
    const { phone } = req.query;
    const status = await self.checkDuplicateUser(phone);

    res.json({ user_present: status });
  },

  checkDuplicateUser: async (userName) => {
    const serarchUser = 'select count(*) user_found from user where phone = ?';

    return pool
      .query(serarchUser, [userName])
      .then((row) => (!!row[0].user_found))
      .catch((err) => {
        console.log(err);
      });
  },

  // Login and check user password with hash
  async login(req, res) {
    const userName = req.body.phone;
    const { password } = req.body;
    const userPresent = await self.checkDuplicateUser(userName);

    if (userPresent) {
      const findHash = 'select password from user_pass where phone = ?';
      const userId = 'select u_id from user where phone = ?';
      const uId = await pool.query(userId, [userName])
        .then((row) => row)
        .catch((err) => console.log(err));

      const storedHash = await pool
        .query(findHash, [userName])
        .then((row) => row[0].password)
        .catch((err) => {
          console.log(err);
        });

      const passwordMatch = bcrypt.compareSync(password, storedHash);

      if (passwordMatch) {
        const token = await auth.generateTokens(userName);
        res.send({ credential: passwordMatch, token, u_id: uId[0].u_id });
      } else {
        res.send({ credential: passwordMatch });
      }
    } else {
      res.json({ credential: userPresent });
    }
  },

  // guard routes
  async verify(req, res, next) {
    const authriseToken = req.headers.authorization;
    const decodedData = await auth.verifyToken(authriseToken);

    if (decodedData === 401) {
      res.sendStatus(401);
    } else if (decodedData === 403) {
      res.sendStatus(403);
    } else {
      req.body.userid = decodedData;
      next();
    }
  },

  // Logout and remove all tokens
  async logout(req, res) {
    const { refreshToken } = req.body;

    if (await auth.tokenPresence(refreshToken)) {
      const deleted = await auth.distroyTokens(refreshToken);
      res.json({ Logout: !!deleted });
    } else {
      res.status(400).send('Data Tempered or Missing');
    }
  },

  // get new auth token from refresh token
  async getRefreshToken(req, res) {
    const refreshToken = req.body.refresh_token;

    res.json(await auth.getNewAuthToken(refreshToken));
  },

};
