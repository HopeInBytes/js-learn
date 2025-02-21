let myName = "Patrick   "
let myLastName = "luis   "
// // console.log(myName.trim().length);
// console.log(myName.trueLength());

String.prototype.trueLength =function(){
    // console.log(`${this.myName}`);
    console.log(`the length is:${this.trim().length}`);
}
myName.trueLength()

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman:"sling",
    getSpiderPower: function(){
console.log(`Spidy pwer is ${this.spiderman}`);
    }

}
Object.prototype.patrick = function (){
    console.log(`Patrick is present in all Objects.`);
}
Array.prototype.heypatrick = function(){
    console.log("patrick says hello");
}

// heroPower.patrick()
myHeros.patrick()
myHeros.heypatrick()