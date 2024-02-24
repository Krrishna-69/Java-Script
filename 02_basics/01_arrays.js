const myArr1 = [0, 2, 4, 6, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr1[1]);

// array methods

// myArr1.push(9)
// myArr1.push(7)
// myArr1.pop()

// myArr1.unshift(9)
// myArr1.shift()

// console.log(myArr1.includes(9));
// console.log(myArr1.indexOf(6));

// const newArr = myArr1.join()

// console.log(myArr1);
// console.log(newArr);
// console.log(typeof newArr);

// slice , splice

console.log("A ", myArr1);

const myn1 = myArr1.slice(1, 3)

console.log(myn1);
console.log("B ", myArr1);

const myn2 = myArr1.splice(1, 3)
console.log("C ", myArr1);
console.log(myn2);



