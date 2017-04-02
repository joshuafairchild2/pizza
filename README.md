# **:pizza: :pizza: :pizza: Pizza Delivery Website :pizza: :pizza: :pizza:**

*Exercise for Epicodus, 04/01/2017*

**By Joshua Fairchild**


---

## Description
This is a webpage where the user has the pleasure of ordering a pizza from a website. The user goes through a series of prompts, customizing their order and when they get to the end they are returned a summary of the information they input, as well as the total price of their order. The business logic of the webpage is centered around three different objects: Pizza, Order and Customer. Each object contains some of the information the user entered, and then that information is accessed in the UI logic (mainly with jQuery) to display the information back to the user when they submit their order. The webpage determines the total price of the order by using two prototype methods, one finds the total price of a Pizza object and the other finds the total price of the Order object. The webpage is styled using Bootstrap and custom CSS, with some animations too.


#### Basic Specifications
| Behavior | Example Input | Example Output |
| ------   | ------------- |----------------|
| Program can gather input from the user. | *User "adds" a pizza selecting size, sauce and toppings.* | Program generates a "Pizza" object utilizing the user input. |
| Program can determine the price of what the user has ordered | *User orders two unique pizzas, two drinks and a side.* | Program generates a number consistent with an arbitrary pricing formula. |
| Program can properly display the information that it has generated/been provided with. | *User orders a pizza (x), a drink (y), a side (z) and provides their personal information.* | "Thank you *[user]*! Your total is *[arbitrary total]*. <br><br>Your order of *x, y* and *z* is on the way!" |

----
#### Setup/Installation
* Clone this repository
`git clone https://github.com/joshuafairchild1/pizza`

* Navigate to "index.html" within the root directory and open it with your preferred web browser (Preferrably chrome :heart:)

#### Technologies Used
* HTML
* CSS with Bootstrap
* JavaScript with jQuery

#### GitHub Pages
*https://joshuafairchild1.github.io/pizza/*

#### Legal

This software is licensed under the MIT license

Copyright (c) 2017 Joshua Fairchild
