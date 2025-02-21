  function SetUsername(username){
//complex DB Calls
this.username = username
console.log("called");
  }

  function createUser(username, email, password)
  {
    SetUsername.call(this, username)
    // this.username = username
    this.email = email
    this.password = password
  }
  const chai = new createUser("chai", "Chai@fb.com", "123")
  console.log(chai);