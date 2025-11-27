import React from 'react';
import {getStudents,deleteStudent} from '../services/studentService';

export default function StudentList({students,setStudents,setScreen,setSelected}){
  const load=()=>getStudents().then(setStudents);
  const remove=(id)=>deleteStudent(id).then(()=>alert('Deleted!'));

  return (
    <div>
      <h2>Students</h2>
      <button onClick={load}>Load Students</button>
      <button onClick={()=>{setSelected(null);setScreen('form')}}>Add Student</button>
      <table border='1'>
        <thead><tr><th>Name</th><th>Section</th><th>Marks</th><th>Grade</th><th>Actions</th></tr></thead>
        <tbody>
          {students.map(s=>(
            <tr key={s.id}>
              <td>{s.name}</td><td>{s.section}</td><td>{s.marks}</td><td>{s.grade}</td>
              <td>
                <button onClick={()=>{setSelected(s);setScreen('form')}}>Edit</button>
                <button onClick={()=>remove(s.id)}>Delete</button>
                <button onClick={()=>{setSelected(s);setScreen('details')}}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}