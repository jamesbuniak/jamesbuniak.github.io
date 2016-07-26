

var helloEL = document.getElementById('hello')

helloEL.inner = 'this is so cool'
console.log(helloEL)

var pEL = document.querySelector('p')
console.log(pEL)

var listEls = document.querySelectorAll('li');
console.log(listEls);

document.getElementById('my-btn').onclick = function(e){
	var input = document.getElementById('my-input').value
	console.log(input)
}