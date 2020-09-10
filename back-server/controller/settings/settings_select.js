const pool = require('../../db/db');

module.exports = {

  async getSettings(req, res) {
    let selectQuery = 'SELECT address, email, support_phone as supportPhone, alt_phone as altPhone, facebook_url as facebookUrl, twitter_url as twitterUrl, youtube_url as youtubeUrl, instagram_url as instagramUrl, sId as sid';
    selectQuery += ' FROM `site_settings` ';
    selectQuery += ' WHERE site_settings.sId';

    pool.query(selectQuery)
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        console.log('Fet settings Query Error', err);
        res.end({ settings_selected: false });
      });
  },

  async singleSettings(req, res) {
    const { sid } = req.params;

    let selectQuery = 'SELECT address, email, support_phone as supportPhone, alt_phone as altPhone, facebook_url as facebookUrl, twitter_url as twitterUrl, youtube_url as youtubeUrl, instagram_url as instagramUrl, sId as sid';
    selectQuery += 'FROM `site_settings`';
    selectQuery += 'WHERE site_settings.sId';
    selectQuery += ' AND sId = ?';

    pool.query(selectQuery, [sid])
      .then((row) => {
        res.send(row);
      })
      .catch((err) => {
        res.end({ single_settings_selected: false });
        throw err;
      });
  },
};
