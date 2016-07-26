$(document).ready(function(){
	for(var i = 99;i >= 1;i--){
		var wording = (i !== 1)? ' bottles of beer on the wall' : ' bottle of beer on the wall'
		var lyric = '<li id="' + i + '"> ' + '<font size="' + i + '">' + i + wording + '</font></li>';
	$('#lyrics').append(lyric)
	}
	var emptyBeerBottles = '<img src="http://res.freestockphotos.biz/pictures/10/10558-empty-green-beer-bottles-isolated-on-a-white-background-pv.jpg"></img>'
	$('#beerbottle').append(emptyBeerBottles)
});