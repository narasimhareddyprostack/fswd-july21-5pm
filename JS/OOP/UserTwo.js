class Parent{
    parent_Assets = '2 CR'
    quality(){
        console.log("Good Quality")
    }
}
class Child extends Parent{
    parent_Assets = '1 CR'
    quality(){

        console.log("Very Bad")
    }
}

let c1 = new Child();

console.log(c1)
console.log(c1.parent_Assets)
c1.quality()