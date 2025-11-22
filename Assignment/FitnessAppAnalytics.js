
class FitnessAnalytics{constructor(data){if(!data.length)throw new Error("Empty dataset");this.data=data;}getActiveUsers(){return this.data.filter(d=>d.steps>7000);}getAverageCalories(){return this.data.reduce((a,b)=>a+b.calories,0)/this.data.length;}getUserSummary(){return this.data.map(d=>d.user+" "+d.steps+" "+d.calories);}}
let d=[{user:"A",steps:8000,calories:300},{user:"B",steps:12000,calories:500},{user:"C",steps:4000,calories:200}];let f=new FitnessAnalytics(d);console.log(f.getActiveUsers(),f.getAverageCalories(),f.getUserSummary());
