The Wondrous Emporium
=============

Difficulty - 5/5
---------

Objective
----------
You are a purveyor of fine wares and goods! It's time for you to enter the modern world of technology and take to the web to share your products. You need to create an online store front using Angular, Express, and MongoDB.

Skills
-------
- AngularJS
- Express
- MongoDB / Mongoose

Resources
----------
- <a href="https://angularjs.org/">AngularJS.org</a>
- <a href="https://egghead.io/technologies/angularjs">Egghead Tutorials</a>

Requirements
------------

Part 1: Setting it Up
-------------
- Scaffold out a new express application
- Include Angular script from cdnjs
- Take a moment to think about what your emporium sells! Is it food? Pets? Bicycles?
- Consider the things you will need to keep track of, such as name, description, and price.

Part 2: Heading to Angular Town
-----------------
- Create a main.js file in your public directory to house your angular module
- Once you have a module and know what sort of information you need for each product, set up a factory that returns an array of hard-coded js objects that represent different products.
- Create a controller to manage the main section. Inject the factory you created into the controller
- Render the data from the factory.
- Check your work. Make sure that when you navigate the browser to your page, it renders a list of all the products you have listed in your factory.

Part 3: The Database
--------------
- Now that we have data loading into the page, swap out the hard-coded data for information stored in the server-side database.
- Include mongoose in your application. Be sure to add the connection code into your app.js and a schema to represent your data into the models directory. The schema should define what properties each product will have as well as export the model that the schema defines. (You may want to seed the database with a few tester products)
- Using the ng-resource angular plugin (which can be found on cdnjs), set up a resource in your previously defined factory to replace the hard-coded data. You will need to define the url structure yourself on the server side.
- The primary route that needs to be defined in app.js will be something like /products/. Eventually it will also take in a url parameter, but skip that for now. Take advantage of multiple express controllers by setting up an apiController instead of handing everything over to indexController.
- Make sure that your new route will <code>res.send</code> all the documents found in your database's collection.
- Check your work. You should now see the products listing on your homepage as they were before, except now they are being loaded in dynamically from the database!

Part 4: The Cart
----------------
In order to make our store an actual online store, we need our customers to be able to purchase items! Let's set up a simple cart to get things rolling.
Add a separate cart section to your jade file and set up a new controller for the cart section.

- Set up a new factory too contain the array of "purchased" items
- Inject the new factory into your new cart controller.
- Modify the $scope of your product listing controller to include a method for adding to the cart, called <code>addToCart()</code>.
- In the template being rendered for your <code>ng-repeat</code>, add a button that, on <code>ng-click</code> will fire your <code>addToCart()</code> method
- When <code>addToCart()</code> is invoked, add the calling product to the purchased factory set up above.
- Set up your cart controller to set the list of purchased products to the <code>$scope</code>
- Set up an <code>ng-repeat</code> in the cart section to iterate over all the current products in the cart factory.
- Check your work. When clicking the add to cart button in your product listing, the product should be also added to the cart section and rendered in order. You should be able to add multiple products to the cart. The cart doesn't need to save to the database.

Bonuses
----------
- Add a form for inserting new items into the store. Make sure they are persisted to the database!
- Add a form for editing existing items. When the updates are saved, make sure they are persisted to the database!
- Make use of ng-router to set up multiple "pages" for your app, allowing users to view more details about an item, or moving the "new" and "update" forms to their own pages.
- Use a directive to render a product. This will allow you to re-use functionality in your ng-repeats.
- Add a search box that will allow users to search through the product listing.
- Instead of adding each product to the array when adding to cart, check to see if it already exists and instead increment a counter. This will display in the view as 2x or 3x the product's name instead of listing the product 3 times. Add the ability to modify the count and remove the item from the cart entirely.