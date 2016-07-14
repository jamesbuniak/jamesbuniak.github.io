$(document).ready(function(){

	$('td').click(function(){
		$(this).fadeTo('slow', 0);
	});

	$('#reset').click(function(){
		$('td').fadeTo('slow', 1);
		$('#a').css('width', 20);
	});



});


