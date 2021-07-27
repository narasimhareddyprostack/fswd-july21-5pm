class Test{
    acc_Name;
    acc_Email;
  
    constructor(name, email){
        this.acc_Name = name;
        this.acc_Email = email
        console.log(this)
    }

}
let t1 =new Test('Narasimha', 'info@psa.com');
console.log(t1)
console.log(this)
console.log(this.rahul)
/* 
console.log(t1.acc_Name)
console.log(t1.acc_Email)
console.log(this)
console.log(this.acc_Name) */