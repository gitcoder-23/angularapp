const pool = require('../../db/db');

module.exports = {
  async putSettings(req, res) {
    const address = req.body.address;
    const email = req.body.email;
    const supportPhone = req.body.support_phone;
    const altPhone = req.body.alt_phone;
    const facebookUrl = req.body.facebook_url;
    const twitterUrl = req.body.twitter_url;
    const youtubeUrl = req.body.youtube_url;
    const instagramUrl = req.body.instagram_url;
    const { sid } = req.params;

    let updateQuery = 'UPDATE `site_settings` SET ';
    updateQuery += 'address= ?,';
    updateQuery += 'email= ?,';
    updateQuery += 'support_phone= ?,';
    updateQuery += 'alt_phone= ?,';
    updateQuery += 'facebook_url= ?,';
    updateQuery += 'twitter_url= ?,';
    updateQuery += 'youtube_url= ?,';
    updateQuery += 'instagram_url= ?';
    updateQuery += 'WHERE sId= ?';
    pool.query(updateQuery,
      [address, email, supportPhone,
        altPhone, facebookUrl, twitterUrl, youtubeUrl, instagramUrl, sid])
      .then((row) => {
        if (row) {
          res.send({ settings_updated: true });
        }
      })
      .catch((err) => {
        res.end({ settings_updated: false });
        throw err;
      });
  },
};
