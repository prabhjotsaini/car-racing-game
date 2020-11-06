class Form{
    constructor(){

    }
    display(){
var title=createElement('h2');
title.html("car racing game")
title.position(130,0);

var input=createInput('NAME');
var button=createButton('game Start')
var greeting=createElement('h3');
input.position(130,60);
button.position(250,200);
button.mousePressed(function(){
    input.hide()
    button.hide()
    var n=input.value();
    playerCount=playerCount+1
    player.update(n);
    player.updateCount(playerCount);
    greeting.html("hello"+n)
greeting.position(130,160);
})

    }
}