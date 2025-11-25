$(document).ready(function(){
 $('#search').on('input', function(){
  let q=$(this).val();
  $('#loading').show();
  $.get('http://localhost:3001/products?q='+q, function(data){
    $('#loading').hide();
    if(data.length===0){
      $('#results').html('No products found');
      return;
    }
    let html='';
    data.forEach(p=>{
      html+=`<div><img src="${p.image}" width="50"/> ${p.name} - ${p.price}</div>`;
    });
    $('#results').html(html);
  });
 });
});