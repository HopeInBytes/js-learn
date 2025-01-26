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