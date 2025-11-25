// Q7 Login Validation
const validUser = u => /^.{5,}$/.test(u);
const validPass = p => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(p);
