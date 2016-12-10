var sqr = document.getElementsByClassName("sqr")[0]; 
var positionLeft = 120;
var positionTop = 150;
function moveRight(){
    positionLeft = positionLeft + 20;
    sqr.style.left = positionLeft + "px";

}

function moveLeft(){

    positionLeft = positionLeft - 20;
    sqr.style.left = positionLeft + "px";


}

function moveTop(){
    
    positionTop = positionTop - 20;
    sqr.style.top = positionTop + "px";


}
function moveBottom(){

    positionTop = positionTop + 20;
    sqr.style.top = positionTop + "px";


}




 