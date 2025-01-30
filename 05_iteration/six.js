const coding = ["Java", "ruby", "R", "python", "vue", "react"]

// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNums.filter( (num) => num >4 )
// const newNums = myNums.filter( (num) => {
//     return num > 4 
// })
// console.log(newNums);

//callback
// const newNums = []
// myNums.forEach( (num)  => {
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 2001, edition: 1 },
    { title: 'Book Two', genre: 'Fantasy', publish: 2005, edition: 2 },
    { title: 'Book Three', genre: 'Science Fiction', publish: 2010, edition: 1 },
    { title: 'Book Four', genre: 'Historical', publish: 2015, edition: 3 },
    { title: 'Book Five', genre: 'Romance', publish: 2020, edition: 1 },
    { title: 'Book Six', genre: 'Thriller', publish: 2018, edition: 2 },
    { title: 'Book Seven', genre: 'Biography', publish: 2012, edition: 1 },
    { title: 'Book Eight', genre: 'Historical', publish: 2008, edition: 4 },
    { title: 'Book Nine', genre: 'Horror', publish: 2021, edition: 1 },
    { title: 'Book Ten', genre: 'Adventure', publish: 2023, edition: 1 }
  ];
  

  let  userBooks = books.filter( (bk) => bk.genre === 'Historical' )
 userBooks = books.filter( (bk) => {return bk.publish >=2005 && bk.genre === "Historical" } )

  console.log(userBooks);
  