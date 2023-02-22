/* eslint-disable no-unused-vars */
function multiply(arr) {
const flatArr = arr.flat(multiply);
console.log(flatArr);
}

function includesCopy(arr, searchValue) {
  const doesInclude = includesCopy(arr);
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === searchValue) {
      return true
    }
    return false
  }
}

function inventory(arr) {
 const newArr = (items);
 const arr1 = (returnedValue);
 const arr2 = newArr.concat(arr1);
 console.log(arr2);
}

function camelCase(str) {
 const str = returnedValue.split('');
 const str1 = returnedValue.join('');
 console.log(str);
}

function joiner() {;
const str = arr.join('returnedValue');
console.log(str);
}

module.exports = {
  multiply, includesCopy, inventory, camelCase, joiner,
};
