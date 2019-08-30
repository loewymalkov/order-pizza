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
function Pizza(sizeChoice, toppingChoice, totalPrice) {
  this.size = sizeChoice.size;
  this.topping = toppingChoice.topping;
  this.price = sizeChoice.price + toppingChoice.price;
};


function Size(size, price) {
  this.size = size,
  this.price = price
};

function Topping(topping, price) {
  this.topping = topping,
  this.price = price
};

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



$(document).ready(function() {
  $("#choose-options").submit(function() {
    let sizeInput = $("#choose-size").val();
    let toppingInput = $("#choice-topping").val();
    function createSize(sizeInput) {
      let createSize = sizeInput.split('-');

    }
      
    }
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