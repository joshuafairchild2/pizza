//stores the data for each pizza that gets added to the order
function Pizza(size, sauce, toppings, cheeses) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
  this.cheeses = cheeses;
}

//finds the price associated with a Pizza object
Pizza.prototype.findPrice = function() {
  var price = (this.toppings * 0.8) + (this.size / 2) + (this.sauce) + (this.cheeses * 2 );
  return price;
}

//stores the data for the user submitting the order
function Customer(name, number, address, paymentMethod) {
  this.fullName = name;
  this.number = number;
  this.address = address;
  this.paymentMethod = paymentMethod;
}

//stores the data for everything that the user has ordered
function Order() {
  this.pizzas = [];
  this.drinks = 0;
  this.extras = 0;
  this.customer = [];
}


//finds the price associated with an Order object
Order.prototype.findTotal = function() {
  var pizzasTotal = 0;
  for (var i = 0; i < this.pizzas.length; i++) {
    pizzasTotal += this.pizzas[i].findPrice();
  }
  var extrasTotal = this.extras * 3;
  var orderTotal = pizzasTotal + this.drinks + extrasTotal + 4; //4 is for the delivery fee
  return orderTotal;
}

$(function() {
  var order = new Order();

  $('form#add-pizza').submit(function(event) {
    event.preventDefault();
    var selectedSize = parseInt($('select#select-size').val());
    var selectedSauce = parseInt($('select#select-sauce').val());

    if (isNaN(selectedSize) || isNaN(selectedSauce)) {
      $('#invalid-form').modal('show');
    } else {
      var checkedToppings = parseInt($('input:checkbox[name=toppings]:checked').length);
      var checkedCheeses = parseInt($('input:checkbox[name=cheeses]:checked').length);
      var newPizza = new Pizza(selectedSize, selectedSauce, checkedToppings, checkedCheeses);
      var newPizzaPrice = newPizza.findPrice();
      order.pizzas.push(newPizza);

      $(this).trigger('reset');
      $('#item-added').modal('show');
      $('#item').text('Pizza');
      $('.pizzas').text(order.pizzas.length);

      $('#continue-btn1').click(function() {
        $('#add-pizza').slideUp('slow');
        $('#drinks-extras').slideDown('slow');
      });
    }
  });

  //this is the 'Close' button inside of the modals
  $('.modal-btn').click(function() {
    $('.modal').modal('hide');
  });

  //the first button that lets the user return to a previous screen (second to first)
  $('#back-btn1').click(function() {
    $('#drinks-extras').slideUp('slow');
    $('#add-pizza').slideDown('slow');
  });

  //the second and last button that lets the user go back a screen (third to second)
  $('#back-btn2').click(function() {
    $('#customer-info').slideUp('slow');
    $('#drinks-extras').slideDown('slow');
  });


  //the two forms where the user inputs drinks and sides/desserts
  $('form#add-drinks').submit(function(event) {
    var selectedDrink = $('input:radio[name=drinks]:checked');
    if (selectedDrink.val()) {
      order.drinks += parseInt(selectedDrink.length);
      $('.drinks').text(order.drinks);
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
      $('.extras').text(order.extras);
      $(this).trigger('reset');
      $('#item-added').modal('show');
      $('#item').text(selectedExtra.val());
    }
    event.preventDefault();
  });


  $('#continue-btn2').click(function() {
    $('#drinks-extras').slideUp('slow');
    $('#customer-info').slideDown('slow');
  });


  $('form#customer-info').submit(function(event) {
    event.preventDefault();
    var inputName = $('input#customer-name').val();
    var inputNumber = $('input#customer-number').val();
    var inputAddress = $('input#customer-address').val();
    var inputPaymentMethod = $('select#cash-or-card').val();

    if (!inputName || !inputNumber || !inputAddress || !inputPaymentMethod) {
      $('#invalid-form').modal('show');
    } else {
      var customer = new Customer(inputName, inputNumber, inputAddress, inputPaymentMethod);
      var newTotal = order.findTotal().toFixed(2);
      order.customer.push(customer);

      $('#order-helper').addClass('invisible');
      $('#customer-info').slideUp('slow');
      $('#output-total').text(newTotal)
      $('#confirmation').slideDown('slow');
      $('#name').text(customer.fullName);
      $('#number').text(customer.number);
      $('#address').text(customer.address);
      $('#payment-method').text(customer.paymentMethod);
    }
  });

  $('#refresh-btn').click(function() {
    location.reload();
  });
});
