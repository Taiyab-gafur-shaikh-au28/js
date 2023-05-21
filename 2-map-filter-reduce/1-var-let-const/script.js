// Map Filter Reduce

//! What is Map

/*
It is a method to create a new array from existing one by applying function to each element of the first array 
*/

const nums = [1, 2, 3, 4];

const newMap = nums.map((num, i, array) => {
    // it take 3 parameters 1.currentElement 2.Index 3.actualArray
    return num * 5 + i;
});

console.log(newMap);


//! What is Filter

/*
It take each element in an array & it applying a conditional statement against 
(if true the push into new array if not the not pushed)
*/

const array = [1, 2, 3, 4];

const newFilter = array.filter((num) => {
    return num > 2;
});

console.log(newFilter);


//! What is Reduce

/*
It reduces an array of values down to just one value
*/

const sum = [1, 2, 3, 4];

const newReduce = sum.reduce((acc, num) => {
    return acc + num;
}, 0);

console.log(newReduce);


//! Polyfill for map

// Here prototype is adding this myMap function to this method of this array in our current js file

Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
}

let arrays = [1, 2, 3, 4, 5];

let newArray = arrays.myMap((num, i, array) => {
    return num * 3;
})

console.log(newArray);


//! Polyfill for filter

Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            temp.push(this[i]);
        }
    }
    return temp;
}

let arrays2 = [1, 2, 3, 4, 5];

let newArray2 = arrays.myFilter((num, i, array) => {
    return num > 3;
})

console.log(newArray2);


//! Polyfill for reduce

//? Note :- if we fail to give initialValue it will take first element as initialValue & 2 elem as currentValue 
//* it take 2 thing callback & initialValue

Array.prototype.myReduce = function (cb, initialValue) {
    var accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
        // todo: if present then we go in acc if not present then we will assign it first element of the array      
    }
    return accumulator;
}

let arrays3 = [1, 2, 3, 4];

let newArray3 = arrays3.myReduce((acc, cur, i, array) => {
    return acc + cur;
}, 0);

console.log(newArray3);


//! Map vs ForEach

//* this both are arr fun to loop through the items of the array

const arr = [2,5,3,7,9];

const sum1 =  arr.map((num) => {    // chaining is possible , return new array , does not effect on org array
    return num * 2;
})

const sum2 = arr.forEach((num , i) => {  // chaining is not possible , doesn't return anything , effect on org array
    arr[i] = num + 2;
})

console.log(sum1,sum2,arr);









