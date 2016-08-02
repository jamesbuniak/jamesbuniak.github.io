/*

In the index.html file there is a "Get Citi Bike Data" button.
When the user clicks the button, pull data from the provided resource: https://feeds.citibikenyc.com/stations/stations.json
Handle the link success and error responses accordingly, displaying results in
console.log() if successful.

*/

window.onload = function () {

	//document.getElementById('getDataButton').onclick = makeRequest()


	// function makeRequest(){
		var url = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json'
		
	// 	//1 - create instannce
	// 	var httpRequest = new XMLHttpRequest();

	// 	//2 - write function to handle request
	// 	httpRequest.onreadystatechange = responseMethod


	// 	//3 - make request
	// 	httpRequest.open('GET', url)

	// 	//4 -send request
	// 	httpRequest.send()

	// 		function responseMethod(){
	// 			//request logic
	// 			//check if done
	// 			if (httpRequest.readyState === XMLHttpRequest.DONE){
	// 				console.log('function ran')
	// 				//if it sucess
	// 				if (httpRequest.status === 200){
	// 					var JsonFile = JSON.parse(httpRequest.response)
	// 					var location = JsonFile.data.stations.name
	// 					console.log(location)
	// 				}
	// 				 else{
	// 				console.log('There was a ' + httpRequest.status + ' error with the request.')
	// 				}
	// 			}

	// 		}
	// }

	$.get('https://gbfs.citibikenyc.com/gbfs/en/station_information.json', function(response){
		console.log(response)
	})


	$.ajax({
		url: url,
		type: 'GET',
		success: function(response){
			console.log(response)
			var response
		},
		error: function(response){
			console.log(response);
		}	
		})

	}
		