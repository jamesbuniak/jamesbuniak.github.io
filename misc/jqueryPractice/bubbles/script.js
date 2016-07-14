$(document).ready(function(){

    $('td').fadeTo(0, 0.1)

    $('td').click(function(){
        $(this).css('background-color', 'rgb(' + (Math.floor(Math.random()*255)) + ',' + (Math.floor(Math.random()*255)) + ',' + (Math.floor(Math.random()*255)) + ')');
    });

    $('td').mouseleave(function(){
       $(this).fadeTo('slow', 0.1);
      });

    $('td').mouseenter(function(){
        $(this).fadeTo('slow', 1);
        $(this).css('background-color', 'rgb(' + (Math.floor(Math.random()*255)) + ',' + (Math.floor(Math.random()*255)) + ',' + (Math.floor(Math.random()*255)) + ')');
    });

});    


