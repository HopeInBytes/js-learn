//type of data -primitive and non-primitive
//# primitive =>7 types
//7 type: String, Number, Boolean, null, undefine, Symbol, BigInt

//const score = 100
//const scoreValue = 100.56

//const isLoggedIn = false
const outsideTemp= null 
//let userEmail;
const id= Symbol('123')
const anotherId = Symbol('123')
    console.log(id === anotherId);

    const heros =["superman", "batman"];
    let myObj={
        name: "partiksha",
        age: 29

    }
    console.log(heros);
    console.log(myObj);

    const myFunction = function(){
        console.log("hello paratiksha");
    }
console.log(typeof outsideTemp)

//Reference (non -primitive)
//Array, Objects, Functions
//Imp: if want to master in JS web event , learn browser Events, object 
//JavaScript is a dynamically typed language. 
// Dynamic Typing means that you do not need to explicitly 
// specify the type of a variable when you declare it.

//stack (primitive), heap(non-primitive)Memory used
let myYoutubename ="code with harry"
let anotherName = myYoutubename;
anotherName = "chai or code"
console.log(myYoutubename)
console.log(anotherName)

let userOne={
    name: "pratik",
    age:29 
}

let userTwo= userOne   

userTwo.name="Pratiksha"
console.log(userOne.name);
console.log(userTwo.name);