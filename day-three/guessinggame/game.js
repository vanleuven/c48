

// var question1 = prompt("Did you grow up in Seattle?");
// question1 = question1.toLowerCase();
// console.log("Response 1: " + question1);


var question1 = prompt("Are you from Seattle?");
question1 = question1.toLowerCase();
document.getElementById('response1').innerHTML = question1;

if (question1 === "yes" || question1 === "y" || question1 === "yup" || question1 === "yep") {
	alert("Well hello Northwesterner!  Seattle is a wonderful place to grow up.");
	} else {
	alert("Didn\'t think so.");
}

var question2 = prompt("Do you play the drums?");
question2 = question2.toLowerCase();
document.getElementById('response2').innerHTML = question2;
// var question2 = document.getElementById('question2');
// element.innerHTML = 'question2';

if (question2 === "yes" || question2 === "y" || question2 === "yup" || question2 === "yep") {
	alert("Fun!  I love playing drums!");
	} else {
	alert("That\'s cool.");
}




var question3 = prompt("What is your favorite beverage?");
question3 = question3.toLowerCase();
document.getElementById('response3').innerHTML = question3;


if (question3 == "Wine" || question3 == "wine") {
	alert("Yum, me too!  " + question3 + " is the best!");
	} else {
	alert("That\'s a nice drink too.");
}

var question4 = prompt("Do I eat meat?");
question4 = question4.toLowerCase();
document.getElementById('response4').innerHTML = question4;


if (question4 == "No" || question4 === "no" || question4 === "n" || question4 === "nope" || question4 === "nah") {
	alert("That is correct, I am pescatarian.");
	} else {
	alert("Good for you.");
}


var question5 = prompt("Do you believe in God?");
question5 = question5.toLowerCase();
document.getElementById('response5').innerHTML = question5;


if (question5 == "No" || question5 === "no" || question5 === "n" || question5 === "nope" || question5 === "nah") {
	alert("That is correct, I don't believe in God.");
	} else {
	alert("Do you believe in Santa Claus as well?");
}

var question6 = 42;
var guess = prompt("What number signifies the meaning of the universe?");
document.getElementById('response6').innerHTML = question6;
if (guess == question6) {
	alert("You are right sir!!");
	} else {
	alert('You lose! ' +  guess + ' is just a number!');
	}	
