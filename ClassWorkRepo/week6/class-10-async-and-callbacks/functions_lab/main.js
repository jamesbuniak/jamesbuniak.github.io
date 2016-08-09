/**
 *
 * Independent Practice: Functions and Callbacks
 *
 * GOALS
 *
 * Your goal in this exercise is for the last line of code in this file to log
 * the number of odd numbers in the array.
 *
 * DIRECTIONS
 *
 * Implement 'makeCountingFunction()', so that it accepts a predicate function
 * as an argument. 'makeCountingFunction()' should return another function that
 * is able to:
 *
 * 	1. iterate through an array and apply the predicate function to each item in
 * 	   that array,
 * 	2. increment a counter based on the result of applying the predicate function
 * 	   to that item (i.e. does it match what we're looking for?)
 * 	3. return the final count.
 *
 * The predicate function 'isOdd()' should accept an individual number as a
 * parameter and return whether or not that number is odd.
 *
 * BONUS 1: Can you write another predicate function that counts evens?
 * BONUS 2: Can you write a function that will sum up all the numbers?
 *
 */

function makeCountingFunction(predicate) {
	
	return function (array){
		var counter = 0;

		for(var i = 0; i < array.length; i++){
			// apply the predicate to each array item
			// if true; increment counter by one
			if (predicate(array[i]) === true){
				counter += 1
			}

		}

		return counter;
	}
}

function isOdd(x) {
	return (x % 2 === 0) ? false : true
}

// console.log(makeCountingFunction(isOdd))

// =============================================================================
// The code below should work without modification.
// =============================================================================

/**
 * The line below should package up 'makeCountingFunction()' and 'isOdd()' into
 * a single function that accepts an array of items as a parameter, iterates
 * through it and returns a count of how many of those items are odd numbers.
 * This new function is being assigned to the variable 'countTheOdds'.
 */

var countTheOdds = makeCountingFunction(isOdd);
// var countTheEvens = makeCountingFunction(isEven);c

/**
 * The final line below calls our new 'countTheOdds()' function and passes in an
 * array of numbers. Once your code is working, the line below should return the
 * number 4.
 */

var oddCount = countTheOdds([1, 2, 3, 4, 5, 6, 7]);
// var evenCount = countTheEvens([1...])
console.log('There are ' + oddCount + ' odd numbers.');
// expected output: There are 4 odd numbers.
