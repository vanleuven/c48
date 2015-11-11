// CONSTRUCTOR NOTATIONAL OBJECTS


function Snack(toppings, veggies, condiments, type) {
this.toppings = toppings;
this.veggies = veggies;
this.condiments = condiments;
this.type = type;
this.buildIt = function () {
	return this.veggies + ' & ' + this.toppings + ' ' + this.type;
};
}

var fredSnack = new Snack ('Cheese', 'Tomato', 'Mustard', 'Sandwich');
var suzySnack = new Snack ('Ham', 'Avocado', 'Honey-Mustard', 'Sandwich');

var fredBuilt = 'Fred wants to eat the ' + fredSnack.buildIt();
var elSnack = document.getElementById('fred');
elSnack.textContent = fredBuilt;

var suzyBuilt = 'Suzy wants to eat the ' + suzySnack.buildIt();
var elSnack = document.getElementById('suzy');
elSnack.textContent = suzyBuilt;