//const tinderUser = new Object()

// const tinderUser = {}
// tinderUser.id = "64gshb"
// tinderUser.name = "tommy"
// tinderUser.isLoggedIn= false

//console.log(tinderUser);

const regularUser = {
    email: "test@example.com",
    fullname:{ 
        userfullname:{
            fName:"patrick",
            lName:"job"
        }
    }
}

//console.log(regularUser.fullname?.userfullname.fName)
const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}

//const obj3 = {obj1, obj2}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);