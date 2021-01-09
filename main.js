
var last_position_of_y,last_position_of_x;
canvas =document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
color="black";
line_width=2;

var width=screen.width;

new_width=screen.width - 70;
new_height=screen.height - 300;

if(width<992){
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    console.log("my touch start");
    last_position_of_x=e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touch_move);
function my_touch_move(e){
    console.log("my touch move");
 current_position_of_touch_x=e.touches[0].clientX - canvas.offsetLeft;
 current_position_of_touch_y=e.touches[0].clientY - canvas.offsetTop;

ctx.beginPath();
ctx.lineWidth=line_width;
ctx.strokeStyle=color;

console.log("last position of X and Y cordinates are :");
console.log("X=" + last_position_of_x+" Y=" +last_position_of_y);
ctx.moveTo(last_position_of_x,last_position_of_y);


console.log("current position of X and Y cordinates are :");
console.log("X=" + current_position_of_touch_x+" Y=" +current_position_of_touch_y);
ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
ctx.stroke();

last_position_of_x=current_position_of_touch_x;
last_position_of_y=current_position_of_touch_y;

}


