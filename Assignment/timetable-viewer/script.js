function load(day){
 fetch('http://localhost:3005/timetable?day='+day)
 .then(r=>r.json())
 .then(data=>{
  let c=document.getElementById('list');
  if(data.length===0){c.innerText='No classes today.'; return;}
  c.innerHTML='';
  data.forEach(t=>{
   c.innerHTML+=`${t.subject} - ${t.faculty} - ${t.time}<br>`;
  });
 });
}