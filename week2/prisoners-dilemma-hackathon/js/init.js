/*
Iterated prisoners dilemma.
Winning algorithms tend to have these features:
1 - Nice        : Successful algorithms often start off being cooperative, until their opponent proves to be traitorous.
2 - Retaliative : Successful algorithms will punish traitorous behaviour, even at their own expense. 
3 - non-greedy  : In a given 1-on-1 match, a successful algorithm tries to get the best possible score for itself, and does not necessarily try to 'beat' its opponent's score. 
*/



// a 'match' is 100 iterations of the prisoners dilemma played between 2 players
var playMatch = function(prisonerA, prisonerB){
    var matchHistory = []
    for ( var i = 0; i < 100; i++ ) {
        // a 'game' is a single iteration of the prisoners dilemma between 2 players
        playGame(prisonerA, prisonerB, matchHistory)
    }

    console.log('match history? ', matchHistory)
    
}

var playGame = function(prisonerA, prisonerB, matchHistory){
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    console.log(`playing game ${matchHistory.length} between ${prisonerA.name}(${prisonerA.score}) and ${prisonerB.name}(${prisonerB.score}).`)
    var choices = {}
    choices[prisonerA.name] = prisonerA.play(matchHistory)
    choices[prisonerB.name] = prisonerB.play(matchHistory)
    console.log('choices? ', choices)

    if ( choices[prisonerA.name] === 'cooperate' && choices[prisonerB.name] === 'cooperate' ) {
        prisonerA.score += -1
        prisonerB.score += -1
        console.log(`${prisonerA.name} and ${prisonerB.name} cooperated.`)
    }
    else if ( choices[prisonerA.name] === 'cooperate' && choices[prisonerB.name] === 'betray' ) {
        prisonerA.score += -3
        prisonerB.score += 0
        console.log(`${prisonerB.name} betrayed ${prisonerA.name}.`)
    }
    else if ( choices[prisonerA.name] === 'betray' && choices[prisonerB.name] === 'cooperate' ) {
        prisonerA.score += 0
        prisonerB.score += -3
        console.log(`${prisonerA.name} betrayed ${prisonerB.name}.`)
    }
    else if ( choices[prisonerA.name] === 'betray' && choices[prisonerB.name] === 'betray' ) {
        prisonerA.score += -2
        prisonerB.score += -2
        console.log(`${prisonerA.name} and ${prisonerB.name} betrayed each other.`)
    }

    matchHistory.push(choices)

}