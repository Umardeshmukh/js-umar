 const appUser = new Object()
//The above is singleton object 


const appUser2 = {}  // this in non singleton user
// console.log(app);

appUser2.id ="123abc"
appUser2.name = "John"
appUser2.isLoggedIn =false
//  console.log(appUser2);
 


const regularUser = {
    email: "something@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Umar",
            lastname: "Deshmukh"
        }
    }
}
 
// console.log(regularUser.fullname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 ={obj1,obj2}
// const obj3 = Object.assign({} ,obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);


const users =[
    {


        id : 1,
        email: "u@gmail.com",

    }
]
// users[1].email
console.log( appUser2);
console.log(Object.keys(appUser2)); // it return datatype array
console.log(Object.values(appUser2));

console.log(Object.entries(appUser2));
console.log(appUser2.hasOwnProperty('IsLoggedIn'));
