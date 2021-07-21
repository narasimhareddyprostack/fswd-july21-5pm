let emp = {
  name: "Teja",
  sal: 40000,
  getData: function () {
    console.log("Hello");
  },
};

console.log(emp.name);
emp.getData();
console.log(emp.getName());
/*
    if you are accessing a object property, which is not exist it return undefined.
    if you are accessing a object method, which is not exist it throw err.(typeerr)

*/
