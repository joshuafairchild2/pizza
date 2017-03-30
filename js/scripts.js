function Pizza(size, sauce, toppings, cheeses) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
  this.cheeses = cheeses;
}

Pizza.prototype.findPrice = function() {
  var price = (this.toppings * 0.8) + (this.size / 2) + (this.sauce) + (this.cheeses * 2 );
  return price;
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
    var selectedSize = parseInt($('select#select-size').val());
    var selectedSauce = parseInt($('select#select-sauce').val());
    var checkedToppings = parseInt($('input:checkbox[name=toppings]:checked').length);
    var checkedCheeses = parseInt($('input:checkbox[name=cheeses]:checked').length);
    var newPizza = new Pizza(selectedSize, selectedSauce, checkedToppings, checkedCheeses);
    var newPizzaPrice = newPizza.findPrice();

    $('#output').text('Cost: $' + newPizzaPrice.toFixed(2));
    event.preventDefault();
  });
});
