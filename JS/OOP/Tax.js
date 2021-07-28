class Tax{
    Tax = 18;
    get_Tax(){
        console.log("Central Tax Value:" , this.Tax)
    }

}
class State_Tax extends Tax{
    Tax = 10
    /* get_Tax(){
        console.log("State Tax value:", this.Tax)
    } */
}

let obj1 = new State_Tax()

console.log(obj1.Tax);
obj1.get_Tax()