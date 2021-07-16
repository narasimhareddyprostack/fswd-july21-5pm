let employee = {
  name: "Kavitha",
  email: "kavitha@gmail.com",
  mobile: 9591619191,
  getDetails: function () {
    console.log(this.name);
    return "Hello";
  },
};
console.log(employee.email);
console.log(employee.sal);
console.log(employee.getDetails);
console.log(employee.getDetails());
/*
1. If you are accessing a Object property, which is not exists it return undefined
*/
