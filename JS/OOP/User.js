class User{
    login(){
        console.log("User Class Login Method")
    }
    logout(){}
}

class Admin {
    delete_User(){
            console.log("delete User Method")
    }
}

let u1 = new Admin()
console.log(u1.isAdmin)  // undefined
//console.log(u1.isAdmin()) // Error 
console.log(u1.delete_User())

//u1.login();