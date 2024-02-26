// immediately invoked function expressions (IIFE)

(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED 2 ${name}`);
})("krishna")


//chai()