const accountId = 223344
let accountEmail = "Hassan@gmail.com"
var accountPassword = "12345"
accountCity = "Karachi"
let accountState;

// accountId = 334455  // not allowed

accountEmail = "ha@ha.com"
accountPassword = "22331"
accountCity = "shikarpur"

/*
prefer not to use var
becasue  of issue in block scope and funtional scrope
*/

console.log(accountId)
console.table([accountEmail,accountPassword,accountCity,accountId,accountState])