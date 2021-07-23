class Customer{
min_Bal = 5000
getBal(){
    console.log("Your Min Bal is", this.min_Bal)
}
}

let c1 = new Customer()
console.log(c1)
console.log(c1.min_Bal);
console.log(c1.getBal())
