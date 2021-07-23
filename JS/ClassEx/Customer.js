class BankCustomer{
constructor(acc_Id, acc_Name, deposit_Amount){
    this.acc_Id = acc_Id;
    this.acc_Name =acc_Name;
    this.deposit_Amount = ""
    console.log("Constructor Method - will execute only once.")

}
}

let c1 = new BankCustomer(101, 'Narasimha', 6000)



/*
what is constructor 
- speical method , it will execute only once, at time of object creation.

*/