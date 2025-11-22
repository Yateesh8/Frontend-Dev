
class MovieTicket{constructor(m,s,p){this.movieName=m;this.seatNo=s;this.price=p;}}
MovieTicket.prototype.printTicket=function(){return this.movieName+" "+this.seatNo+" "+this.price;}
class OnlineTicket extends MovieTicket{constructor(m,s,p,f){super(m,s,p);this.convenienceFee=f;}getTotalAmount(){return this.price+this.convenienceFee;}}
let o=new OnlineTicket("X",1,100,20);console.log(o.getTotalAmount(),o.printTicket());
