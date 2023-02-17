/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function factorial(num) {
 let factorial = 1 
 for(let i = 1; i < 5; i++) {
  factorial *= i;
  console.log(factorial);
 }
}

function stringReverse(str) {
 let backwardStr = " "
 for(let i = str.length-1; i >= 0; i--) {
  backwardStr += str[i];
  console.log(backwardStr);
 }
}

// do not use built in slice method.
function slicer(originalString, startIdx, endIdx) {
 const str = ''
 for(let i =str.length; i > 0; i++)
 console.log(str);
}

function addTheEvens(num) {
  const num = 20
  for(let i = 8; i <= num; i += 2) {
    console.log(i);
  }
}

module.exports = {
  factorial, stringReverse, slicer, addTheEvens,
};
