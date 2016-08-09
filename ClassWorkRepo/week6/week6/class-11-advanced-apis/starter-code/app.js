$(function() {
  // DOM is now ready
  _500px.init({
  		sdk_key: 'bfe705231f2d20c06d3f904b79680f812ae763d8'
  })

  $('#login').click(function(){
  	_500px.login()
  })

  

});
