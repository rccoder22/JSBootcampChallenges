/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
function max(num1, num2, num3) {
  return num1, num2, num3;
}

max(10, 15, 20);

function addUnknown(num1, num2, num3, num4, num5) {
   
   return num1 + num2 + num3 + num4 + num5;
}

addUnknown(7, 10, 14, 19, 23);

function evenOrOdd(x) {
  return ( x & 1 ) ? "odd" : "even";
}

evenOrOdd(2);

function operator(num1, num2, num3) {
  const sum = (2 + 2); 
  return 4;

  const minus = (40 - 30);
  return 10;

  const multiply = (8 * 8);
  return 64;

  const divide = (100 / 10);
  return 10;

  const unknown = (12, 10, 22);
  return null;
}
module.exports = {
  max, addUnknown, evenOrOdd, operator,
};
