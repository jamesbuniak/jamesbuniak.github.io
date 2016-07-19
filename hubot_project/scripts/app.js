module.exports = function(robot){

	// robot.hear(/hello |hi /i, function(res) {
	// 		return res.send("hello, World!");
	// })


	// robot.hear(/cat /i, function(res){
	// 		return res.send("no, dog");
	// })

	// robot.respond(/how are you /i, function(res){
	// 		return res.send("i am fine, just fine");
	// })

	// robot.respond(/my name is (.*)/i, function(res){
	// 	var name = res.match[1];
	// 	//console.log(name);
	// 	return res.reply('hello, ' + name);
	
	// })

	// robot.hear(/add (.*) and (.*)/i, function(res){
	// 	var x = parseInt(res.match[1]);
	// 	var y = parseInt(res.match[2]);
	// 	var sum = x + y;

	// 	return res.send(x + ' + ' + y + " = " + sum);
	// })

	// robot.hear(/distance|time|miles|hours|minutes/i, function(res){
	// 	return res.send('You can ask me how far is it from a place to place, just say "How far is it from "place" to "place".');
	// })



	robot.hear(/tell me about (.*)/i, function(res){
 		
   	 			var knowledge = res.match[1].toLowerCase();

   	 			try{
 					//use google API return wiki paragrah
 					robot.http("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + knowledge + "&limit=2&format=json")
 					.get()(function(err,res,body) {	
    	 			//parse json data	
    	 			var api = JSON.parse(body);
    	 				if (api !== null){
    	 				var wiki = api[2];	
    	 					if (wiki.length >= 1){
    	 						var lastCharIsC = wiki[0].toString().slice(-1);
    	 						if (lastCharIsC  === ':'){
    	 							console.log(wiki[1].toString()); 
    	 						}
    	 						else if (wiki[0].toString().slice(0, 18) === 'This is a redirect'){
    	 							console.log(wiki[1].toString());	
    	 						}
    	 						else {
    	 							console.log(wiki[0].toString()); 
    	 						}
    	 					}
    	 					else {
    	 						console.log("I have no knowlege of the subject.")
    	 					}								
                     	 }
                     	else{
                     		console.log("Check your internet connection.") 
                    	}
                     })
                }
                catch (err){
                    console.log("Unrecoverable error.")	
                }    	
  	});						

	robot.hear(/how far is (.*) to (.*)|how far is it (.*) to (.*)|what is the distance from (.*) to (.*)/i, function(res){
 		
 				//use google API to calaculate distance from points
 				robot.http("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + res.match[1] + "&destinations=" + res.match[2] + "&key=AIzaSyCsSMZydx9dKPHmWplNbo7OkpmIptyFrec")
 				.get()(function(err,res,body) {	
    	 			//parse json data	
    	 			var api = JSON.parse(body);
    	 			try{
    	 				var miles = api.rows[0].elements[0].distance.text;
    	 				var time = api.rows[0].elements[0].duration.text;
    	 				var location1 = (api.destination_addresses[0]).split(',');
    	 				var location2 = (api.origin_addresses[0]).split(',');
    	 				console.log("From " + location1[0] + " to " + location2[0] + " is about " + miles + " and will take you about " + time + "!");  									
                    }
                    catch (err){
                    	console.log("Yea, thats not really a place. Try entering in a city to a city.")	
                    }
  				});						
	});

};			