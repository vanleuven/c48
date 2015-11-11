// LITERAL NOTATIONAL OBJECTS

var snacks = {
    bread: 'Wheat',
    toppings:'Cheese', 
    veggies: 'Tomato',
    condiments: 'Mustard',
    type: 'Sandwich',
    makeSandwich: function() {
    return "A " + this.toppings + " & " + this.veggies + " " + this.type + "!"; 
    },
    addCondiment: function() {
    return "...with " + this.condiments +"!";
    }
}

// LITERAL OBJECT
var elName = document.getElementById('mySandwich');
elName.textContent = snacks.makeSandwich();

var elName = document.getElementById('myCondiments');
elName.textContent = snacks.addCondiment();

// CONSTRUCTOR OBJECT



