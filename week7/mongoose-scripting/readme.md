Mongoose Scripting
==========

Difficulty - 1/5
---------

Objective
-----------
Become familiar with the Mongoose npm library.  It will be the main way you interact with your database in Node

Skills
---------
- Starting MongoDB on your machine
- Mongoose commands
- Database scripting

Resources
----------
- <a href="http://mongoosejs.com/docs/guide.html">Mongoose Docs</a>

Requirements
---------

Part I
-------
- Start Mongo on your machine with `sudo mongod`. Keep this tab running as long as you are interacting with the database (just like the last exercise!).
- In a new terminal tab, get into the mongo shell (`mongo`) and then the zoo database (`use zoo`)
- Run the command `db.dropDatabase()` - this will clear out the zoo database entirely so we can start from scratch

Part II
--------

- Create a new file called `dbScript.js`
- Make sure to run `npm install mongoose --save` to include `mongoose` and a dependency
- Add a connect string to your script : 

```javascript
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/zoo');
```

- Next, define your Schema for an `animals` collection.  The schema should be as follows:

| Property | Type      |
|----------|-----------|
| name     | String    |
| diet     | String    |

- `vistitors` Schema : 

| Property          | Type      |
|-------------------|-----------|
| name              | String    |
| favoriteAnimals   | Array     |

Part III
-------
- Create 2 arrays, one for animals and one for visitors.  Now add a few objects to each one of those arrays - this will be your data!
- Loop over your arrays and create new documents / save them to the database
- Congrats!  These objects should now be in the database.  Verify by going into the mongo shell and performing `find`'s on the collections.

Part IV
--------
- Comment out the code that is adding visitors / animals to the database
- Write the following `find` queries : 
    - Execute a query that finds all users with a given favorite animal in their list.
    - Execute a query that adds an animals to a visitor's favorite animal list



