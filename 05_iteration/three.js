//for of all those array specific loop
["", "", ""]
[{},{}]
//for of
// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
    
    
// }

// const greeting ="Hello Pratiksha!"

// for (const greet of greeting) {
//     console.log(`each char is ${greet}`);
    
// }

//maps

const map =new Map()
map.set('IN', "India")
map.set('USA', "United state of ameria")
map.set('FR', "france")
map.set('IN', "India")


console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-' , value);
}

const myObject= {
    game1: 'NFS',
    game2: 'Conuter',
    game3: 'spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-' , value);
    
// }