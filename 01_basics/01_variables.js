const accountID = 12346;
let acoountEmail = "example@gmail.com"
var accountPassword ="123467"
let accountState;
accountCity ="Pune"

//accountID =2 //not allowed
acoountEmail ="test@gmail.com"
accountPassword ="64467374"
accountCity = "us"
/*
prefre not use to var
beacuase of issue in block ascope and functional scope
*/
console.log(accountID);
console.table([accountID, acoountEmail, accountPassword, accountCity, accountState]);