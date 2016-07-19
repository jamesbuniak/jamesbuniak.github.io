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


    var data = $().getJSON("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCsSMZydx9dKPHmWplNbo7OkpmIptyFrec",function(data) {
    });

    console.log(data);

});    


