

var question1 = prompt("Did you grow up in Seattle?");
question1 = question1.toLowerCase();
console.log("Response 1: " + question1);


if (question1 === "yes" || question1 === "y" || question1 === "yup" || question1 === "yep") {
	alert("Well hello Northwesterner!  " + "Seattle is a wonderful place to grow up.");
	} else {
	alert("Didn\'t think so.");
}

var question2 = prompt("Do you play the drums?");
question2 = question2.toLowerCase();
console.log("Response 2: " + question2);


if (question2 === "yes" || question2 === "y" || question2 === "yup" || question2 === "yep") {
	alert("Fun!  I love playing drums!");
	} else {
	alert("That\'s cool.");
}

var question3 = prompt("What is your favorite beverage?");
question3 = question3.toLowerCase();
console.log("Response 3: " + question3);


if (question3 == "water" || question3 == "water.") {
	alert("Yum, me too!  " + question3 + " is the best!");
	} else {
	alert("That\'s a nice drink.");
}

