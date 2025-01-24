function sayMyName(){
    console.log("R");
    console.log("o");
    console.log("b");
    console.log("i");
}
//sayMyName()

// function addTwoNumbers(num1, num2){
// console.log(num1 + num2);
// }
//addTwoNumbers(3,4)

function addTwoNumbers(num1, num2){
    //return (num1 + num2);
    // let result = num1 +num2
    // return result
    return num1 + num2
    }

const result = addTwoNumbers(3,4)
//console.log("Result:", result);

function loginUserMsg(username="anna"){
    if (!username){
        console.log("Please enter the username");
          return      
    }
    return `${username} Just logged in.`
}
//console.log(loginUserMsg("Pratiksha"))
//console.log(loginUserMsg())

//Shoppincart 

function calculateCartPrice(...num3){
        return num3
}

//console.log(calculateCartPrice(200,300,500,67));

const user ={
    username: "Pratiksha",
    prices : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`)
}

//handleObject(user)
handleObject({
    username:"emma",
    price:99
})

const myNewArray = [200,400,500,600]

function returnSecondValue(getArray){
    return getArray[2]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,600]));


