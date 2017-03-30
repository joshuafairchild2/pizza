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

function Customer(name, number, address, paymentMethod, orderTotal) {
  this.fullName = name;
  this.number = number;
  this.address = address;
  this.paymentMethod = paymentMethod;
  this.orderTotal = orderTotal;
}

// function Order() {
//
// }

// Order.protoyype.findTotal = function() {
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


    $('form#customer-info').submit(function(event) {
      var inputName = $('input#customer-name').val();
      var inputNumber = $('input#customer-number').val();
      var inputAddress = $('input#customer-address').val();
      var inputPaymentMethod = $('select#cash-or-card').val();
      var customer = new Customer(inputName, inputNumber, inputAddress, inputPaymentMethod, newPizzaPrice);


      $('#name').text(customer.fullName);
      $('#number').text(customer.number);
      $('#address').text(customer.address);
      $('#payment-method').text(customer.paymentMethod);
      $('#total').text(customer.orderTotal);
      event.preventDefault();
    });


    event.preventDefault();
  });
});
