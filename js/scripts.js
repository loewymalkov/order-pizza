function Pizza(sizeChoice, toppingChoice, totalPrice) {
  this.size = sizeChoice;
  this.topping = toppingChoice;
  this.price = totalPrice;
}

// Pizza size constructors
function Small() {
  this.name = "Small";
};
function Medium() {
  this.name = "Medium",
};
function Large() {
  this.name = "Large",
}

// Toppings constructors
function Sausage() {
  this.name = "Sausage";
}
function Anchovy() {
  this.name = "Anchovy";
};

function Onion() {
  this.name = "Onion";
};
 


let smallChoice = new Small()
let toppingChoice = new Topping()
let pizza = new Pizza(smallChoice, sausageChoice)

Pizza.prototype.makePizza() {
  pizza.chooseSize();
  pizza.chooseTopping();
};

Pizza.prototype.chooseSize = function(sizePrice) {
  if (this.size === smallChoice) {
    this.price += sizePrice.val();
  }
}

Pizza.prototype.chooseTopping = function(toppingPrice) {
  if (this.topping === sausageChoice) {
    this.price += toppingPrice.val();
  }
}

