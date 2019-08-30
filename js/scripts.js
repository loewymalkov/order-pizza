function Pizza(sizeChoice, toppingChoice, totalPrice) {
  this.size = sizeChoice;
  this.topping = toppingChoice;
  this.price = totalPrice;
}

// Pizza size constructor
function Size(size, price) {
  this.size = size;
  this.price = price;
};

// Toppings constructor
function Topping(topping, price) {
  this.topping = topping;
  this.price = price;
};

// let sausage = {
//   name: "Sausage",
//   price: 2
// };

let sizeChoice = new Small("Small", 5);

let toppingChoice = new Topping("Sausage", 2);

let pizza = new Pizza(sizeChoice, toppingChoice);





Pizza.prototype.makePizza = function() {
  pizza.chooseSize();
  pizza.chooseTopping();
};

Pizza.prototype.chooseSize = function(sizePrice) {
  if (this.size === sizeChoice) {
    this.price += sizeChoice.price;
  }
}

Pizza.prototype.chooseTopping = function(toppingPrice) {
  if (this.topping === toppingChoice) {
    this.price += toppingChoice.price;
  }
}

$(document).ready(function() {
  $("#choose-options").submit(function() {
    let sizeChoice = $("#choose-size").val();
    let
  });
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