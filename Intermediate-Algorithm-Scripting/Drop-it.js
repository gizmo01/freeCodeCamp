/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
    let length = arr.length; //arr.length must be in variable
    // Drop them elements.
    for (let i = 0; i < length; i++) {
        if (func(arr[0])) {
            return arr;
        } else {
            arr.shift();
        }
    }
    return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
