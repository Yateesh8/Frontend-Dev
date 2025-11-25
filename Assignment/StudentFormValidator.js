// Q2 Student Form Validator
const validateName = name => /^[A-Za-z ]+$/.test(name);
const validateEmail = email => /^[\w.-]+@[\w.-]+\.\w+$/.test(email);
const validatePhone = phone => /^\d{10}$/.test(phone);
const validatePassword = pass => /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/.test(pass);
