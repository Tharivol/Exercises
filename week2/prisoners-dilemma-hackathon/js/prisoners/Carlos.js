
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

prisoners.push(Carlos)