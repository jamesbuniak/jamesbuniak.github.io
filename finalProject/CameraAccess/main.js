$(document).ready(function(){


var videoElement = document.querySelector('video');

function start() {
  if (window.stream) {
    window.stream.getTracks().forEach(function(track) {
      track.stop();
    });
  }
  var videoSource = videoElement.value;
  var constraints = {
    video: {deviceId: videoSource ? {exact: videoSource} : undefined, width: 100, height: 100}
  };
  navigator.mediaDevices.getUserMedia(constraints).
      then(gotStream);

function gotStream(stream) {
  window.stream = stream; // make stream available to console
  videoElement.srcObject = stream;
  }
}

function end() {
    window.stream.getTracks().forEach(function(track) {
      track.stop();
   })
}

start();

  // $('#stop').click(function(){
  //   end()
  // })
  // $('#start').click(function(){
  //   start()
  // })

  $('#snapshot').click(function(){
   // $('#stinker').append('<canvas id="stinker"></canvas>')
    var canvas = document.getElementById('myCanvas')
    var video = document.getElementById('video')
    var image = canvas.getContext('2d').drawImage(videoElement, 0, 0)

    //var imageUrl = 'http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg'
    
    var imageUrl = canvas.toDataUrl()
    var access_token = '2hfWzAAtRyDKdmbKwWh9zHpwUtKDlO'
    var URL = 'https://api.clarifai.com/v1/tag?url=' + imageUrl +'&access_token=' + access_token

    var imageJson = $.getJSON(URL,function(data,status,xhr){ console.log(data)})

});

});


//    var canvas = document.getElementById('myCanvas');
//    var video = document.getElementById('video')
//    var context = canvas.getContext('2d');


// tracking.ColorTracker.registerColor('green', function(r, g, b) {
//     return true;
// });

// var myTracker = new tracking.ColorTracker("green");
// var rect = document.getElementById('rect')

// myTracker.on('track', function(event) {
//   if (event.data.length === 0) {
//     // No targets were detected in this frame.
//   } else {
//     event.data.forEach(function(data) {
//     rect.x, rect.y, rect.height, rect.width    }
//   );
//   }
// })

// var trackerTask = tracking.track('video', myTracker);

// //trackerTask.stop(); // Stops the tracking
// trackerTask.run(); // Runs it again anytime

   


