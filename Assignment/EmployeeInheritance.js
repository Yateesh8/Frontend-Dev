
class Employee{constructor(name,department){this.name=name;this.department=department;}work(){return"Employee working";}}
class Manager extends Employee{work(){return"Manager supervising";}}
let e=new Employee("A","HR");let m=new Manager("B","IT");
console.log(e.work(),m.work());
