var total = 0;
$('#my-form').submit(function(event){
    event.preventDefualt();
  
    var input = parseOmt($('#my-input').val())

    total += input; 
})                 
   