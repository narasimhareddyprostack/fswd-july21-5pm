class Employee {
  name = "Narasimha";
  salary = 60000;
  getTax() {
    return "Eligible for Tax Declaration";
  }
}

let emp = new Employee();
console.log(emp.name);
console.log(emp.salary);
console.log(emp.getTax());
