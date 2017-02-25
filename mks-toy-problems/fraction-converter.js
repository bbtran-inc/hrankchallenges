/*
Write a function that takes a number as its argument and returns a string that represents that number’s simplified fraction.
Whole numbers and mixed fractions should be returned as improper fractions.

Examples
0.5 ==> "1/2"
3 ==> "3/1"
2.5 ==> "5/2"
2.75 ==> "11/4"
 */

function fractionConverter (number) {
  let numerator = number;
  let denom = 1;
  while(numerator % 1 !== 0) {
    numerator = numerator*100;
    denom = denom*100;
  }
  let gcf = denom;
  let divisor = 0;
  while (gcf !== 0) {
    if(numerator % gcf===0 && denom%gcf===0) {
      // console.log(divisor);
      divisor = gcf;
      break;
    }
    gcf -=1;
  }
  return (numerator/divisor)+'/'+(denom/divisor);
}
