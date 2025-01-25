//let var const


let a= 300
if(true){
    let a=10
const b =20
var c= 30
//console.log("Inner:", a);
}
//console.log(a);
//console.log(b);
//console.log(c);


//scope level and mini hoisting

function one(){
    const userName = "elli"
   
    function two(){
        const website ="Dance"
        //console.log(userName);
    }
    //console.log(website);
    two()
}
one()

//Nested loop

if(true){
    const username = "emma"
    if(username ==="emma"){
        const website = "dog"
       // console.log(`${username} is a  ${website}.`)
         }
         //console.log(website);
         //console.log(username);
}
//console.log(username);


console.log(addOne(5));
function addOne(num){
    return num + 1
}

//addTwo(5)
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));