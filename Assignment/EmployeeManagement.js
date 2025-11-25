// Q6 Employee Management
class Employee {
  constructor(id,name,department,salary){
    this.id=id; this.name=name; this.department=department; this.salary=salary;
  }
  getAnnualSalary(){ return this.salary*12; }
  applyBonus(percent){ this.salary += (this.salary*percent)/100; }
}
const emps=[
  new Employee(1,"A","HR",30000),
  new Employee(2,"B","IT",40000),
  new Employee(3,"C","Fin",35000),
  new Employee(4,"D","Ops",28000),
  new Employee(5,"E","IT",45000)
];
const total = emps.reduce((acc,e)=>acc+e.getAnnualSalary(),0);
console.log(total);
