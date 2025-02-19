const user = {
    username : "Emma",
    loginCount: 24,
    signedIn : true,

    getUserDetails: function(){
    //console.log("got info from DB");
    // console.log(`Username: ${this.username}`);
    console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

//constructor function

// const promiseOne = new Promise()
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this
    }
    const userOne = new User("elli", 12, true)
    const userTwo = new User("jack", 11, false)
    console.log(userOne.constructor);
    console.log(userOne instanceof User);
    // console.log(userTwo);

    //new create empty objectcreate 
    // constructer fun. all by  new keyword
    //this  keyword new keyword enject in this
    // 