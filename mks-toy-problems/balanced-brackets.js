/* Balanced Brackets
Given a string, return true if it contains all balanced parenthesis (), curly-brackets {}, and square-brackets [].
*/

function isBalanced (str) {
  let newStr = str.split('');
  let brackets = [];
  let checkBrackets = {
    '[':']',
    '{':'}',
    '(':')'
  };
  for (let i = 0; i<newStr.length; i++){
    if ( ['{','(','[','}',')',']'].includes(newStr[i])) {
      brackets.push(newStr[i]);
      if (brackets.length > 1) {
        if (checkBrackets[brackets[brackets.length-2]] === newStr[i]) {
          brackets.pop();
          brackets.pop();
        }
      }
    }
  }
  return (brackets.length === 0);
}

// Solution 2

const balancedParens = function (input) {
  const stack = [];
  const pairs = { '{': '}', '[': ']', '(': ')' };

  for (let i = 0; i < input.length; i++){
    const chr = input[i];

    if (pairs[chr]) {
      stack.push(chr);
    } else if (chr === '}' || ']' || ')') {
      if (pairs[stack.pop()] !== chr) {
        return false;
      }
    }
  }
  // return false if any unclosed brackets remain
  return stack.length === 0;
};
