// GUESSING GAME


var question;
questions = [	'Are you from Seattle?', 
				'What is your favorite beverage?', 
				'What number signifies the meaning of the universe?'];

var el = document.getElementById('questions1');
el.textContent = questions[0];

var el = document.getElementById('questions2');
el.textContent = questions[1];

var el = document.getElementById('questions3');
el.textContent = questions[2];



var question1 = prompt(questions[0]);
question1 = question1.toLowerCase();
var elQuestion = document.getElementById('response1');
elQuestion.textContent = question1;

if (question1 === "yes" || question1 === "y" || question1 === "yup" || question1 === "yep") {
	alert("Well hello Northwesterner!  Seattle is a wonderful place to grow up.");
	} else {
	alert("Didn\'t think so.");
}


var question2 = prompt(questions[1]);
question2 = question2.toLowerCase();
var elQuestion = document.getElementById('response2');
elQuestion.textContent = question2;

if (question2 == "Wine" || question2 == "wine") {
	alert("Yum, me too!  " + question2 + " is the best!");
	} else {
	alert("That\'s a nice drink too.");
}

var universe = 42;
var question3 = prompt(questions[2]);
question3 = question3.toLowerCase();
var elQuestion = document.getElementById('response3');
elQuestion.textContent = question3;

if (universe == question3) {
	alert("You are right sir!!");
	} else {
	alert('You lose! ' +  guess + ' is just a number!');
	}	