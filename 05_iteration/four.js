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

const programming =["C++", "html", "Java", "python"]
for (const key in programming) {
      console.log(programming[key]);
      
        
    }


    // by using map can't iterat the map 
// const map =new Map()
// map.set('IN', "India")
// map.set('USA', "United state of ameria")
// map.set('FR', "france")
// map.set('IN', "India")

// for (const key in map) {
    
//         console.log(key);
        
//     }
