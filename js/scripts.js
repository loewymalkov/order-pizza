// Pizza object types
function Pizza(sizeArray, toppingArray) {
  this.size = sizeArray[0];
  this.toppings = toppingArray;
  this.price = [];
};

Pizza.prototype.sumToppingPrice = function(toppingPrice, sizeArray) {
  this.price = toppingPrice.map(function(price) {
    return parseInt(price);
  });
  let parsedSizePrice = parseInt(sizeArray[1])
  this.price.push(parsedSizePrice);
};

// UI logic
const add = function(a, b) {
  return a + b;
};

function makePizza(sizeInput, toppingInput1, toppingInput2 ,toppingInput3) {
  let sizeArray = sizeInput.split('-');
  let topping1 = toppingInput1.split('-');
  let topping2 = toppingInput2.split('-');
  let topping3 = toppingInput3.split('-');
  let toppingArray = [topping1[0], topping2[0], topping3[0]];
  let toppingPrice = [topping1[1], topping2[1], topping3[1]];
  toppingPrice.filter(function(item) {
    return item !== "0";
  });
  let pizzaChoice = new Pizza(sizeArray, toppingArray);
  pizzaChoice.sumToppingPrice(toppingPrice, sizeArray);
  return ("You ordered a " + pizzaChoice.size + " pizza with these toppings: " + pizzaChoice.toppings.join(', ') + ". This will cost $" + pizzaChoice.price.reduce(add) + ".");
};

// Front end UI
$(document).ready(function() {
  $("#choose-options").submit(function(event) {
    event.preventDefault();
    let sizeInput = $("#choose-size").val();
    let toppingInput1 = $("#choose-topping-1").val();
    let toppingInput2 = $("#choose-topping-2").val();
    let toppingInput3 = $("#choose-topping-3").val();
    let outputOrder = makePizza(sizeInput, toppingInput1, toppingInput2, toppingInput3);
    $("#display-order").text(outputOrder);
  });
});