Infinite Agenda
=============

Difficulty - 5/5
---------

Objective
----------

Create an infinite-scroll agenda.

Resources
----------
- <a href="http://www.quirksmode.org/js/events_order.html">Events Order - Quirksmode</a>
- <a href="http://ui-patterns.com/patterns/ContinuousScrolling">Continuous Scrolling - ui-patterns</a>
- <a href="http://uxdesign.smashingmagazine.com/2013/05/03/infinite-scrolling-get-bottom/">Infinite Scrolling: Let’s Get To The Bottom Of This - smashingmag</a>
- <a href="http://uxmovement.com/navigation/infinite-scrolling-best-practices/">Infinite Scrolling Best Practices - uxmastery</a>
- <a href="http://eviltrout.com/2013/02/16/infinite-scrolling-that-works.html">Infinite Scrolling that Works</a>

Requirements
----------
- Write a calendar app that displays the user’s appointments in an agenda format (that is, a linear list of days, not a calendar grid). Today should be at the top, tomorrow below, and so on. Javascript's native Date object may be useful.
- The user can click on a day to add a new appointment.
    - The form will appear inline when the user clicks an add button and disappear again after the user submits.
    - The form should be empty again each time the user adds a new appointment.
    - The user should be able to hit enter to submit the form.
- The user can click on an appointment to edit it. Convert the appointment into a form with the fields prefilled for the user to edit. Convert it back to non-editable text when they are done editing.
- The page should load with one week shown, but as the user scrolls down, new days should be added dynamically.

Bonus I
--------
Save the user's appointments to localStorage. Javascript's built-in functions JSON.stringify and JSON.parse may be useful. However, it is difficult to stringify date objects. What happens when you try to stringify a date object? How can you work around this limitation?

Bonus II
--------
Create a calendar view.