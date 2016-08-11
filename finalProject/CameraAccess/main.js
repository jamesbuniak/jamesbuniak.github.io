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
    video: {deviceId: videoSource ? {exact: videoSource} : undefined}
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

//start();

  $('#stop').click(function(){
    end()
  })
  $('#start').click(function(){
    start()
  })

$('#snapshot').click(function(){

    var canvas = document.getElementById('myCanvas');
    var video = document.getElementById('video')
    canvas.getContext('2d').drawImage(videoElement, 0, 0)
    // $(canvas).css('height', video.height)
    // $(canvas).css('width', video.width)
  })
})