class User{
    login(){
        console.log("User Class Login Method")
    }
    logout(){
        console.log("User Class - Logout Method")
    }
}
class Admin extends User{
    delete_User(){
            console.log("delete User Method")
    }
}

let user1  = new Admin();
user1.login()
user1.logout()
user1.delete_User()
