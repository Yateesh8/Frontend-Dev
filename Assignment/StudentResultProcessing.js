
class Student{
constructor(name,marks){this.name=name;this.marks=marks;}
calculateAverage(){return this.marks.reduce((a,b)=>a+b,0)/this.marks.length;}
getGrade(){let avg=this.calculateAverage();if(avg>=90)return"A";if(avg>=75)return"B";if(avg>=50)return"C";return"F";}
}
let s1=new Student("A",[90,80,85]);let s2=new Student("B",[60,55,70]);let s3=new Student("C",[40,30,50]);
console.log(s1.getGrade(),s2.getGrade(),s3.getGrade());
