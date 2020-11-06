class Player{
    constructor (){}
    getCount(){
        var x=database.ref('playerCount');
        x.on("value",function(data){
    playerCount=data.val();
        })
    
    
    }
    updateCount(Count){
    
    
    database.ref('/').update({
        playerCount:Count
    });
    }
update(name){
var y="player"+playerCount;
database.ref(y).set({
    name:name
});
}
}