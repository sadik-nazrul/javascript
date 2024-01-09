/*
For bases of saving on menu datatypes devided 2 type
# primitive = copy show koray
# Non-primitive = Main change hoy ebong show koray

JavaScript is a dynamically typed language
*/

// # primitive - 7 types : String, Number, Boolean, null, unbdefined, Symbol, BigInt

let name = "sadik" // string
let age = 26 // number
let isLogedIn = true // boolean
let outSideTemp = null // object
let have; // undefined

// ****** Symbol *******
const id = Symbol('1234Adb') // symbol
const anotherId = Symbol('1234Adb') // symbol

// console.log(id === anotherId);

// ****** BigInt *******

const bigNumber = 23456409837638947453463456n // bigint

// console.log(typeof(bigNumber));


// # Reference (Non Primitive) - Array, Objects, Functions

const heros = ["Shaktiman", "naga", "ironman"]; // object

let myObj = {
    name: "Sadik",
    age: "26"
} // object

const myFunc = function(){
    console.log("Hello World");
} // function

// console.log(typeof(myFunc));

// ******* Check typeOf to show bellow results ********

// String => string
// Number => number
// Boolean => boolean
// null => object
// undefined => undefined
// Symbol => symbol
// BigInt => bigint
// Array => object
// Object => object
// Function => function



// Doc link: https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++ Memories ++++++++

//  Stack (Primitive), Heap (Non-Primitive)

let myName = "Sadik"
let anotherName = myName

anotherName = "Nazrul"

// console.log(myName);
// console.log(anotherName);

let userOne = {
    name: "Shohidul",
    email: "shohidul@google.com"
}

let userTwo = userOne

userTwo.email = "shohidul@youtube.com"
userTwo.name = "Sadik"

console.log(userTwo);
console.log(userOne);