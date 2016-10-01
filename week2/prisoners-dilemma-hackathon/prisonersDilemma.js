




// kind
var Bob = {
    name : 'Bob',
    play : function(matchHistory){
        // console.log('bob is thinking...', matchHistory)
        return 'cooperate'
    }
}

// tit-for-tat
var Carlos = {
    name : 'Carlos',
    play : function(matchHistory){
        if ( matchHistory.length === 0 ) {
            return 'cooperate'
        }
        else {
            for ( var key in matchHistory[matchHistory.length - 1] ) {
                if ( key != this.name ) {
                    return matchHistory[matchHistory.length - 1][key]
                }
            }
        }
    }
}

var prisoners = []
prisoners.push(Alice)
prisoners.push(Bob)
prisoners.push(Carlos)


prisoners = prisoners.map(function(el){
    el.score = 0
    el.matchesPlayed = 0
})


playMatch(Alice, Carlos)

console.log(Alice)
console.log(Carlos)



