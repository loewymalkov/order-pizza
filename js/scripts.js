// Order object type
function Order() {
  this.pizzaOrder = [],
  this.currentID = 0
}

Order.prototype.displayOrder = function() {
  return "You ordered a " + this.size + " Pizza with" 
}

let orderLog = new Order();

// Pizza object types
function Pizza(sizeChoice, toppingChoice, ) {
  this.size = sizeChoice[0];
  this.toppings = toppingChoice;
  this.price = sizeChoice[1] + toppingPrice;
};


// function Size(size, price) {
//   this.size = size,
//   this.price = price
// };

// function Topping(topping, price) {
//   this.topping = topping,
//   this.price = price
// };

let sizeChoice = new Size("Small", 5);
let toppingChoice = new Topping("Sausage", 2);
let pizza = new Pizza();

Pizza.prototype.makePizza = function() {
  pizza.chooseSize();
  pizza.chooseTopping();
};

Pizza.prototype.chooseSize = function(sizePrice) {
  if (this.size === sizeChoice) {
    this.price += sizeChoice.price;
  }
}

// UI logic
function add(a, b) {
  return a + b;
};

let sumToppingPrice = function(toppingPrice) {
  for (let i=0; i<=toppingPrice.length; i++) {
    toppingPrice[i] = parseInt(toppingPrice[i]);
    return toppingPrice;
  };
  return toppingPrice.reduce(add);
};





$(document).ready(function() {
  $("#choose-options").submit(function(event) {
    event.preventDefault();
    let sizeInput = $("#choose-size").val();
    let toppingInput1 = $("#choice-topping-1").val();
    let toppingInput2 = $("#choice-topping-2").val();
    let toppingInput3 = $("#choice-topping-3").val();
    let sizeChoice = sizeInput.split('-');
    let topping1 = toppingInput1.split('-');
    let topping2 = toppingInput2.split('-');
    let topping3 = toppingInput3.split('-');
    let toppingChoice = [topping1[0], topping2[0], topping3[0]];
    let toppingPrice = [topping1[1], topping2[1], topping3[1]];
    sumToppingPrice(toppingPrice);
    let pizzaChoice = new Pizza(sizeChoice, toppingChoice, toppingPrice);
      
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