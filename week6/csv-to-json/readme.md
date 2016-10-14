CSV to JSON
========

Difficulty - 2/5
---------

Objective
-----------
Write a node script that converts a csv (comma-separated values) file to json.

Requirements
---------
If this is your input file:

<pre>
name,age,city
Rene,35,Vancouver
Thomas,29,Portland
Lexi,28,Seattle
</pre>

Then you should be able to convert it to the following JSON:

<pre>
[{ "name": "Rene", "age": "35", "city": "Vancouver" },
{ "name": "Thomas", "age": "29", "city": "Portland" },
{ "name": "Lexi", "age": "28", "city": "Seattle" }]
</pre>

With this command:

<code>node csv-to-json.js input.csv output.json</code>