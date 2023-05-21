// var vs let vs const

/*
//! Scope :- a certain region of a program where a defined variable can be exist & can be recognized & beyond that it cannot be recognized

//* there are 3 type of scope 1) global 2) block 3) functional

var a = 5;          // global scope can be access anywhere
console.log(a);

{
    let b = 10;     // it's a block scope cannot access outside of block same for const
    console.log(b);
}


//! Shadowing 

function test() {
    let a = "Hello";
    
    if (true) {
        let a = "Hi";               // hear a value will shadow above a overlap the value 
        console.log(a);
    }
    
    console.log(a);
}

test();

//! Illegal Shadowing :- while shadowing a variable, it should not cross the boundary of the scope, 

function test2() {
    
    var a = "Hello"
    let b = "Bye"
    
    if (true) {
        let a = "Hi" 
        var b = "Goodbye"
        console.log(a);
        console.log(b);
    }
}

test2();

//! Declaration

var a;      // var can redeclare with same name
var a;

let b;      // it will give error (SyntaxError: Identifier 'b' has already been declared)
// let b;

// const c;    // SyntaxError: Missing initializer in const declaration
//const c;

*/

//! Declaration without initialization

// const c;    // SyntaxError: Missing initializer in const declaration

//! Re-Initialization

//cannot do with const

//! Hoisting :- during creation phase js engine move function and variable to top of the code

//? Note :- while running the code it has 2 phases creation phase & execution phase 


console.log(count);

// var a = 10;
var count1 = 10;
let count = 20;

/// Temporal dead zone => they are in the scope but not yet been declared
