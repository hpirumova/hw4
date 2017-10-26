/*let c = document.getElementByClassName("myCanvas");
let ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
{

let center = ctx.context.x;
while( x <= 500){
  x++;
}
while( x >= 100){
  x--;
}
*/

let elem = document.getElementsByClassName("circle");
let x = elem.getAttribute("left");
let y = elem.getAttribute("top");


while (x > = 500){
setTimeinterval(changePosition, 1000);
x += 100;
}

function changePosition(){
   elem.setAttribute(left, x); 
   }
