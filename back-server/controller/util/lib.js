/* eslint-disable class-methods-use-this */
/** !***************************************************************************
  File functionality is written by soumitra patra .
  This file contains utility helper functions which are for
  reduct repetaion in code through out the application.
  this functionality comes with no warraty. mantainability and use
  of this file is fully responsible to developer.
****************************************************************************** */

const fpath = require('path');
const pool = require('../../db/db');

const ImageTimestamp = new Date().valueOf();

class Utility {
  /**
   *
   *  File uploading functionality in express js
   *  dependency is the express-uploader
   *  @param  {Object} givenImage requires file object
   *  in base64 format
   *  @param  {string} givenPath File path where file will
   *  upload . Path should not start with /
   */
  async ImageUpload(givenImage, givenPath) {
    /**
     *
     * creating promice and returning it so that
     * other functons which are calling this functionality
     * they dont get stuck in asynchronous execution fall.
     * promice will pause the program folw so that
     * this function get time to excute and return value
     */
    return new Promise((resolve, reject) => {
      // spleating image for adding timestamp category_images
      const splittedPath = fpath.parse(givenImage.name);

      // making image name with timestamp
      const modifiedFileName = splittedPath.name + ImageTimestamp + splittedPath.ext;

      // path where image will upload
      const uploadingPath = givenPath + modifiedFileName;

      // Takes a file path to move the file to that folder
      givenImage.mv(uploadingPath, async (err) => {
        if (err) {
          reject(new Error('file uploading error'));
        } else {
          resolve(await modifiedFileName);
        }
      });
    });
  }

  async execute(Query, args) {
    try {
      return await pool.query(Query, args)
        .then((res) => res);
    } catch (err) {
      return 'internal query err';
    }
  }
}

module.exports = new Utility();
