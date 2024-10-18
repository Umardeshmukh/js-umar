//singleton 
// object.create


// object literals
const mySym = Symbol("Key1")
const JsUser ={

    [mySym]: "key1",
    name: "Umar",
    "full name": "Umar Deshmukh",
    age: 24,
    location: "Auarangabad",
    email : "something@google.com",
    isLoggedIn : false,
    lastLoggedIn : ["Mondya","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.greeting = function(){

    console.log("Hello Js User");
    
}
console.log(JsUser.greeting());


JsUser.greeting2 = function(){

    console.log(`Hello , ${this.name}`);
    
}

console.log(JsUser.greeting2());
