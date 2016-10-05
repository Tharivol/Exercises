Iterated Prisoner's Dilemma
==============

Skills
----------
- Writing callback functions
- Looping through arrays 
- Conditional Logic
- Pair Programming

Background
-----------
In its simplest form, the prisoners dilemma works as follows:

There is a prison in which two prisoners are being held because of their alleged involvement in a criminal organization. The police take each of the prisoners to a separate interrogation room, and try to get each of them to rat out the other. The prisoners are interrogated individually, and cannot communicate with each other before or during the interrogations. If both prisoners COOPERATE with each other, they each get a 1-year prison sentence. If both prisoners attempt to BETRAY each other, they each get a 2-year prison sentence. If one prisoner chooses BETRAY and the other chooses COOPERATE, the prisoner who chose BETRAY get no additional prison time, while the prisoner who chose COOPERATE gets a 3-year prison sentence. If these rules are unclear, you may find it easier to understand by reading the engine-code. 

A more complex form of the prisoners dilemma is the iterated prisoners dilemma. "Iterated" just means that the game is played multiple times. Instead of both prisoners having one chance to BETRAY or COOPERATE, this game will be played 100 times. The set of 100 games between 2 prisoners is called a 'match'. The prisoners still cannot communicate with each other directly, but during each game, each prisoner can view an array of the choices their opponent made previously in the match. Assume that the prisoners are immortal, so they can meaningfully accumulate hundreds, or even thousands of years of prison time.

Today, we will be writing programs that play a multiplayer, iterated prisoners dilemma. Instead of having only 2 prisoners, each pair of students will write a program for their own prisoner to play the game, resulting in about 10 prisoners. Prisoners will be chosen 2 at a time to play a match of the iterated prisoners dilemma. After playing a 100-game match, 2 new prisoners will be chosen to play a match of the iterated prisoners dilemma. After each prisoner has played several matches, students will be given the opportunity to revise their program after reviewing how well their competitors did. After several rounds of revisions, the prisoner with the shortest prison sentence wins. 


Requirements
------------
Your team will need to create an object representing a prisoner. The prisoner object should have 2 properties. The `name` property should be a string that identifies your prisoner. Prisoner names must be unique. The `play` property is a method that is called from each prisoner on each iteration of the game. The `play` method will be called with one argument, an array of objects containing the history of the match so far.  For example, on the third game of a match between Alice and Bob, the `matchHistory` array that is passed into the `play` method might look like this:


```
[
    {
        Alice : "cooperate",
        Bob   : "cooperate"
    },
    {
        Alice : "betray",
        Bob   : "cooperate"
    },
    {
        Alice : "betray",
        Bob   : "betray"
    }
]
```

The `play` method must return either `"cooperate"` or `"betray"`. You can write all sorts of complex logic that looks at the match history to predict what your opponent will do, but ultimately your `play` method must return either `"cooperate"` or `"betray"` every time it is called. After creating your prisoner, push them into an array called `prisoners`. This array has already been created in another script. You do not need to create an array called prisoners. An example script that creates a prisoner might look like this:

```
var Alice = {
    name : 'Alice',
    play : function(matchHistory){
        var choice = Math.random()
        if ( choice > .5 ) { return 'cooperate' }
        else { return 'betray' }
    }
} 

prisoners.push(Alice)
```

In the above example, Alice chooses either "betray" or "cooperate" at random. She does not even consider the match history, even though it is being passed into the `play` method. You will probably want to write a more sophisticated `play` method that iterates over the match history. 