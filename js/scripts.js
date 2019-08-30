function Pizza(sizeChoice, toppingChoice, totalPrice) {
  this.size = sizeChoice;
  this.topping = toppingChoice;
  this.price = totalPrice;
}

// Pizza size constructors
function Size(name, price) {
  this.name = name;
  this.price = price;
};

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




let smallChoice = new Small();
let sausageChoice = new Topping();
let pizza = new Pizza(smallChoice, sausageChoice);

Pizza.prototype.makePizza = function() {
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

$(document).ready(function() {
  $("#")
});


// OR
// function Size() {
//   this.small = { name: "small", price: 5 }
//   this.medium = { name: "medium", price: 7 }
//   this.large = { name: "large", price: 9 }
// }
// function Topping() {
//   this.sausage = { name: "Sausage", price: 2 };
//   this.anchovy = { name:"Anchovy", price: 2 };
//   this.onion = { name: "Onion", price: 1 };
// }