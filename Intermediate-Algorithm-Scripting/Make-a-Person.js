/*
Fill in the object constructor with the following methods below:
    getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
Run the tests to see the expected output for each method.
The methods that take an argument must accept only one argument and it has to be a string.
These methods must be the only available means of interacting with the object.
*/

let Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let fullname = firstAndLast.split(" ");
  this.getFirstName = function() {
    return fullname[0];
  };
  this.getLastName = function() {
    return fullname[1];
  };
  this.getFullName = function() {
    return `${fullname[0]} ${fullname[1]}`;
  };
  this.setFirstName = function(first){
    fullname[0] = first;
  };
  this.setLastName = function(last){
    fullname[1] = last;
  };
  this.setFullName = function(firstAndLast){
    fullname = firstAndLast.split(" ");
  }
};

let bob = new Person('Bob Ross');
bob.getFullName();
