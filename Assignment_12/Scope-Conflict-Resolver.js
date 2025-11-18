
/* Q1 Scope Conflict Resolver */

let bonus = 5000; // global bonus

function calculateSalary(isPermanent){
  let salary = 40000; // local salary
  // Add bonus only for permanent employees
  if(isPermanent){
    salary += bonus;
  }
  console.log("Is Permanent:", isPermanent, "| Total Salary:", salary);
}

// Test both cases
calculateSalary(true);
calculateSalary(false);
