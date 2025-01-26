const userEmail = []

if(userEmail){
    console.log("got user email");
    }else{
        console.log("Don't have email");
    }

// notes
//falsy values
//false, 0, -0, BigInt 0n, "", null, undefined NaN
//truthy value below
// true, "0", 'False', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("array is empty");
    
// }

const emptyObj ={}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//nullish coalescing Operator(??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 13

val1 = null ?? 10 ?? 20
console.log(val1);

//tarnary operator
//condition ? true : false

const icePrice = 100
icePrice <=80 ? console.log("less than 100") : console.log("more than 80");

