//Primitive (Copy is sent not reference)

// 7 types -> String, Number, Boolean, Null, Undefined, Symbol, Bigint

//Reference (Non-Primitive)

//Array, Objects, Functions

const Heros = ["Salman", "Shahrukh", "Hritik"];
let myObj = {
    name: "Prem",
    age: 18,
}

const myFunc = function(){
    console.log("Hello World");
}

let OutsideTemp = null

console.log(typeof(OutsideTemp)); //Object


//Stack(Primitive)  Heap(Non-Primitive)