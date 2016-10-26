Mongo Shell
==========

Difficulty - 1/5
---------

Objective
-----------
Become familiar with Mongo Shell commands

Skills
---------
- Starting MongoDB on your machine
- Mongo commands
- Mongo Shell
- Mongo Document structure

Resources
----------
- <a href="http://docs.mongodb.org/manual/contents/">MongoDB Manual</a>
- <a href="http://docs.mongodb.org/manual/reference/operator/query/">MongoDB Manual - Query and Projection Operators</a>
- <a href="http://docs.mongodb.org/manual/reference/operator/update/">MongoDB Manual - Update Operators</a>

Requirements
---------

Part I
-------
- Start Mongo on your machine sudo mongod. Keep this tab running as long as you are interacting with the database.
- In a separate Terminal tab, start Mongo Shell: mongo
- Switch the current database to "school": use school
- Add 3 students to your students collection, make one of the students you.
<pre>
db.students.insert({name: "MY NAME"}) 
db.students.insert({name: "Alan Turing", age: 103}) 
db.students.insert({name: "Dennis Ritchie", age: 74})
</pre>
- Find the document that refers to you. <code>db.students.findOne({name: "MY NAME"})</code>
- Change your name in the collection: <code>db.students.update({name: "old name"}, { $set: { name: "your nickname" } })</code>
- Find all of the students in the collection: <code>db.students.find()</code>
- Remove yourself from the students collection: <code>db.students.remove({name : "your name"})</code>
- Remove all of the students from the students collection: <code>db.students.remove({})</code>
- Execute <code>db.students.find()</code> find to confirm that all students have now been removed.

Part II
-------
- Create a zoo database with a collection of <code>animals</code> and <code>visitors</code>. Each animal should have a name ("elephant") and a diet ("herbivore"). Each visitor should have a name ("Marcos") and a favorite animal ("Lion"). Insert some sample animals and visitors.
- Execute a query that finds all users with a given favorite animal.
- Execute a query that changes a given visitor's favorite animal.
- Modify your visitors so that they have an array of favorite animals instead of a single animal. After the arrays are created, use the <a href="http://docs.mongodb.org/manual/reference/operator/update/push/">$push</a> operator to add an animal to the visitor's favorites.

Bonus
--------
Add the countries from the Countries.json sample data to a Mongo collection. Use the <code>mongoimport</code> command, described in the documentation and demonstrated in this example. After importing successfully, confirm that you can make the following queries:

- <code>findOne</code> country that matches a given name.
- <code>find</code> countries that contain part of a string in their name.
- <code>find</code> countries whose names begin with 'Z'.
- <code>sort</code> countries by name in reverse alphabetical order.

<strong>Success!</strong> Now you know how to create and manipulate a MongoDB database from the Mongo shell!