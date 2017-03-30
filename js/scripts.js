function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.findPrice = function() {
  var total = (this.toppings * 0.8) + (this.size / 1.5);
  return total;
}

// function Order() {
//
// }
//
// function Customer(name, address) {
//
// }

$(function() {
  $('form#add-pizza').submit(function(event) {
    var selectedToppings = parseInt($('input:checkbox[name=toppings]:checked').length);
    var pizzaSize = parseInt($('select#select-size').val());
    var pizza = new Pizza(selectedToppings, pizzaSize);
    var pizzaPrice = pizza.findPrice();
    

    event.preventDefault();
  });
});
