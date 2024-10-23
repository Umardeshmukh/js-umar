// Functions

function calculateCartValue(...num1){
    return num1
}
// console.log( calculateCartValue(234,214,100));

const user = {
    username: "Umros",
    price: 199

}
function handleObject(anyobj){
    console.log(`Username is ${anyobj.username} and 
    price is ${anyobj.price}`);
    
}
// handleObject(user)


handleObject({
    username : "sam",
    price : 399
})

const myNewArray =[200,400,500,100]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,090,600,1000]));
