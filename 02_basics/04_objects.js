//const tinderUser = new Object()

const tinderUser = {}
 tinderUser.id = "64gshb"
 tinderUser.name = "tommy"
 tinderUser.isLoggedIn= false

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
const obj4 ={5:"a", 6:"b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users =[{
    id:1,
    email:"test@gmail.com"
},
{
    id:2,
    email:"test1@gmail.com"
}
]

//console.log(users[1].email);
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
//console.log(tinderUser.hasOwnProperty('isLoggedn'));

//object de-structure and JSON Api Intro


const course = {
    courseName :"Js in hindi",
    price: "999",
    courseInstructor:"Hitesh"
}

//console.log(course.courseInstructor);

// console.log(course.courseInstructor);

const{courseInstructor:instructor} = course
//console.log(courseInstructor);
console.log(instructor);

//API Concepts in Object
//JSON{}
// {
//     "name": "Pratiksha",
//     "courseName":"Js-learn",
//     "price": "Free"
// }
//URL:https://api.github.com/users/hiteshchoudhary

//https://randomuser.me/api/
//Use json formatter
[
    {},
    {},
    {}
]

//