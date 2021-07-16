function place_Order(product_Name, price, color) {
  var tax = 500;
  return (
    "Product: " +
    product_Name +
    " Price:" +
    (price + tax) +
    "  " +
    "color is :" +
    color
  );
}

let delivery_Message = place_Order("Ipohne 5s", 30000, "gray");
console.log(delivery_Message);
