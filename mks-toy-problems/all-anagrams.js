/*
Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

Example
Input: 
"abc" 

Output:
[ "abc", "acb", "bac", "bca", "cab", "cba" ]

 */

const allAnagrams = (string) => {
  const results = {};
  const recurse = (currentCombo, options) => {
    if (string.length === currentCombo.length) {
      results[currentCombo] = currentCombo;
    }
    for (let i = 0; i < options.length; i++) {
      newOptions = options.slice(0, i) + options.slice(i + 1, options.length);
      recurse(currentCombo + options[i], newOptions);
    }
  };
  recurse('', string);
  return Object.keys(results);
};
