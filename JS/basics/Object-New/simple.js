let employee = {
  name: "Kavitha",
  email: "kavitha@gmail.com",
  mobile: 9591619191,
  getDetails: function () {
    console.log(this.name);
    return "Hello";
  },
};
console.log(employee.getName());
/*
1. If you are accessing a Object property, which is not exists it return undefined

2. If you are accessing/invoking method, which is not exists, it throw error.

*/
