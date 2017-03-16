window.onload = initAll;
function initAll(){
  marquee();
for(var i=0; i<24;i++){
var newNum = Math.floor(Math.random()* 75) + 1;
document.getElementById("square"+i).innerHTML = newNum;
}


}
function marquee(){
var rand = Math.floor(Math.random()* 75) + 1;
document.getElementById("scroll").innerHTML = rand;
}
