const accountId = 444        
let accountEmail = "rk444@gmail.com"
var accountPassword = "random123"       //avoid using var.....(issue in block and functional scope)
accountCity = "Indore"              //also work but do not prefers to use ....(bad habit)

let accountState;       //variable is declare but not initialize a value .....(undefined)
console.log(accountState)

// accountId = 555          //not allowes to change const variable...
console.log(accountId)

accountEmail = "rk555@gmail.com"        //can be change 
console.log(accountEmail)

accountPassword = "random456"       //can be change
console.log(accountPassword)

accountCity = "Shamgarh"        //can be change
console.log(accountCity)
