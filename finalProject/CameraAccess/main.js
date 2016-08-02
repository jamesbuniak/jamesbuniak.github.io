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
  //window.stream = false;
  videoElement.srcObject = false;
}

start();

  $('#stop').click(function(){
    end()
  })
  $('#start').click(function(){
    start()
  })

})