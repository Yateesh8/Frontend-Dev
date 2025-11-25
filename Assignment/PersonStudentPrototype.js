// Q5 Person -> Student (prototype)
function Person(name) {
  this.name = name;
}
Person.prototype.showName = function() {
  console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.showBranch = function() {
  console.log(`Branch: ${this.branch}`);
};

const s = new Student("Aman", "CSE");
s.showName();
s.showBranch();
