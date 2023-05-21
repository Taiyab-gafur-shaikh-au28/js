// Functions in Javascript

/*

//! Function Declaration/Definition/Statement

function square(number) {
    return number * number;
}

//! Function Expression :- store inside variable

const square = function (num) {    //* after square the fun has no name it also called anonymous fun or can be pass as a callback function
    return num * num;
}


//! First class function :- function can be treated as a variable that function are called FCF 

function square1(number) {
    return number * number;
}

function displaySquare(fn) {
    console.log( "Square is " + fn(5));
}

displaySquare(square1);

//! IIFE => Immediate Invoke Function Expression

(function sum(num){
    console.log(num+num);
})(5);


//! Closure : -> function bind together to it lexical environment it for a closure

for (var i = 0; i < 5; i++) {       // for var it will print 5 five time but for let it will print 0-4 it's block scope
    setTimeout(() => {
        console.log(i)
    },i*1000)
}


//! spread vs rest

//! spread

function square(num1 , num2){
    console.log(num1 * num2);
}

let arr = [5,6];
square(...arr);

//! Rest 
function square1(...nums){
    console.log(nums);
}

let arr1 = [5,6];
square1(...arr1);


//! arrow function

// 1 - Syntax

function square(num) {
    return num * num
}

const multiply = (num) => { return num * num};

// 2 - Implicit "return" keyword

function square(num) {
    return num * num
}

const multiply2 = (num) => { num * num};

// 3 - arguments keyword cannot have in arrow function

function square() {
    console.log(arguments)
}

const multiply3 = () => { console.log(arguments)};

square(1,2,3);
multiply3(1,2,3)
*/
// 4 => this keyword

let user = {
    username : 'user',

    rc1: () => {
        console.log(`Subscribe to ${this.username}`)    // it pointing to this global object (undefined)
    },

    rc2: function () {
        console.log(`Subscribe to ${this.username}`)    // it pointing to this object (user)
    }
}

user.rc1();
user.rc2();



















