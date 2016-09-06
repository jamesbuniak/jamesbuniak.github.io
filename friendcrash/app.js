$(document).ready(function(){


//initialize firebase
	var config = {
    apiKey: "AIzaSyAsoyYmP6BEmJ2tdIvTpuRkXcmQP0ZT_X4",
    authDomain: "friendcrash-19615.firebaseapp.com",
    databaseURL: "https://friendcrash-19615.firebaseio.com",
    storageBucket: "",
 	 };
 	firebase.initializeApp(config);


//start video
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

start();

  $('#snap').click(function(){
   // $('#stinker').append('<canvas id="stinker"></canvas>')
    var canvas = document.getElementById('myCanvas')
    var video = document.getElementById('video')
    var image = canvas.getContext('2d').drawImage(videoElement, 0, 0)

    


    //var imageUrl = 'http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg'
    //var imageUrl = canvas.toDataUrl()
    // var access_token = '8pMJ6VTvPcHTwnsC6Figs1ReHoq4cS'
    // var URL = 'https://api.clarifai.com/v1/tag?url=' + imageUrl +'&access_token=' + access_token


});



})