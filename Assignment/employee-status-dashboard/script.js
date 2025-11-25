const xhr=new XMLHttpRequest();
xhr.open('GET','http://localhost:3002/employees');
xhr.onload=()=>{
 let data=JSON.parse(xhr.responseText);
 let c=document.getElementById('list');
 data.forEach(emp=>{
  let row=document.createElement('div');
  let chk=document.createElement('input');
  chk.type='checkbox';
  chk.checked=emp.status==='active';
  chk.onchange=()=>{
    let newStatus=chk.checked?'active':'inactive';
    let patch=new XMLHttpRequest();
    patch.open('PATCH','http://localhost:3002/employees/'+emp.id);
    patch.setRequestHeader('Content-Type','application/json');
    patch.onload=()=>{ if(patch.status>=400){ chk.checked=!chk.checked; alert('Error'); }};
    patch.send(JSON.stringify({status:newStatus}));
  };
  row.append(emp.name, chk);
  c.append(row);
 });
};
xhr.send();