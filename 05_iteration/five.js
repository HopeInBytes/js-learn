const coding = ["Java", "ruby", "R", "python", "vue", "react"]
//in callback you can't use thr fun name
// coding.forEach( function (item){
//     console.log(item);
    
// } )

// coding.forEach((val) => {
//     console.log(val);
    
// })

// function printme(item){
// console.log(item);

// }

// coding.forEach(printme)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const myCoding = [
    {
        languageName: "Javascript",
        languageFile: "JS",
    },

    {
        languageName: "java",
        languageFile: "java",
    },
    {
        languageName: "React",
        languageFile: "React",
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
 
})