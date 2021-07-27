class BankCustomer{
    min_Bal = 500;

    
    constructor(a,b,c){
        this.acc_No =a;
        this.acc_Name = b;
        this.acc_Bal = c;
    }
    get_Balance(){
        console.log(this.acc_Name,":Balance is:", this.acc_Bal - this.min_Bal)
    }
}


/* let c1=new BankCustomer(101,'Narasimha', 600);
console.log(c1)
c1.get_Balance() */

let c2 = new BankCustomer(102, 'Rahul', 20000);
c2.get_Balance();