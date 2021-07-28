class User{
    constructor(name, email){
        this.name = name, this.email = email

    }
}
class Admin extends User{
    constructor(name, email, isAdmin){
        super(name, email)
        this.isAdmin = isAdmin
    }
}
let a1 = new Admin('Rahul', 'rahul@gmail.com', true)
console.log(a1)