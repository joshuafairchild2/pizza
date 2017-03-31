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

function Customer(name, number, address, paymentMethod) {
  this.fullName = name;
  this.number = number;
  this.address = address;
  this.paymentMethod = paymentMethod;
}

function Order() {
  this.pizzas = [];
  this.drinks = 0;
  this.extras = 0;
  this.customer = [];
}

// Order.protoype.findTotal = function() {
//
// }


$(function() {
  var order = new Order();
  $('form#add-pizza').submit(function(event) {
    var selectedSize = parseInt($('select#select-size').val());
    var selectedSauce = parseInt($('select#select-sauce').val());
    var checkedToppings = parseInt($('input:checkbox[name=toppings]:checked').length);
    var checkedCheeses = parseInt($('input:checkbox[name=cheeses]:checked').length);
    var newPizza = new Pizza(selectedSize, selectedSauce, checkedToppings, checkedCheeses);
    var newPizzaPrice = newPizza.findPrice();
    order.pizzas.push(newPizza);
    $('#order-helper #pizzas').text(order.pizzas.length);
    $(this).trigger('reset');
    $('#item-added').modal('show');
    $('#item').text('Pizza');

    $('#item-modal-btn').click(function() {
      $('#item-added').modal('hide');
    });

    $('#continue-btn1').click(function() {
      $('#add-pizza').hide();
      $('#drinks-extras').show();
    });

    $('form#add-drinks').submit(function(event) {
      var selectedDrink = $('input:radio[name=drinks]:checked');
      if (selectedDrink.val()) {
        order.drinks += parseInt(selectedDrink.length);
        $('#order-helper #drinks').text(order.drinks);
        $(this).trigger('reset');
        $('#item-added').modal('show');
        $('#item').text('1 ' + selectedDrink.val())
      }
      event.preventDefault();
    });

    $('form#add-extras').submit(function(event) {
      var selectedExtra = $('input:radio[name=extras]:checked');
      if (selectedExtra.val()) {
        order.extras += parseInt(selectedExtra.length);
        $('#order-helper #extras').text(order.extras);
        $(this).trigger('reset');
        $('#item-added').modal('show');
        $('#item').text(selectedExtra.val());
      }
      event.preventDefault();
    });

    $('#continue-btn2').click(function() {
      $('#drinks-extras').hide();
      $('#customer-info').show();
    });

    $('form#customer-info').submit(function(event) {
      var inputName = $('input#customer-name').val();
      var inputNumber = $('input#customer-number').val();
      var inputAddress = $('input#customer-address').val();
      var inputPaymentMethod = $('select#cash-or-card').val();
      var customer = new Customer(inputName, inputNumber, inputAddress, inputPaymentMethod);
      order.customer.push(customer);

      $('#customer-info').hide();
      $('#confirmation').show();
      $('#name').text(customer.fullName);
      $('#number').text(customer.number);
      $('#address').text(customer.address);
      $('#payment-method').text(customer.paymentMethod);
      event.preventDefault();
    });


    event.preventDefault();
  });
});
