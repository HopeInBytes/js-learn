const user = {
    username: "harry",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website.`);
       // console.log(this);
    }

}

// user.welcomeMessage()
// user.username ="patrick"
// user.welcomeMessage();
//console.log(this);
// this is used for the refer the current context

// function test(){
//     let username = "nick"
//     console.log(this.username);
// }
// test()

// const test = function(){
//     let userName = "nick"
//     console.log(this.userName);

// }

// const test = () => {
//     let userName = "nick"
//     console.log(this);

// }
//explicit return
// const addTwo = (num1, num2)=>{
//  return num1 + num2
// }


//Implicit return
// const addTwo = (num1, num2)=> num1 + num2
// const addTwo = (num1, num2)=> (num1 + num2)
const addTwo = (num1, num2)=> ({username: "Pratiksha"})
      
console.log(addTwo(2,4));