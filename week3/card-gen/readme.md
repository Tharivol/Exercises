Card Generator
===========

Skills
--------
- Modeling Data
- Event Handling
- Data Structure
- Angular Factory


Background
--------
This exercise is designed to make you more comfortable with handling events and data creation in Angular.

There are a handful of directives that will help you and your partner be successfull when working on this project.  Knowing what directives can help you solve a problem or how to find them in documentation is extremely important in Angular.

Objective
-------
You run a card shop that sells Magic The Gathering cards and just got a new shipment in.  You need to build a form to update your website to reflect these new cards.

<strong>Tip</strong>: Use incremental programming to code the smallest piece needed to see a result. Test and repeat. Start with the parts that are testable and build from there. Do not try to code multiple classes or functions at once.

Requirements
----------
The storefront you create needs to following elements :

- Form 
    - A form to create new cards to add to the website
        - This form should add card objects to your factory
- Card Gallery
    - A section on the page to display your cards
        - These cards should come from your angular factory

Part I: The Form
-----------
- Create an HTML form to model properties on the new Magic cards
- The properties you should be modeling are:

| Property Name | Data Type   |
|---------------|-------------|
| name          | String      |
| manaColor     | String      |
| power         | Number      |
| toughness     | Number      |
| art           | String (url)|    |

- Your form should have a `submit` event handler that adds this new card to your gallery
- Use an Angular Factory to hold your data!

Part II: The Gallery
-----------
- This section of the site is where you will display both the art and information about each card
- Each card should have its own block of HTML that is generated dynamically


Bonus
-----------
Part I: CSS Framework
- Use a CSS framework to make your storefront look good / responsive and help you handle the layout of the Magic cards