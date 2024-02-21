const accountId = 144557
let accountEmail = "krishna@microsoft.com"
var accountPassword = "54321"
accountCity = "Indore"
let accountState;

// accountId = 2 not allowed

accountEmail = "hc@hc.com"
accountPassword = "121212"
accountCity = "Bengaluru"

console.log(accountId);
/* prefer not to use var
 because of issue in block scope and funtional scope */

console.table([accountId, accountEmail, accountPassword, accountState])