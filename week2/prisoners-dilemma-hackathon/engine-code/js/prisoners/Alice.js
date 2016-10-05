// random
var Alice = {
    name : 'Alice',
    play : function(matchHistory){
        var choice = Math.random()
        if ( choice > .5 ) { return 'cooperate' }
        else { return 'betray' }
    }
} 

prisoners.push(Alice)