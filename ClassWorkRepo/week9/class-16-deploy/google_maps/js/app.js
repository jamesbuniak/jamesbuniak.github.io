$(document).ready(function() {

      var map;
      function initMap() {

        map = new google.maps.Map(document.getElementById('map'), {
        
          center: {lat: 40.7128, lng: -74.0059},
        
          zoom: 18,
          mapTypeId: 'satellite',

          styles: [
            {
              featureType: 'all',
              stylers: [
                { saturation: -40 }
              ]
            },{
              featureType: 'road',
              elementType: 'satellite',
              stylers: [
                { hue: '#00ffee' },
                { saturation: 50 }
              ]
            },{
              featureType: 'poi.business',
              elementType: 'labels',
              stylers: [
                { visibility: 'off' }
              ]
            }
          ]


        });
      }

    

    var url = 'http://api.citybik.es/citi-bike-nyc.json'

    navigator.geolocation.getCurrentPosition(showPosition);
	function showPosition(position) {
   	console.log(position.coords.latitude + '' + position.coords.longitude) 
	}

	initMap();
		
    $.getJSON(url, function(data){
    	var count = 0
    	var title = ''

    	data.forEach(function(station){
    		title = 'There are ' + station.bikes + ' bikes at ' + station.name
    		//console.log(title)
    		count += count
    		//console.log(station)
    		new google.maps.Marker({
      		position: {
      			lat: ((station.lat)/1000000), 
      			lng: ((station.lng)/1000000),
      		},
      		map: map,
      		title: title,
      	})

    })

	})
})


