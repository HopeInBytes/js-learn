//Reduce in javascript 
const myNums = [1, 2, 3]


// const myTotal = myNums.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)


// const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "Js course",
        price: 299
    },

    {
        itemName : "Py course",
        price: 899
    },
    {
        itemName : "Mobile app dev",
        price: 599
    },
    {
        itemName : "Java course",
        price: 999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);
