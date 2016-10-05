

prisoners = prisoners.map(function(el){
    el.score = 0
    el.matchesPlayed = 0
    return el
})

console.log(prisoners)


for ( var i = 0; i < 100; i++ ) {

    // shuffle prisoners first so the sorting is more fair.
    shuffle(prisoners)

    // sort the prisoners so that prisoners who have played the fewest matches will chosen sooner.
    prisoners.sort(function(a,b){
        return a.matchesPlayed - b.matchesPlayed
    })


    playMatch(prisoners[0], prisoners[1])

}



