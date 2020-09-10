// eslint-disable-next-line spaced-comment
/*disable elslint*/
const jwt = require('jsonwebtoken');
const fs = require('fs');
const storeRF = require('./store_RF_token');

// For generate authorise token
const AUTH_PRIVATE_KEY = fs.readFileSync(
  `${__dirname}/keys/auth_private.pem`,
  'utf-8',
);
// const AUTH_PUBLIC_KEY = fs.readFileSync(
//     __dirname + '/keys/auth_public.pem',
//     'utf-8',
// );

// For generate refresh token
const REFRESH_PRIVATE_KEY = fs.readFileSync(
  `${__dirname}/keys/refresh_private.pem`,
  'utf-8',
);
// const REFRESH_PUBLIC_KEY = fs.readFileSync(
//     __dirname + '/keys/refresh_public.pem',
//     'utf-8',
// );

//* *private
const generateAuthoriseToken = async (payload) => await jwt.sign({ payload }, AUTH_PRIVATE_KEY, { expiresIn: '15m' });

//* ** private
// Guarde endpoint
const regenerateAuthoriseToken = async (refreshPayload) => {
  if (refreshPayload == null) return 401;

  console.log('regenerate autoris token', refreshPayload);
  // if refresh token on database then trust user and sign jwt
  if (await storeRF.checkToken(refreshPayload)) {
    return await jwt.verify(refreshPayload,
      REFRESH_PRIVATE_KEY,
      async (err, decoded) => {
        if (!err) {
          const accessToken = await generateAuthoriseToken(decoded);
          const newAccess = { accessToken };
          return await newAccess;
        }
        return 403;
      });
  }
  return 401;
};

module.exports = {

  // for login and registration
  async generateTokens(payload) {
    const authoriseToken = await generateAuthoriseToken(payload);

    const refreshToken = jwt.sign(payload, REFRESH_PRIVATE_KEY);

    // save token into db
    storeRF.storeToken(refreshToken);

    return await {
      authorise_token: authoriseToken,
      refreash_token: refreshToken,
    };
  },

  // After every 15 minut nees to regenerate autorise token
  // in order to continue session

  async verifyToken(authHeader) {
    // spleating(authorise token) barer and token
    const token = authHeader && authHeader.split(' ')[1];
    console.log('auth verifytoken ==>', authHeader, '\n\n');
    console.log('==========================');

    if (token == null) return 401;

    return await jwt.verify(token, AUTH_PRIVATE_KEY, async (err, decoded) => {
      // error means jwt is expired then regenerate authorise token
      if (err) {
        return 403;
      }
      return decoded;
    });
  },

  // Regenerate auth token
  async getNewAuthToken(refreshPayload) {
    if (refreshPayload == null) {
      return 401;
    }
    return await regenerateAuthoriseToken(refreshPayload);
  },

  async distroyTokens(refreshToken) {
    return await storeRF.removeToken(refreshToken);
  },

  async tokenPresence(refreshToken) {
    return !!await storeRF.checkToken(refreshToken);
  },

};
