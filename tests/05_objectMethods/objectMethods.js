/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const greet = {
  firstName: 'Richard',
  sayHello: function() {
    return `Hello, I'm ${greet.firstName}`
  }  
};

const calc = {
  total: 0
  // object methods
  add: function () {
    return `${this.total + 3}` 
  }
  subtract: function () {
    return `${this.total - 1}`
  }
  clear: function () {
    return `${this.total - 2}` 
  }
};

module.exports = { greet, calc };
