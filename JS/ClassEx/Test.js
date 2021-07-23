class Test{
    constructor(name,age,email){
        this.name = name;
        this.age =age
        this.email = email
    }
    getDetails(){
        return "Hello Mr:" + this.name + "Your Age is:" + this.age + "Your Email:" + this.email; 
    }
}
var t1 = new Test("Rahul", 25, 'rahul@gmail.com')
console.log(t1.getDetails())

var t2 = new Test("vinay", 21, 'vinay@gmail.com');
console.log(t2.getDetails())
console.log(t2.getDetails())


