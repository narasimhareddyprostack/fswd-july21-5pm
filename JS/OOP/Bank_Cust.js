class Customer{
min_Bal = 500;
constructor(acc_No, acc_Name){
    this.acc_No = acc_No;
    this.acc_Name = acc_Name;
}
open_Account(){}
deposit(){}
get_Balance(){
    console.log("Your Name:", this.acc_Name , "and your Bal:", this.min_Bal)
}
get_Statement(){}
withdraw(){}
close_Account(){}

}
let c1 = new Customer(101, 'vinay');
console.log(c1)
c1.get_Balance()

/*
class - blueprint to contruct object
class - contains properties and method

*/