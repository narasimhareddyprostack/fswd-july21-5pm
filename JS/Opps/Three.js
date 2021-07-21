class Order {
  order_Value = 60000;
  getOrder() {
    return "Getting Orders";
  }
}
let a = new Order();

console.log(a);

console.log(a.order_Value);
console.log(a.getOrder());
