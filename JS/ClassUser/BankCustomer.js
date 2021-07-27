class Bank_Customer{
    constructor(acc_No, acc_Name,acc_Email_Id){
        this.acc_No =acc_No;
        this.acc_Name = acc_Name;
        this.acc_Email_Id=acc_Email_Id
    }
    get_Balance(){
        console.log("Your Balance")
    }
}
let c1 =new Bank_Customer('101', 'Narasimha', 'greetlabs@gmail.com');

console.log(c1.acc_Name)
c1.get_Balance();
c1.get_Balance();
c1.get_Balance();


/* 
let c2 =new Bank_Customer('102', 'Rahul', 'rn@gmail.con')
console.log(c2.acc_Name);
 */
//At time of object creation - we want to initize values?
/*
constructor - is special method, it will execute only once , at time of object creation.
-can we invoke constructor
*/
