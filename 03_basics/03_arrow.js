const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);

        console.log(this);
    }
}
 //user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
//console.log(this);

// function chai(){
//     let username = "krishna"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "krishna"
//     console.log(this.username);
// }


const chai = () => {
    let username = "krishna"
    console.log(this);
}
//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 // explicit
// }

// const addTwo = (num1, num2) =>  num1 + num2

//const addTwo = (num1, num2) =>  (num1 + num2) // implicit

const addTwo = (num1, num2) => ({username: "krishna"})

console.log(addTwo(3,4));