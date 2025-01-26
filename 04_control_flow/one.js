//if
const isUserloggedIn = true
const temperature = 43
// if(temperature === 43){
//         console.log("Less than 50");
// }
// else{
//     console.log("temperature is greater than 50.")
// }
//<, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score>100){
//     let power = "fly"
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);

//shorthand notation

// const balance = 1000

// // if(balance>500) console.log("test"), console.log("test");

// if(balance < 500){
//     console.log("Less than 500");
// } else if(balance < 750){
//     console.log("Less than 750");
// } else if(balance < 900){
//     console.log("Less than 900");
// } else{
//     console.log("Less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedfromGoogle = false
const loggedfromGmail = true

if(userLoggedIn && debitCard && 2==6){
        console.log("Allow to buy Course.");
}

if(loggedfromGoogle || loggedfromGmail){
    console.log("Allow to logged In.");
}