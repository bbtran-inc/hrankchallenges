/*
Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.
Your function should return the common characters in the same order that they appear in the first argument.
Do not return duplicate characters and ignore whitespace in your returned string.
Example: commonCharacters('acexivou', 'aegihobu')
Returns: 'aeiou'
*/

const commonCharacters = function (string1, string2) {
  let commanChars = '';
  const newStr = string1.toLowerCase().replace(/ /g, '');
  const newStr2 = string2.toLowerCase().replace(/ /g, '');
  for (let i = 0; i < newStr.length; i++) {
    if (newStr2.indexOf(newStr[i]) !== -1) {
      if (commanChars.indexOf(newStr[i]) === -1) {
       commanChars += newStr[i];
      }
    }
  }
  return commanChars;
};

// Soluction 2

let commonCharacters = function (str1, str2) {
  let common = intersection(objectify(str1), objectify(str2));
  return Object.keys(common).reduce(function(result, char){
    if (common[char]) { result += char; }
  return result;
}, '');
}

let intersection = function (set1, set2) {
  return Object.keys(set1).reduce(
    function (out, val) {
      if (val in set2) { out[val] = true; }
      return out;
    },
  {});
}
let objectify = function (str) {
   return str.split('').reduce(function (obj, char) {
     if (char.match(/[a-z]/i)) { obj[char] = true; }
     return obj;
   }, {});
}
