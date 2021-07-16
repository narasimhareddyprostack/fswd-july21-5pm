/* let size = [38, 40, 42, 44];
for (x of size) {
  console.log(x);
} */

let employees = [
  { name: "Aliya", salary: 50000 },
  { name: "Teju", salary: 60000 },
  { name: "Teja", salary: 70000 },
  { name: "Vinu", salary: 80000 },
  { name: "Narasimha", salary: 90000 },
];

for (emp of employees) {
  console.log("Employee Name:" + emp.name + " " + "Salary : " + emp.salary);
}
