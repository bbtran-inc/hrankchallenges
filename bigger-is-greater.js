// https://www.hackerrank.com/challenges/bigger-is-greater

// Current solution. working need to fix bug

function processData(input) {
    var newInput = input.split("\n");
    for(var i=1; i<newInput.length; i++) {
        if(findNextLargest(newInput[i]) === newInput[i]){
            console.log("no answer");
        } else {
            console.log(findNextLargest(newInput[i]));
        }
    }
}

function findNextLargest(input) {
      var charArr = input.split('');
    var i = charArr.length-1;
    var j = charArr.length-1;

    while (i>=0) {
        if( charArr[i] < charArr[i+1] ) {
            break;
        } else {
            i--;
        }
    }
    while (j>=0 ){
        if(charArr[i] < charArr[j]) {
            break;
        } else {
            j--;
        }
    }
    var temp = charArr[i];
    charArr[i] = charArr[j];
    charArr[j] = temp;
    var firstHalf = charArr.splice(0, i || 1);
    var secondHalf = charArr;
    if( j-i > 1) {
        secondHalf.reverse();
    }
    return firstHalf.concat(secondHalf).join('');
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
