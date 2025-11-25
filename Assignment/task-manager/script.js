function load(p=''){
 $.get('http://localhost:3003/tasks'+p, data=>{
  let html='';
  data.forEach(t=>{
   html+=`<div><input type="checkbox" ${t.completed?'checked':''} onclick="toggle(${t.id}, ${t.completed})"/> ${t.title} (${t.priority})</div>`;
  });
  $('#list').html(html);
 });
}
function toggle(id,completed){
 $.ajax({
  url:'http://localhost:3003/tasks/'+id,
  method:'PATCH',
  data:JSON.stringify({completed:!completed}),
  contentType:'application/json',
  success:()=>load()
 });
}
$('#filter').change(function(){
 let v=$(this).val();
 load('?priority='+v);
});
load();