// Dates

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);

//let myCreatedDate = new Date(2024, 11, 13)
//let myCreatedDate = new Date(2024, 11, 13, 5,3)//console.log(myCreatedDate.toLocaleString());

//let myCreatedDate = new Date("01-03-2023")
//console.log(myCreatedDate.toLocaleString());
let myCreatedDate = new Date("01-03-2023") 

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Date.now()/1000);
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
//console.log(newDate.getDate());
//console.log(newDate.getMonth()+1);
//console.log(newDate.getDay());
//console.log(`${newDate.getDay()} and the time`);


newDate.toLocaleString('default', {
    weekday:"long",
  
})