const name = "krishna"
const repoCount = 50

//console.log(name + repoCount +" value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("krishna ji")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h')); 

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-10, 2);
console.log(anotherString);


const newStringOne = "   Krishna   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20chaudary"
console.log(url.replace('%20', '-'));

console.log(url.includes('hit'));

console.log(gameName.split(' '));

