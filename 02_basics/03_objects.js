//singleton
//oject literals

const mySym = Symbol("key1")

const Jsuser = {
    name:"Pratiksha",
    age: 29,
    [mySym]:"mykey1",
    city:"Pune",
    role:"Web developer",
    lastLoginDays:["Monday","sunday"]
}

//console.log(Jsuser.name);
//console.log(Jsuser["city"]);
//console.log(Jsuser["age"]);
//console.log(Jsuser [mySym]);

Jsuser.name="Pratikbha"
//Object.freeze(Jsuser)
Jsuser.name="Ana"
//console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello Js user")
}

Jsuser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());