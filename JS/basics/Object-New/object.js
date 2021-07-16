let size = [38, 40, 42, 44];
let employee = { name: "Kavitha", salary: 80000 };
let employees = [
  { name: "Aliya", salary: 50000 },
  { name: "Teju", salary: 60000 },
  { name: "Teja", salary: 70000 },
  { name: "Vinu", salary: 80000 },
  { name: "Narasimha", salary: 90000 },
];
//print all employee Name's
console.log(employees.name);
//How to iterate array  - for , while, do while, for of
for (emp of employees) {
  console.log(emp.name);
}
