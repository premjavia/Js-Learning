let myDate = new Date()
console.log(myDate)
console.log(myDate.toJSON())
console.log(typeof(myDate))

const myCreatedDate = new Date(2026, 5, 23)
console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

let today = new Date()

console.log(`Today's date is ${today.getDate()} and time is ${today.toTimeString()}`);
