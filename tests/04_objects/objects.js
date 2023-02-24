/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function deleteProp(obj, prop) {
 delete objectItems.firstName;
 console.log(objectItems.firstName);
 delete objectItems.age;
 console.log(objectItems.age);
 objectItems.firstName(Tom);
 console.log(objectItems.firstName);
 objectItems.age(25);
 console.log(objectItems.age);
 console.log(objectItems);
}

function numObjectProps(obj) {
  delete objectItems.age;
  console.log(objectItems.age);
  delete objectItems.occupation;
  console.log(objectItems.occupation);
  let returnedValue = 2;
 for(let i = 0; i <= objectItems.length; i++) {
  return returnedValue;
 }
 console.log(objectItems);
}

function shoppingCart(cart) {
  const values = cartItems.amount;
  const sum = values.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0) 
  console.log(sum);

  const totalObj = sum(obj1, obj2);
  if(obj1 !== obj2) {
    return false
  } else  {
    return true
}

function compareObjects(obj1, obj2) {
  if(obj1 === obj2) {
    return true
  } else {
    return false
  }
}

module.exports = {
  compareObjects, deleteProp, numObjectProps, shoppingCart,
};
