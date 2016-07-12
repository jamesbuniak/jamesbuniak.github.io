x = 0;

for(var i = x; i < 100; i++){
	
	i = (i > 50) ? 0 : 1;
	var time = Date.now();
	

	var timeHeld = (time !== timeHeld) ? time : timeHeld;

	

	console.log(time);
}
