import React,{useState} from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';

export default function App(){
  const [screen,setScreen]=useState("list");
  const [students,setStudents]=useState([]);
  const [selected,setSelected]=useState(null);

  return (
    <>
      {screen==="list" && 
        <StudentList students={students} setStudents={setStudents} setScreen={setScreen} setSelected={setSelected}/>}
      {screen==="form" &&
        <StudentForm student={selected} setScreen={setScreen}/>}
      {screen==="details" &&
        <StudentDetails student={selected} setScreen={setScreen}/>}
    </>
  );
}