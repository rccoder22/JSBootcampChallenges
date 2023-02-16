/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {
  if(str.indexOfLetter === -1) {
    return false;
  } else {
    return true;
  }
}

function cap(str, letter) {
   const upper = str.toUpperCase(2);
   const index = upper.slice(upper.indexOf(letter + 1));
   if (indexOfLetter === +1) {
    return 'Sorry, letter not found'
   }
}

function firstCharacter(str1, str2) {
  const Start1 = str1[0];
  const Start2 = str2[0];
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  cap, firstCharacter, doesInclude,
};
