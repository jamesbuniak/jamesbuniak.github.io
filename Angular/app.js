//1a. add an angular module called ToDoApp 
//1b. add the app to the html body tag using ng-app

//2a. add an angular contoller called "ToDoAppCtrl" and include $scope as a param 
//2b. append to the $scope a title property with the value of the H1 in the html
//2c. delete the h1 text in html and use the title property to populate it

//3a. extend $scope to include an array called items with two items: "ToDo1","ToDo2"
//3b. in html add ng-model="inputText" to the input tag
//3c. add a new method to $scope called addItem which pushes $scope.inputText into items array
//3d. reset $scope.inputText to nothing
//3e. in html add an ng-click class to the button that executes addItem()

//4a. in the html add to the existing li an ng-repeat="item in items"
//4b. confirm the items in the items array are being added

//5a. add a new method to $scope called removeItem which takes in one param called item
//5b. splice the items array to remove the one referenced item
//5c in the html add an ng-click to the li that executes removeItem($index)

//define angular module
var ToDoApp = angular.module("ToDoApp",[])

//define controller object of todo app ($scope is the referecen)
ToDoApp.controller('ToDoAppCtrl',function($scope) {
	// adds title 	
  $scope.title = "Add something to your list:"
  
  //adds items reculsively
  $scope.items = [];
  $scope.addItem = function() {
      $scope.items.push($scope.inputText)
      $scope.inputText = ""
  }
    
  //remove all items
  $scope.removeAll = function(item){
  	$scope.items.splice(item)
  	}
 
   //remove the item 
  $scope.removeItem = function(item){
    $scope.items.splice(item,1)
  }
})





