// singlenton
 // object.create

 // object literals

 const mySym = Symbol("key1")

 const JsUser = {
    name: "krishna",
    [mySym]: "myKey1",
    age: 21,
    location: "indore",
    email: "krishna@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
 }
 console.log(JsUser.email);
 console.log(JsUser["email"]);
 console.log(typeof JsUser.mySym);


 JsUser.email = "krishna@chatgpt.com"
 //Object.freeze(JsUser)
 JsUser.email = "krishna@microsoft.com"
 console.log(JsUser);

 JsUser.greeting = function(){
    console.log("hello js user");
 }
 JsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
 }

 console.log(JsUser.greeting());
 console.log(JsUser.greeting2());