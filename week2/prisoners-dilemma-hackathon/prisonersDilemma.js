
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
    console.log(`playing game ${matchHistory.length}`)
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

// random
var Alice = {
    name : 'Alice',
    play : function(matchHistory){
        // return 'cooperate'
        var choice = Math.random()
        if ( choice > .5 ) { return 'cooperate' }
        else { return 'betray' }
    }
}


// kind
var Bob = {
    name : 'Bob',
    play : function(matchHistory){
        // console.log('bob is thinking...', matchHistory)
        return 'cooperate'
    }
}

var Carlos = {
    name : 'Carlos',
}

var prisoners = []
prisoners.push(Alice)
prisoners.push(Bob)
// prisoners.push(Carlos)


prisoners = prisoners.map(function(el){
    el.score = 0
    el.matchesPlayed = 0
})


playMatch(Alice, Bob)

console.log(Alice, Bob)



