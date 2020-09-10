const pool = require('../../db/db');

module.exports = {
  async addSettings(req, res) {
    const address = req.body.address;
    const email = req.body.email;
    const supportPhone = req.body.support_phone;
    const altPhone = req.body.alt_phone;
    const facebookUrl = req.body.facebook_url;
    const twitterUrl = req.body.twitter_url;
    const youtubeUrl = req.body.youtube_url;
    const instagramUrl = req.body.instagram_url;

    let insertQuery = 'INSERT INTO `site_settings`(`address`,`email`,`support_phone`,`alt_phone`,`facebook_url`,`twitter_url`,`youtube_url`,`instagram_url`';
    insertQuery += ') VALUES (';
    insertQuery += ' ?,';
    insertQuery += ' ?,';
    insertQuery += ' ?,';
    insertQuery += ' ?,';
    insertQuery += ' ?,';
    insertQuery += ' ?,';
    insertQuery += ' ?,';
    insertQuery += ' ?';
    insertQuery += ' )';
    pool.query(insertQuery, [address, email, supportPhone,
      altPhone, facebookUrl, twitterUrl, youtubeUrl, instagramUrl])
      .then((row) => {
        if (row) {
          res.send({ settings_inserted: true });
        }
      })
      .catch((err) => {
        res.end({ settings_inserted: false });
        throw err;
      });
  },
};
