let product = {
  product_Name: "Iphone 5s",
  price: 30000,
  color: ["gray", "white", "red"],
  discount_Avail: false,
  get_More_Details: function () {
    return this.price;
  },
};

console.log(product.product_Name);
console.log(product.color);
console.log(product.discount_Avail);
console.log(product.get_More_Details);
console.log(product.get_More_Details());
