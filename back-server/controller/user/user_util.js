/* eslint-disable */

class UserUtility {
  filterGender(gender) {
    let modifiedGender;
    const serilizeGender = gender.toLowerCase();
    switch (true) {
      case serilizeGender === 'male' || 'm':
        modifiedGender = 'M';
        break;
      case serilizeGender === 'female' || 'f':
        modifiedGender = 'F';
        break;
      case serilizeGender === 'others' || 'o':
        modifiedGender = 'O';
        break;
      default:
        modifiedGender = false;
    }
    return modifiedGender;
  }
}

module.exports = new UserUtility();
