/* Independent Practice

Making a favorites list: DOM manipulation


- When the user clicks the submit button, take the value they've typed
  into the input box and add it to the list (hint: appendChild)

- Also, when a new item is added to the list, clear the input box.

*/

function addToList(list, newThing) {
	var newListItem = '<li>' + newThing + '</li>'
	var newList = list.innerHTML + newListItem;

	list.innerHTML = newList
}

window.onload = function() {

	document.getElementById('new-thing-button').onclick = function(event){

		event.preventDefault();//prevents standard reload action

		var myList = document.getElementById('fav-list') //gets the list
		var myNewThing = document.getElementById('new-thing').value //gets the new thing in the box

		addToList(myList, myNewThing) //function to add new 

		document.getElementById('new-thing').value = '' //resets

  }
};


/*

Bonus:

When they click submit without typing anything, alert the user
"you must type in a value!"
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)

*/


