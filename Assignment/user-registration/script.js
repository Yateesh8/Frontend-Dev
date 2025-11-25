document.getElementById('reg').onsubmit=function(e){
 e.preventDefault();
 let email=document.getElementById('email').value;
 axios.get('http://localhost:3006/users?email='+email)
 .then(res=>{
  if(res.data.length>0){ alert('Email already registered.'); return;}
  axios.post('http://localhost:3006/users',{email})
  .then(()=>alert('Registered'));
 });
};