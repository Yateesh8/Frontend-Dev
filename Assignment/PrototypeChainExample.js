// Q6 Person -> Faculty -> Professor
function Person(name) { this.name = name; }
Person.prototype.sayName = function(){ console.log(this.name); };

function Faculty(name, dept) {
  Person.call(this,name);
  this.dept = dept;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.showDept = function(){ console.log(this.dept); };

function Professor(name, dept, subject) {
  Faculty.call(this,name,dept);
  this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.showSubject = function(){ console.log(this.subject); };

const prof = new Professor("Ravi","IT","AI");
prof.sayName();
prof.showDept();
prof.showSubject();
