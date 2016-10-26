Dungeon Crawler
===========

Difficulty - 5/5
---------

Skills
--------
- Object-Oriented Programming
- Architecture
- Data Structure


Background
--------
One of the main purposes of this exercise is to make you think about architecture and organization before you even begin writing a single line of code.  Using Object-Oriented Programming will make this organization a lot easier so get ready to write some constructors!

Games, like most complex applications, require an enormous amount of organization and forethought.  All the game components must fit and work together for the game to be a smooth, cohesive experience.

Objective
-------
Using an object-oriented approach, create an dungeon-crawling game where the player can navigate through a series of rooms, fighting enemies and collecting items. Instructions are mainly guidelines, so be creative!

<strong>Tip</strong>: Use incremental programming to code the smallest piece needed to see a result. Test and repeat. Start with the parts that are testable and build from there. Do not try to code multiple classes or functions at once.

Requirements
----------
Your game must include the following "classes" (defined as Constructors in Javascript):

- World 
    - Contains the entire game world, including Player, Rooms, Items, and Monsters. 
    - The game will include only one instance of the world.
- Player 
    - Represents the player in the game, controlled by the user.
    - Has an inventory, which can be added to by picking up Items found in Rooms.
    - Can examine Items and Monsters.
    - Can pick up Items in Rooms.
    - Can use consumable Items (like potions).
    - Can drop Items from the inventory.
    - Has health, which goes down during attacks and can be restored with consumable Items.
    - Has strength, which is used to decide the amount of damage done to Monsters.
- Room 
    - Contains Monsters and Items. Also should contain navigation information about Rooms that can be traveled to (via left, right, up, down).
- Item 
    - Represents an Item in the game, either in a Room or in the Player's inventory. 
    - Can be picked up by the Player and used. Once an Item has been picked up, it should be removed from the Room that contains it.
- Monster 
    - Represents each individual Monster that can be encountered.
    - Has health, which goes down when damage is sustained.
    - Has strength, which is used to decide the amount of damage done to the Player.
    - When killed, the Monster should be removed from their containing Room.

Part I: Navigation
-----------
- Instantiate a World with a Player and some initial Rooms.
- Player should be able to navigate up, down, left, and right (depending on Room availability)
- Rooms are 0-dimensional, meaning the Player doesn't need to be able to move around the Room. They just move from Room to Room. Graphically, Rooms can fill the screen and show any Items or Monsters contained within.
- When transitioning between Rooms, use sliding animations to show navigation directionality.
- You can use the Moustrap library to enable keyboard controls.

Part II: Items
-----------
Populate Rooms with various Items and implement the Player's functionality of examining, picking up, using, or dropping Items (described in Requirements, above).

Part III: Fighting
--------------
- Player can choose to examine a Monster or fight it.
- Monsters won't fight unless instigated.
- Battle continues until someone is killed or the Player leaves the Room.
- If the Player leaves the Room during a battle, coming back to the Room will resume the fight.
- If the Player is killed, they can choose to:
    - Resume: keep everything, but restart the current Room. Refill health for both Player and current enemy.
    - Restart: restart the entire dungeon, resetting everything.