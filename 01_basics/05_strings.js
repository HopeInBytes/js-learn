const name ="pratiksha"
const repoCount = 50
console.log(name + repoCount + " value")
console.log(`Hello my name is ${name} and my repo count is ${repoCount}.` )

const gameName= new String('Pratiksha')
console.log(gameName[1])
console.log(gameName.length)
console.log(gameName.charAt(5))
console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.replace('a', 'A'))
console.log(gameName.indexOf('a'))

const newString =name.substring(0,4)
console.log(newString)

const anotherString = name.slice(-2,5)
console.log(anotherString)

const newStringOne = "  Pratiksha    "
console.log(newStringOne);
console.log(newStringOne.trim());// remove white space
 const url="https://hopesinbytes.com/pratiksha%20sable";
 console.log(url.replace('%20','-'));

console.log(url.includes('pratiks'));
console.log(url.includes('hello'));
console.log(name.split(''));
console.log(name.bold('p'));
console.log(name.concat('', ' Sable'));
