/*
Open Weather Map Instructions:

1)
- Use either $.ajax or $.get to GET the current weather data for New York City
- Use the API docs to figure out how to properly structure the weatherUrl below (http://openweathermap.org/current)
	- Hint: search the docs for "city name"
- Be sure to include in the weatherUrl the option to receive data in your units of choice (imperial, metric, etc.)
	- Hint: search the docs for "units format"
- First, print the response to the console, then, using the API's response, print the following data to #nyc-weather:
	- The current "temp"
	- The current "hummidity"
	- The current wind "speed"

2)
- Add a form to to the index.html page that allows the user to enter a city and a state
- Capture this form's submit event and dynamically create the weatherUrl below from the user's input
- Print this result to the DOM

3) Bonus:
- Change the background color based on the temperature; ie colder temps should be blue, and hotter temps red

4) Intermediate Bonus:
- Implement handlebars.js templates :)

5) Legendary Bonus:
- Sign up for the flicker API: https://www.flickr.com/services/api/
- Use the flicker search photo library: https://www.flickr.com/services/api/flickr.photos.search.html
- Hint: you will have to convert the responses from the search API into images: https://www.flickr.com/services/api/misc.urls.html
- Instead of changing the background color based on temperature, change the background to first result the flicker API returns for the city
- Ex: user enters "Brooklyn" - search flicker API for "Brooklyn" and use the first image

*/


$(document).ready(function () {

 
  $('html').css('transition', '1s') 
  $('html').css('background-color', 'gray')		

  
  $('#makeRequest').bind('click submit', function(event){
  		event.preventDefault()
      
        $('#weather').empty()
  		
        var city = $('#cityinput').val()
  		$('#cityinput').val('')
  		var apiKey = '4f3b6671a1a6c638c757a26ba7159446';
  		var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',&units=imperial&' + 'appid=';
  		var url = weatherUrl + apiKey

  		$.get(url, function(response){
  			var t = +response.main.temp.toFixed(1)
  			var h = +response.main.humidity.toFixed(1)
  			var w = +response.wind.speed.toFixed(1)
  			var tempTerms = ['freezing', 'ice burg', 'brisk', 'chilly', 'nice', 'warm', 'hot', 'extremely hot', 'dangrously hot', 'stay inside weather']
        	var colors = ['blue', 'lightblue', 'white', 'yellow', 'green', 'pink', 'red', 'darkred', 'purple']     
       		var value = (t/10).toFixed(0)-3
        	var pos = (value < 0 || value > 11) ? 12 : value		

  			$('#weather').append('<p id=' + city +'>' + 'In ' + city + ', it\'s ' + tempTerms[pos] + ' with a current temperature is '+ t + 'ºF. ' + 'The humidity is ' + h + '% with a wind speed of ' +  w + ' mph.' + '</p>')
            $('html').css('background-color', colors[pos])
    	
    	   
        });

  		 var flick =  'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=629572bd439ddf015c86439147a795ae&tags=' + city + '&per_page=1&format=json'

  		$.get(flick, function(response){
  			console.log('sdf')
  			var pictureID = respon.jsonFlickrApi.photo.id
  			var userID = respon.jsonFlickerAPI.photo.owner
  			console.log(userID)
  			var photoURL = 'https://www.flickr.com/photos/{' + userID + '}/{' + pictureID + '}'
  			console.log(photoURL)
  		})
  })


})
