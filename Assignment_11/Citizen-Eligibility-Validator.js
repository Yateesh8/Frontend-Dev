// Citizen-Eligibility-Validator.js
// Q10: Check eligibility for vote, drive, passport based on age and citizenship status

const age = 19; // test age
const isCitizen = true; // boolean - change to test

if (isCitizen && age >= 18) {
  // Citizen and adult
  if (age >= 18) {
    console.log('Eligible for all services.');
  }
} else if (isCitizen && age >= 18 && age <= 20) {
  // This branch is actually redundant, covered above; keeping explicit logic per requirements
  console.log('Eligible to vote only.');
} else if (!isCitizen && age >= 18) {
  console.log('Only age criteria met.');
} else {
  console.log('Not eligible yet.');
}
