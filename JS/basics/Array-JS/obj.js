let employee = {
  name: "Kavitha",
  loc: "New Delhi",
  sal: 45000,
  email: "greetlabs@gmail.com",
  loc: "Bangalore",
};
/* console.log(employee); */
//print all employee object values
//console.log(employee.name);
for(prop in employee){
console.log(employee[prop])
}