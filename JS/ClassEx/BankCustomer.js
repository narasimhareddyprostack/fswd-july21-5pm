class BankCustomer{
    constructor(acc_di,acc_Name,acc_Email){
        console.log("Constructor execute only once @ time of object creation")
    }
}

let ravi = new BankCustomer(101, 'Narasimha', "greetlabs@gmail.com");
let vinay= new BankCustomer(102, 'Vinay', 'vinay@gmail.com')
console.log(ravi)
console.log(vinay)
//How to initilize obj props?



