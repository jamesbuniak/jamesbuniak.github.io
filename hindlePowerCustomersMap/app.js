$(document).ready(function() {

      var map;
      function initMap() {

        map = new google.maps.Map(document.getElementById('map'), {
        
          center: {lat: 39.8282, lng: -98.5795}, 
          zoom: 4,
          mapTypeId: 'roadmap',

          styles: [
            {
              featureType: 'all',
              stylers: [
                { saturation: 0}
              ]
            },{
              featureType: 'road',
              elementType: 'satellite',
              stylers: [
                { hue: '#ffffff' },
                { saturation: 0}
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

  var allLocationsArray = []

  function Location(businessName, lat, lng, phone, website) {
      this.businessName = businessName,
      this.lat = lat,
      this.lng = lng,
      this.phone = phone,
      this.website = website,  
      allLocationsArray.push(this)
  }  

  var Enersys = new Location('FakeLocation', 40.7128, -74.0059, '(484)734-4394', 'www.fake.com')
  var BAE = new Location('FakeLocation', 41.2128, -76.0059, '(484)734-4394', 'www.fake.com')
  var SAFT = new Location('FakeLocation', 45.1128, -91.0059, '(484)734-4394', 'www.fake.com')
  var MDS = new Location('FakeLocation', 32.0128, -95.0059, '(484)734-4394', 'www.fake.com')
  var CYBER = new Location('FakeLocation', 35.2128, -90.0059, '(484)734-4394', 'www.fake.com')
  var ABB = new Location('FakeLocation', 36.2128, -76.0059, '(484)734-4394', 'www.fake.com')
  var HINDLEPOWER = new Location('FakeLocation', 45.1128, -100.0059, '(484)734-4394', 'www.fake.com')
  var FIRST = new Location('FakeLocation', 43.0128, -110.0059, '(484)734-4394', 'www.fake.com')
  var LAST = new Location('FakeLocation', 47.2128, -111.0059, '(484)734-4394', 'www.fake.com')


  initMap();
    
 
  // add markers to map  
      allLocationsArray.forEach(function(location){
        var hoverContent = location.businessName + '\n' + location.phone + '\n' + location.website
        
        var location = new google.maps.Marker({
          position: {
            lat: (location.lat), 
            lng: (location.lng),
          },
          map: map,
          url: location.website,
          animation:google.maps.Animation.DROP,
          title: hoverContent
        }) 

        
        var location + 'info' = new google.maps.InfoWindow({
          content: contentString
        });   
      
      })

     

})


