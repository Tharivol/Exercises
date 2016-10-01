var Alice = {
    name : 'Alice',
    play : function(matchHistory){
        // random
        var choice = Math.random()
        if ( choice > .5 ) { return 'cooperate' }
        else { return 'betray' }
    }
} 

prisoners.push(Alice)