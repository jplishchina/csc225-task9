jQuery(document).ready(function(){
    $('p').prepend('');
    $('button').click(function(){
        var value = $('#inputs').val();
        if(value==false){
            out="You need to input a value!";
            $('#out').html(out);
        }
        else{
          var para= '<p>'+ value +'</p>';
        $('#tasks').prepend(para);  
        }
        
    });
});