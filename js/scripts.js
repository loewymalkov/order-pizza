function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.price = 0;
}

// Pizza size constructors
function Small() {
  this.name = "Small";
  this.price = 5;
};
function Medium() {
  this.name = "Medium",
   this.price = 7;
};
function Large() {
  this.name = "Large",
   this.price = 7;
}

// Toppings constructors
function Sausage() {
  this.name = "Sausage";
  this.price = 2;
}
function Anchovy() {
  this.name = "Anchovy";
  this.price = 2;
};

function Onion() {
  this.name = "Onion";
  this.price = 1;
};
 


let smallChoice = new Small()
let toppingChoice = new Topping()
let pizza = new Pizza(smallChoice, sausageChoice)


Pizza.prototype.makePizza = function() {
  if (this.size === smallChoice {
    this.price += smallChoice.price;
  }
}
