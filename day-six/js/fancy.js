
// basic for loop iteration. loops do not return anything
var numbers = [1, 12, 15, 30];
for (var i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
}

//mapping operation
numbers = [1,2,3,4,5];
var newNumbers = [];
for (var i = 0; i < numbers.length; i++) {
	newNumbers[i] = numbers[i] * 2;
}

//.map - positional forEach
var numbers = [1,2,3,4,5]
newNumbers = numbers.map(function(number){
	return number * 2;
});

// string ?????/
var userNames = ['fred', 'bob', 'hank', 'bill']
newNames = userNames.map(function(names){
	return userNames();
}); 

// ['fred', 'bob', 'hank', 'bill'] => f, b, h, b

var names = ['fred', 'bob', 'hank', 'bill'];
var letter = names.map(function(name){
	return name.substring(0,1);
})



var names = ['fred', 'bob', 'hank', 'bill'];
var letter = names.map(function(name){
	return name.toUpperCase();
})

newNames();

var numbers = [1,2,3,4,5]
newNumbers = numbers.map(function(number){
	return number + 10;
});

var numbers = [1,2,3,4,5]
newNumbers = numbers.map(function(number){
	return number +1;
});

// map an array and forEach them (would you put this in the code block?)
newNumbers.forEach(function(for){
	console.log(for);
});



var numbers = [1, 12, 15, 30];
for (var i = 0; i < numbers.length; i+=2) {
	console.log(numbers[i]);
}

// forEAch  style iteration ... method
// 


numbers.forEach(function(number){
	console.log(number);
});



// write a for loop
// practice forEach by using it 3 times. 

var averageAge = [25, 32, 45, 27];
for (var i =  0; i < averageAge.length; i++) {
	console.log(averageAge[i]);
}


averageAge.forEach(function(age){
	console.log(age);
});

score.forEach(function(seasonAverage){
	console.log(seasonAverage);
});

pageLikes.forEach(function(likes){
	console.log(likes);
});



///////////////////////

// normal - function statement syntax (CAN CALL BEFORE DECLARATION) HOISTING

function doStuff(){
	console.log('hello');
}

// function expression syntax (CALLING MUST BE AFTER THE DECLARATION)
var doOtherStuff = function(){
	console.log('hello again');
};

// RESEARCH ANONYMOUS FUNCTIONS vs. name function. parenthesis invoke a function



function reallyComplexFunction() {
	console.log('hello');
	console.log('goodybye');
}

['fred', 'bob', 'hank', 'bill'].forEach(reallyComplexFunction);



////////////////////// 2 ways to write a map to add +1

// way one
var n = numbers.map(function(n){
	return n * 2;
});

// way two

function timesTwo(number){
	return number * 6.5;
}

var n2 = number.map(timesTwo);

///// way one
var price = numbers.map(function(prices){
	return price * 6.5;
});

/// way two

var price;
price = 12;

function addTax(price){
	return price * 6.5;
}
var price = numbers.map(addTax);







