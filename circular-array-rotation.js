/*
https://www.hackerrank.com/challenges/circular-array-rotation

John Watson performs an operation called a right circular rotation on an array of integers,[a0, a1, ... a(n-1)]. After performing one right circular rotation operation, the array is transformed from [a0, a1, ... a(n-1)] to [a(n-1), a0, ... a(n-2)].

Watson performs this operation k times. To test Sherlock's ability to identify the current element at a particular position in the rotated array, Watson asks q queries, where each query consists of a single integer, m, for which you must print the element at index m in the rotated array (i.e., the value of a(m)).

Sample Input:
3 2 3
1 2 3
0
1
2

Sample Output:
2
3
1

Explanation:
After the first rotation, the array becomes [3,1,2]. 
After the second (and final) rotation, the array becomes [2,3,1].

Let's refer to the array's final state as array b. For each query, we just have to print the value of b(m) on a new line:
m=0, so we print 2 on a new line.
m=1, so we print 3 on a new line.
m=2, so we print 1 on a new line.

 */

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    var q = parseInt(n_temp[2]);
    a = readLine().split(' ');
    a = a.map(Number);
    for(var i=0; i<k; i++) {
        var temp = a.pop();
        a.unshift(temp);
    }
    for(var a0 = 0; a0 < q; a0++){
        var m = parseInt(readLine());
        console.log(a[m])
    } 
}
