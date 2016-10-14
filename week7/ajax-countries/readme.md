Ajax Countries
===========

Difficulty - 3/5
---------

Objective
--------

Build an app that retrieves a list of all countries from the server using an Ajax request and renders them on the client. Add a search box that allows the user to search for a specific country.

Resources
----------
<a href="https://raw.githubusercontent.com/RefactorU/exercise-solutions/master/node/NODE7.5-ajax-countries/models/countriesModel.json">Countries.json</a> sample data.

Requirements
------------

Part I
-------
- Scaffold out a new express app.
- Add a button to the home page that says "Load Countries". You will add a click handler later.
- Add some client side JS to your public folder. Create an angular module and controller. <strong>Note:</strong> We added our client-side Javascript to the public folder because that is the directory that is set up as our static file server. It will serve up the file 'as-is' when requested from the home page.
- In your client side JS, add an event handler so that when the user clicks the button an Ajax request is made to the url '/countries'. Notice the request fail in the Network tab of developer tools. It won't work until we add an appropriate route on the back-end.
- Add a route to your server which handles the <code>/countries</code> url. For testing purposes add a <code>res.send('TEST');</code> to the body of the route handler. Confirm that the route is set up correctly by clicking the button and seeing that the Ajax request returns successfully. You should see a 200 success code in Dev Tools.
- Copy <a href="https://raw.githubusercontent.com/RefactorU/exercise-solutions/master/node/NODE7.5-ajax-countries/models/countriesModel.json">Countries.json</a> into <code>/models</code>. In your server, require your model file (require can include json files directly if they end in '.json'; you don't need to convert it into a js file or add module.exports). In the /countries route, print the countries to the server-side console to confirm that the file is defined and required correctly.
- In your <code>/countries</code> route handler, add <code>res.send(countries)</code>;. On the client-side, where you make your Ajax request, modify the callback to print the response to the client-side console to confirm that the countries are being sent from the server to the client.
- In your Ajax callback, show the resulting data in the DOM.

Part II
---------
- Add a text box and a search button at the top of the page.
- Add a click handler on the search button that makes an Ajax request to <code>/search</code>. Retrieve the value of the text box and pass it as data in the Ajax request.
- Add a <code>/search</code> route on the server-side. Confirm that the Ajax requests hits the correct endpoint using the same approach as step 4 in Part I.
- In the <code>/search</code> route handler, print <code>req.query</code> (GET route) or <code>req.body</code> (POST route) to see if it contains the search query entered on the front-end.
- Filter the countries array to only the names that match the user's search query, then send the matching countries back to the client.
- On the client-side, where you make your Ajax request, modify the callback to print the response to the client-side console to confirm that only the filtered countries are being sent from the server to the client.
- Show the resulting filtered countries in the DOM.

Bonus I
-------
- Add an icon next to each country that allows the user to toggle whether they have traveled to that country or not. When the icon is enabled, send an Ajax request to the server to add a hasTraveled flag to the correct country object.
- Modify the code that renders the country items so that they check the hasTraveled property coming back from the server and renders the icon accordintly.
- Refresh the page and test out the hasTraveled functionality. Because the countries array is stored in memory on the server, you should be able to refresh the page and maintain any changes that are made to the array (i.e. your Ajax request). (Restarting your server will reset the countries array back to the original.

Bonus II
-----
Store, retrieve, and modify the countries using a MongoDB database.