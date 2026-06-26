const myArray = [1,2,3,4,5]

// myArray.push(6)
// console.log(myArray)
// myArray.pop();
// console.log(myArray)


// myArray.unshift(9)
// console.log(myArray);
// myArray.shift()
// console.log(myArray);

// console.log(myArray.includes(9))

// const newArray = myArray.join()
// console.log(newArray);
// console.log(typeof(newArray));


//slice splice

console.log("A ", myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1)
console.log("B ", myArray)

const myn2 = myArray.splice(1,3)
console.log("C ", myArray)
console.log(myn2);

