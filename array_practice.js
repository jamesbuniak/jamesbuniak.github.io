 //  var boroughs = ['manhattan', 'the bronx', 'queens', 'brooklyn', 'staten island']

 //  boroughs.forEach(function (borough) {
	// console.log(borough +' stuff')
 //  });


  var evens = []

  evens.push(2,4,6,8,10)
  // 5

  var odds = []

  odds.push(1,3,5,7,9)
  // 5

  //every

  var e = evens.every(function (num) {
  return num % 2 === 0
  })
  // true

  var t = evens.every(function (num) {
    return num % 4 === 0
  })
  // false
console.log(e);

console.log(t)

 var o = odds.some(function (num) {
    return num % 4 === 0
  })
  // true

  console.log(o);