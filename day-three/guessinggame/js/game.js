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

if (question1 === "yes" || question1 === "y" || question1 === "yup" || question1 === "yep") {
	
	alert("Seattle is a wonderful place to grow up.");
	var elQuestion = document.getElementById('response1');
	elQuestion.textContent = question1;
	var textContent = document.getElementById('response1Image');
	var textContent = response1Image.innerHTML;
	response1Image.innerHTML = '<div><img src="images/smileyface.png" alt="Smiley face" height="200" width="200"/></div>';
	} else {
	alert("I hope you liked growing up there.");
	var elQuestion = document.getElementById('incorrect1');
	elQuestion.textContent = question1;
}

var question2 = prompt(questions[1]);
question2 = question2.toLowerCase();


if (question2 == "Wine" || question2 == "wine") {

	alert("Yum, me too!  " + question2 + " is the best!");
	var elQuestion = document.getElementById('response2');
	elQuestion.textContent = question2;
	var textContent = document.getElementById('response2Image');
    var textContent = response2Image.innerHTML;
    response2Image.innerHTML = '<div><img src="images/smileyface.png" alt="Smiley face" height="200" width="200"/></div>';
	} else {
	alert("That\'s a nice drink too.");
	var elQuestion = document.getElementById('incorrect2');
	elQuestion.textContent = question2;
}

var universe = 42;
var question3 = prompt(questions[2]);
question3 = question3.toLowerCase();


if (universe == question3) {

	alert("You are right sir!!");
	var elQuestion = document.getElementById('response3');
	elQuestion.textContent = question3;
	var textContent = document.getElementById('response3Image');
	var textContent = response3Image.innerHTML;
	response3Image.innerHTML = '<div><img src="images/smileyface.png" alt="Smiley face" height="200" width="200"/></div>';
	} else {
	alert("You lose! " +  guess + " is just a number!");
	var elQuestion = document.getElementById('incorrect3');
	elQuestion.textContent = question3;
}	

