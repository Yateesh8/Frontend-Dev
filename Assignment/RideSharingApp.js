
class User{constructor(name,rating){this.name=name;this.rating=rating;}}
class Driver extends User{constructor(name,rating,vehicle){super(name,rating);this.vehicle=vehicle;}}
class Trip{constructor(from,to,distance){this.fromLocation=from;this.toLocation=to;this.distance=distance;}calculateFare(){if(!this.distance||this.distance<0)throw new Error("Invalid distance");return this.distance*10;}}
try{let t=new Trip("A","B",5);console.log(t.calculateFare());let t2=new Trip("A","B",-1);console.log(t2.calculateFare());}catch(e){console.log(e.message);}
