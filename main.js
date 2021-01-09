var mouseEvent="empty";
var last_position_of_y,last_position_of_x;
canvas =document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
color="black";
line_width=2;

canvas.addEventListener("mousedown",my_mouse_down);
function my_mouse_down(e){
mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e){
mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave(e){
mouseEvent="mouseleave"
}

canvas.addEventListener("mousemove",my_mouse_move);
function my_mouse_move(e){
 current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
 current_position_of_mouse_y=e.clientY - canvas.offsetTop;

if(mouseEvent=="mousedown"){
ctx.beginPath();
ctx.lineWidth=line_width;
ctx.strokeStyle=color;

console.log("last position of X and Y cordinates are :");
console.log("X=" + last_position_of_x+" Y=" +last_position_of_y);
ctx.moveTo(last_position_of_x,last_position_of_y);


console.log("current position of X and Y cordinates are :");
console.log("X=" + current_position_of_mouse_x+" Y=" +current_position_of_mouse_y);
ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
ctx.stroke();
}
last_position_of_x=current_position_of_mouse_x;
last_position_of_y=current_position_of_mouse_y;

}


