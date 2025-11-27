export default function StudentDetails({student,setScreen}){
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {student.name}</p>
      <p>Section: {student.section}</p>
      <p>Marks: {student.marks}</p>
      <p>Grade: {student.grade}</p>
      <button onClick={()=>setScreen('list')}>Back</button>
    </div>
  );
}