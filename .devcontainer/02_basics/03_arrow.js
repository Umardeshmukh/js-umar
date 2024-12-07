// const user ={
//     username : "umros",
//     price : 999,

//     welcomeMessage : function (){
//          console.log(`${this.username},welcome to website`);
//          console.log(this);
//     }

// }
// // user.welcomeMessage()
// // user.username ="Sam"
// // user.welcomeMessage()
// console.log(this);
// function cup(){
//     let username = "umros"
//     console.log(this.username);
    
//     console.log(this);

    
// }
// cup()
// const demo = function (){
//     let username= "umros"
//     console.log(this.username);
// }
// demo()
////////////////////ARROW FUCTION ///////////////

// const demo = () => {
//     let username= "umros"
//     console.log(this);
// }
// demo()

// const addTwo= (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo (3,4));
// if we wrape the fuction(Arrow) in curly braces
//  then return keyword is to be written, it is called  return explicit
 

// const addTwo = (num1,num2) => (num1+ num2) 
// we we use parantheses no need to use return statement its called  implicit 
//  console.log(addTwo (5,4));
 const addTwo = (num1,num2) => ({username:"umros"}) 
 console.log(addTwo (5,4));

 myArray = [2,3,4,5,6,2]
