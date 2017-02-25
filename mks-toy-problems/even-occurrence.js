/*
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

Examples
Input:
arr:
[ 1, 3, 3, 3, 2, 4, 4, 2, 5 ] 2

Output:
arr:
[ "cat", "dog", "dig", "cat" ]  "cat"

 */

const evenOccurrence = (arr) => {
  let occurrences = {};
  let firstEven = null;
  for(let i=0; i<arr.length; i++){
    if(occurrences.hasOwnProperty(arr[i]) === false){
      occurrences[arr[i]]=[i,1,arr[i]];
    } else {
      occurrences[arr[i]][1]++;
    }
  }
  for(let key in occurrences){
    console.log(occurrences[key]);
    if(occurrences[key][1] % 2 === 0){
      if(firstEven=== null || occurrences[key][0]<firstEven[0]){
        firstEven = occurrences[key];
      }
    }
  }
  if(firstEven !== null){
    return firstEven[2];
  } 
  return null;
};
