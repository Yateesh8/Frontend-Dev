// Q5 Ticket Booking
const validName = n => /^[A-Za-z ]+$/.test(n);
const validEmail = e => /^[\w.-]+@[\w.-]+\.\w+$/.test(e);
const validSeats = s => /^[1-9]|10$/.test(s);
function bookTicket(name,email,seats){
  if(!validName(name) || !validEmail(email) || !validSeats(seats)){
    console.log("Invalid details");
    return;
  }
  const ticket={name,email,seats};
  console.log("Ticket:",ticket);
}
