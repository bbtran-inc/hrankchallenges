/*
Return an array that contains the power set of a given string. The power set is a set of all the possible subsets, including the empty set.

Make sure your code does the following:
All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.

Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are the same.

Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only contained one ‘a’. See the result below.

Examples

"a" ==> //[ "", "a" ]

"ab" ==> //[ "", "a", "ab", "b" ]

"horse" ==> //[ "", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos", "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ]

"obama" ==> //[ "", "a", "ab", "abm", "abmo", "abo", "am", "amo", "ao", "b", "bm", "bmo", "bo", "m", "mo", "o" ]

 */

// SOLUTION 1
function powerSet (string) {
  string = string || '';
  const options = {};  
  const results = {};
  for (let i = 0; i < string.length; i++) {
    options[string[i]] = true;
  }
  // console.log(Object.keys(options));
  string = Object.keys(options).join('');
  
  (function recurse(index,subset) {
    if ( index >= string.length) {
      if(!results[subset]){
        results[subset] = true;
      };
      return;
    }
    recurse(index+1, subset);
    recurse(index+1, subset+string[index]);
  })(0,'');
  return Object.keys(results);
}

// SOLUTION 2
function powerSet(str) { 
 str = str || '';
 var letters = {};
 var solutions = {};
 for(var i = 0; i < str.length; i++){
   letters[str[i]] = true;
 }
  
 str = Object.keys(letters).join('');
  
 var recurse = function(strSet){
   for(var i = 0; i < strSet.length; i++) {
     var subSet = strSet.substr(0, i) + strSet.substr(i+1, strSet.length);
      
     if (!solutions[subSet]) {
       solutions[subSet] = true;
       recurse(subSet);
     }
   }
 };
 recurse(str);
 return Object.keys(solutions).sort();
};

// SOLUTION 3
var removeDuplicates = function(str) {
  var alreadySeen = {};
  var result = '';
  for (var i = 0; i < str.length; i++) {
    var char = str[i]; 
    if (!alreadySeen[char]) {
      result += char;
      alreadySeen[char] = true;
    }
    console.log('result:', result);
    return result;
  }
};

var actualSolution = function(str) {
  return powerSet(removeDuplicates(str));
};

var prepend = function(char) {
  return function(str) {
    return char.concat(str);
  };
};
var powerSet = function(str) {
  string = removeDuplicates(str);
  console.log('string:',string)
  // Base case: The one subset of the empty
  // set is the empty set.
  if(string === null) {
    return [''];
  } else {
    var first = string[0];
    var rest = string.slice(1);
    // Avoid computing this twice
    psRest = powerSet(rest);
    return psRest.concat(psRest.map(prepend(first))).sort(); 
  }
};
