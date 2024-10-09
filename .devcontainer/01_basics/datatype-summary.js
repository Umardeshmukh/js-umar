
// // Prrimitive 

// // 7 types : String , Number , Boolean , null , undefined ,  Symbol, BigInt

// // JS is a Static language or Dynamically typed ?
//Js is a Dynamically typed language
// Dynamically Typed:
// Variable types are determined at runtime, not at compile time. This means you don't have to declare the type of a variable when you create it.
// A variable can hold a value of any type, and that type can change during execution.
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


// // Reference (Non primitive)
// // Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
// Reference (Non primitive)

// Array, Objects, Functions
 // Stack memory is used 
// Heap memory is used in Non Primitive type.

let myYoutubename = "UD11"
let anothername = myYoutubename
anothername = "Umar"
console.log(anothername);
let a = 280 /12
console.log(a);
