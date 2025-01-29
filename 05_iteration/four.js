//Object are iterated by using map
const myObject= {
    game1: 'NFS',
    game2: 'Conuter',
    game3: 'spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);
// }

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`);
   
}