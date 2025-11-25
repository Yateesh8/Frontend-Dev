document.addEventListener('DOMContentLoaded',()=>{
 let u=fetch('http://localhost:3004/users');
 let o=fetch('http://localhost:3004/orders');
 let p=fetch('http://localhost:3004/products');
 Promise.all([u,o,p])
 .then(async ([a,b,c])=>{
   if(!a.ok||!b.ok||!c.ok) throw '';
   let ua=await a.json(); let ob=await b.json(); let pr=await c.json();
   document.getElementById('users').innerText=ua.length;
   document.getElementById('orders').innerText=ob.length;
   document.getElementById('products').innerText=pr.length;
 })
 .catch(()=>{document.getElementById('warn').innerText='Some data could not be loaded.'});
});