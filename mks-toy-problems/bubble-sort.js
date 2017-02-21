/*
Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

If the first element is greater than the second element, it swaps the two.
It then compares the second to the third, and the third to the fourth, and so on.
In this way, the largest values ‘bubble’ to the end of the array.
Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
Implement a function that takes an array and sorts it using this technique.

NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).
 */

var bubbleSort = function(array) {
  var counter = 0;
  var sort = function(array, counter){
    if(counter === array.length-1){
      return array;
    }
    for(var i =0;i<array.length; i++){
      if(array[i]>array[i+1]){
        var second = array[i+1];
        array[i+1] = array[i];
        array[i] = second;
      }
    }
    sort(array,counter+1);
  };
  sort(array,counter);
  return array;
};

// Solution 2
var swap = function (i, j, array) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
};

var bubbleSort = function (array) {
  var len = array.length;
  for (var i = 0; i < len - 1; i++) {
    var swaps = false;
    for(var j = 0; i < len-1-i; j++) {
      if (array[j] < array[j + 1]) {
         swaps = true;
         swap(j, j + 1, array);
      }
    }
    if (!swaps) { break; }
  };
  return array;
};
