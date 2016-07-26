var d = 'dog'
var animalArray = ['cat', 'dog', 'snake','dog','stuff', 'do', d]


var positionOfCat = animalArray.indexOf('snake')

console.log(positionOfCat)

//use index of if you know a specific term you are looking for in an array.
// does not work with partials -1 means no value was shown.

var thisIsACat = animalArray.filter(function(item){
	return item === 'cat'
})
console.log(thisIsACat)
//filter creates a new array containing the points that passed the test.
//

var thisIsAdogArray = animalArray.filter(function(item){
	 return item === 'dog' || item === 'cat' 
})
console.log(thisIsAdogArray)
//also will look into variables and return those values as well if they are equal to the particular point.
//multiple conditions can be applied

var newArray= []
animalArray.forEach(function(items, index){
	console.log(items + "s")
	newArray.push(items + "s")
})

console.log(newArray)

var arrays = []
animalArray.forEach(function(items,index){
	arrays.push('i' + items)
})

console.log(arrays)