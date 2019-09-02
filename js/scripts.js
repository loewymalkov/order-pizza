// Pizza object types
function Pizza(sizeChoicePrice, toppingChoice, toppingPriceForPizza) {
  this.size = sizeChoicePrice[0];
  this.toppings = toppingChoice;
  this.price = parseInt(sizeChoicePrice[1]) + toppingPriceForPizza;
};

// UI logic
let add = function(a, b) {
  return a + b;
};

function sumToppingPrice(toppingPrice) {
  let tempArray = [];
  tempArray = toppingPrice.map(function(price) {
    return parseInt(price);
  });
  return tempArray.reduce(add);
};

function makePizza(sizeInput, toppingInput1, toppingInput2 ,toppingInput3) {
  let sizeChoicePrice = sizeInput.split('-');
  let topping1 = toppingInput1.split('-');
  let topping2 = toppingInput2.split('-');
  let topping3 = toppingInput3.split('-');
  let toppingChoice = [topping1[0], topping2[0], topping3[0]];
  let toppingPrice = [topping1[1], topping2[1], topping3[1]];
  let toppingPriceForPizza = sumToppingPrice(toppingPrice);
  let pizzaChoice = new Pizza(sizeChoicePrice, toppingChoice, toppingPriceForPizza);
  return $("#display-order").text("You ordered a " + pizzaChoice.size + " pizza with these toppings: " + pizzaChoice.toppings.join(', ') + ". This will cost $" + pizzaChoice.price + ".");
};

// Front end UI
$(document).ready(function() {
  $("#choose-options").submit(function(event) {
    event.preventDefault();
    let sizeInput = $("#choose-size").val();
    let toppingInput1 = $("#choose-topping-1").val();
    let toppingInput2 = $("#choose-topping-2").val();
    let toppingInput3 = $("#choose-topping-3").val();
    makePizza(sizeInput, toppingInput1, toppingInput2, toppingInput3);
  });
});


// Epicodus - I am saving this code for testing when I create a new branch, please ignore below this message

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