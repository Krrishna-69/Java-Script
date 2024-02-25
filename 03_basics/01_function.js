function sayMyName(){
    console.log("k");
    console.log("r");
    console.log("i");
    console.log("s");
    console.log("h");
}
//sayMyName()

// function addTwoNumbers(number1, number2){ //parameter
//     console.log(number1+number2);
// }
function addTwoNumbers(number1, number2){ //parameter
    // console.log(number1+number2);
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 4) //argument

//console.log("result : ", result);

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("krishna"))
//console.log(loginUserMessage());

function calculatCartPrice(...num1){
    return num1
}
//console.log(calculatCartPrice(200, 400, 599, 399));

const user = {
    username: "krishna",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 5, 799, 90]));