import React,{useState} from 'react';
import {addStudent,updateStudent} from '../services/studentService';

export default function StudentForm({student,setScreen}){
  const [form,setForm]=useState(student || {name:'',section:'',marks:'',grade:''});

  const save=(e)=>{
    e.preventDefault();
    if(student) updateStudent(student.id,form).then(()=>{alert('Updated'); setScreen('list');});
    else addStudent(form).then(()=>{alert('Added'); setScreen('list');});
  };

  return (
    <form onSubmit={save}>
      <h2>{student?'Edit':'Add'} Student</h2>
      {['name','section','marks','grade'].map(f=>(
        <input key={f} placeholder={f} value={form[f]} onChange={e=>setForm({...form,[f]:e.target.value})}/>
      ))}
      <button type='submit'>Save</button>
      <button onClick={()=>setScreen('list')}>Cancel</button>
    </form>
  );
}