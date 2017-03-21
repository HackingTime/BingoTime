window.onload = initAll;
var useNums = new Array(76);
function initAll(){
  marquee();
if (document.getElementById){
document.getElementById("reload").onclick = anotherCard;
newCard();
}



}
function marquee(){
var rand = Math.floor(Math.random()* 75) + 1;
document.getElementById("scroll").innerHTML = rand;
}

function setSquare(thisSquare) {
var currSquare = "square" + thisSquare;
var colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
var colBasis = colPlace[thisSquare] * 15;
var newNum;

do {
  newNum = colBasis + getNewNum() + 1;
} while (useNums[newNum]);


if (!useNums[newNum]){


  useNums[newNum] = true;
  document.getElementById(currSquare).innerHTML = newNum;
  document.getElementById(currSquare).className = "";
  document.getElementById(currSquare).onmousedown = toggleColor;
}


}



function getNewNum()  {

return(Math.floor(Math.random()* 15));

}
function newCard() {
  for(var i=0;i<24;i++){

setSquare(i);

  }
}
function anotherCard() {
  for(var i=1;i<useNums.length;i++){

useNums[i]=false;
  }
  newCard();
  return false;
}

function toggleColor(evt) {
  if(evt){
var thisSquare = evt.target;

  }
  else{
var thisSquare = window.event.srcElement;

  }
  if(thisSquare.className == ""){

thisSquare.className = "pickedBg";

  }
  else {
    thisSquare.className = "";
  }
}
