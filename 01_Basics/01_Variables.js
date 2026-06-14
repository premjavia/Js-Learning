const accountId = 144553
let accountEmail = "premjavia77@gmail.com"
var accountPassword = "12345"
accountCity = "Surat"
let accountState;

// accountId  = 2    //Not allowed

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

accountEmail = "abc@gmail.com"
accountPassword =  "123123"
accountCity = "Bardoli"


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
console.log(accountId);
