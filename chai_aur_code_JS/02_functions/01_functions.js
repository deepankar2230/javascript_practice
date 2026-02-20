//! Functions 

function sayMyName(){
    console.log('hello');
    console.log('world');
    
}
// sayMyName()

function addTwoNumbers(number1, number2){
    return number1+number2
}

// const result = addTwoNumbers(5,8)
// console.log("result:", result);

function calculate(...num){
    return num
}

// console.log(calculate(4,5,3,9,2));

const user = {
    username: "deepak2230",
    price: 999
}

function handleObject(anyobject){
    console.log(`${anyobject.username} just logged in`);
    
}
// handleObject(user)

const newArray = [200,400,500,600]

function returnArray(getArray){
    return getArray[0]
}
console.log(returnArray(newArray));
