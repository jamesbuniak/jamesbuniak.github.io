/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/


//what the programmer thought was needed...
var Monkey = function(name,species,foodsEaten){
	this.name = name,
	this.species = species,
	this.foodsEaten = foodsEaten,
	this.eatSomething = function(food){
		console.log('Hello my name is ' + name + ', ' + 'I am a ' + species + ',' + " don't feed me anything but " + foodsEaten + '.' + '\n')
	}
}

var bob = new Monkey('Bob', 'traw-monkey', 'john');
var chris = new Monkey('Chris', 'snake-monkey', 'kid');
var greeny = new Monkey('Greeny', 'mouse-monkey', 'nstuff');

bob.eatSomething()
chris.eatSomething()
greeny.eatSomething()



//what the teacher expected :)
let M = function(n,s,f){
	let p = [n,s,f]
	let i;
	while(i <= 2){
	this.f = []
	i += i
	}
	this.e = function(f){eval(l(m + f.toString()))}
}
let l = 'console.log(x[i] + " ate some " + z[i])'
let x = ['bob', 'chris', 'greeny']
let z = ['pizza', 'orange', 'apple']
let t = ['cool', 'stuff', 'bro']
let p = ['name', 'type', 'foodsEaten']

for(var i = 0; i <= 2; i++){
   this.name = new M(x[i]);
   eval(l)	
}



//what the customer wanted
var Monkey1 = function(name,species,foodsEaten){
	this.name = name,
	this.speices = species,
	this.foodsEaten = [],
	this.eatsomething1 = function(food){
		this.foodsEaten.push(food)
		console.log('I monkey ' + this.name + ' i eat ' + this.foodsEaten.toString())
	}
}
var bob1 = new Monkey1('Bob', 'traw-monkey', 'john');
var chris1 = new Monkey1('Chris', 'snake-monkey', 'kid');
var greeny1 = new Monkey1('Greeny', 'mouse-monkey', 'nstuff');

bob1.eatsomething1('dirt')
chris1.eatsomething1('poop')
greeny1.eatsomething1('sticks')

