class Customer{
    min_Bal = 500
   get_Details(){
   return this.min_Bal
   }
}

let c1 = new Customer();
/* console.log(c1) 
console.log(c1.min_Bal)
console.log(this.min_Bal)//undefined
*/

console.log(c1.get_Details()) 