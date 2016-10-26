genFloorPlan(3, 8)

function genFloorPlan (minRooms, maxRooms) {
    const roomTypes = [
        'bedroom',
        'bathroom',
        'hallway',
        'living',
        'kitchen',
        'patio'
    ];
    let floorPlan = [
        [], [], [], [], [],
        [], [], [], [], [], 
        [], [], [], [], [],
        [], [], [], [], [],
        [], [], [], [], [],  
    ];

    const numRooms = Math.floor(Math.random() * maxRooms);
    console.log(numRooms)


 
}
setInterval(genFloorPlan, 200, 3, 8)