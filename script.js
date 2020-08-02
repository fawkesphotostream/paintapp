// get elements first

var color = document.getElementById("colorpicker");
var width = document.getElementById("width");
var canvas = document.getElementById("draw");
var clear = document.getElementById("clear");

// Get context from canvas to draw on
var context = canvas.getContext("2d");

// Define when will we draw
resize();

// resize canvas when window is resized
function resize() {
  context.canvas.width = window.innerWidth; 
  context.canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
canvas.addEventListener("mousedown", startdrawing);
canvas.addEventListener("mouseup", finishdrawing);
canvas.addEventListener("mousemove", draw);
clear.addEventListener("click",erase);

// Define positional

var x =0 ;
var y =0;
var isdrawing = false;

function startdrawing(e){
    x = e.layerX;
    y = e.layerY;
    isdrawing = true;
}

function draw(e){
    if (isdrawing === true){
        drawline(x,y,e.layerX,e.layerY);
        x = e.layerX;
        y = e.layerY;
    } 
}

function finishdrawing(e){
    if (isdrawing === true){
        drawline(x,y,e.layerX,e.layerY);
        x = 0;
        y = 0;
        isdrawing = false;
    }
}



function drawline(x1,y1,x2,y2){
    context.beginPath();
    context.strokeStyle = color.value;
    context.lineWidth = width.value;
    context.lineCap = "round";
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();

}


function erase(){
    context.canvas.height = context.canvas.height;
}