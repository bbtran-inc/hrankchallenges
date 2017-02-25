/*
Character Frequency
Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.
 */

const characterFrequency = (string) =>  {
  let chars = {};
  for(let i=0; i<string.length; i++){ 
    if (!chars.hasOwnProperty(string[i])){
      chars[string[i]] = 1;
    } else {
      chars[string[i]]++;
    }
  }
  let arr = [];
  for( let key in chars){
    arr.push([key, chars[key]]);
  }
  arr.sort((a,b) => {
    if (a[1] === b[1]) {
      if(a[0] > b[0]) {
        return 1;
      } else {
        return -1;
      }
    } else {
      if (a[1] < b[1]) {
        return 1;
      } else {
        return -1;
      }
    }
  });
  console.log(arr);
  return arr;
};
