/*
Your algorithms have become so good at predicting the market that you now know what the share price of Wooden Orange Toothpicks Inc. (WOT) will be for the next N days.

Each day, you can either buy one share of WOT, sell any number of shares of WOT that you own, or not make any transaction at all. What is the maximum profit you can obtain with an optimum trading strategy?

Input Format:
The first line contains the number of test cases T. T test cases follow:
The first line of each test case contains a number N. The next line contains N integers, denoting the predicted price of WOT shares for the next N days.

Output Format:
Output T lines, containing the maximum profit which can be obtained for the corresponding test case.

Sample Input:
3
3
5 3 2
3
1 2 100
4
1 3 1 2

Sample Output:
0
197
3

Explanation
For the first case, you cannot obtain any profit because the share price never rises. 
For the second case, you can buy one share on the first two days, and sell both of them on the third day. 
For the third case, you can buy one share on day 1, sell one on day 2, buy one share on day 3, and sell one share on day 4.

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
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var N = parseInt(readLine());
        prices = readLine().split(' ');
        prices = prices.map(Number);
        // only purchase a share if the stock price is higher on the following days
        var profit = 0;
        var shares = 0;
        var highPriceArr = new Array();
        for(var j=prices.length-1; j>=0; j--) {
            highPriceArr[prices.length] = Number.NEGATIVE_INFINITY;
            highPriceArr[j] = Math.max(prices[j], highPriceArr[j+1]);
        }
        for(var i = 0; i<prices.length; i++) {
            var price = prices[i];
            var currentMax = highPriceArr[i+1];
            if(price < currentMax ) {
                shares++;
                profit -= price;
            } else if (price > currentMax ) {
                profit += shares * price;
                shares = 0;
            }
        }
        console.log(profit);
    }
    return 0;
}


/////////////// ALTERNATE SOLUTION ////////////////////

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var N = parseInt(readLine());
        prices = readLine().split(' ');
        prices = prices.map(Number);
        // only purchase a share if the stock price is higher on the following days
        var current_max = 0;
        var profit = 0;
        for(var i=prices.length-1; i>=0; i--){
            current_max = Math.max(current_max, prices[i]);
            profit += current_max - prices[i];
        }
        console.log(profit);
    }
    return 0;
}
