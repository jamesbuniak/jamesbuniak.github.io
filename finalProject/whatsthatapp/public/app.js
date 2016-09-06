$(document).ready(function(){ 

  //access token must be updated via post method for app to work
  var access_token = "e37P0G4NdeG3ERBUW2Im8xCqQUHH79"  

	$('button').on('click', function(){
    loadData()
  })

  var loadData = function(){
      $('#picture').empty()
      $('#listItems').empty()

		  var imageUrl = $('#url').val()
     
      if (imageUrl === ''){
        imageUrl = 'http://weknowyourdreams.com/images/duck/duck-08.jpg'
      }

      $('#url').val('')
     
      var URL = 'https://api.clarifai.com/v1/tag?url=' + imageUrl +'&access_token=' + access_token
      var imageData = {} 
          $.getJSON(URL,function(data,status,xhr){ 
    	     var searchTerm = data.results[0].result.tag.classes
    	     searchTerm.forEach(function(term){
           addNewTerms(term)
          })
      })

      var $listItem = '<img src="' + imageUrl + '"class="img-thumbnail" id="urlImage" alt=" ooppppps try again!\n (hint it needs to be a direct link to the image)">'
    
      $('#picture').append($listItem)
	    }

      var addNewTerms = function (term) {
    
      var $terms = '<li class=list-group-item list-group-item-danger id="listitem">' + term + '</li>'  
      $('#picture').append($terms)
    }
  

   loadData()

  })




   