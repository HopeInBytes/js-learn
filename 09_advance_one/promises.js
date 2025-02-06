//how to build promises
const promisesOne = new Promise(function (resolve, reject) {
  // do an async task
  //DB calls, cryptography. network call
  setTimeout(function () {
    console.log("async task is complete.");
    resolve();
  }, 1000);
});
//then connection with in resolve, we get callback in then
promisesOne.then(function () {
  console.log("promise is completed");
});

//Method 2 in one
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async task 2 completed");
});

//data consumption method three
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "patrick", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

//promise four
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "robi", pwd: "dog123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

const username = promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  }).finally(()=>{console.log("the promises either resolved or rejected");})


  // promise five

  const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
      let error = true;
      if (!error) {
        resolve({ username: "Emma", pwd: "123" });
      } else {
        reject("ERROR: JS went wrong");
      }

    }, 1000)
  })

//   async function consumePromiseFive({
//  const response = await promiseFive
//  console.log(response);
//   })

async function consumePromiseFive(){
 try {
  const response = await promiseFive
  console.log(response);
  
 } catch (error) {
  console.log(error);
  
 }
}

consumePromiseFive()

// //
// async function getAllUsers(){
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await response.json()
//   console.log(data);
//     // console.log(response);
//   } catch (error) {
//     console.log("e:", error);
//   }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data);
})
.catch((error)=>console.log(error))