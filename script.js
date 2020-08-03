// get elements first

var color = document.getElementById("colorpicker");
var width = document.getElementById("width");
var canvas = document.getElementById("draw");
var clear = document.getElementById("clear");
// var eraserbutton = document.getElementById("eraser");

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
canvas.addEventListener("touchstart", startdrawing1,false);
canvas.addEventListener("mouseup", finishdrawing);
canvas.addEventListener("touchend", finishdrawing1,false);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("touchmove", draw1,false);
clear.addEventListener("click",erase);
// eraserbutton.addEventListener("click",eraser);

// Define positional

var x =0 ;
var y =0;
var isdrawing = false;
var iserasing = false;

function startdrawing(e){
    x = e.clientX;
    y = e.clientY;
    isdrawing = true;
}

function draw(e){
    if (isdrawing === true){
        drawline(x,y,e.clientX,e.clientY);
        x = e.clientX;
        y = e.clientY;
    } 
}

function finishdrawing(e){
    if (isdrawing === true){
        drawline(x,y,e.clientX,e.clientY);
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

// // eraser function 

// function eraser(){
//     console.log("eraser chosen");
//     canvas.addEventListener("mousedown", starterasing)
//     // canvas.addEventListener("touchstart", starterasing1,false);
//     canvas.addEventListener("mouseup", finisherasing);
//     // canvas.addEventListener("touchend", finisherasing1,false);
//     canvas.addEventListener("mousemove", erased);
//     // canvas.addEventListener("touchmove", erased1,false);

//     function starterasing(e){
//         x = e.layerX;
//         y = e.layerY;
//         iserasing = true;
//     }

//     function erased(e){
//         if (iserasing === true){
//             eraseline(x,y,e.layerX,e.layerY);
//             x = e.layerX;
//             y = e.layerY;
//         } 
//     }
    
//     function finisherasing(e){
//         if (isdrawing === true){
//             eraseline(x,y,e.layerX,e.layerY);
//             x = 0;
//             y = 0;
//             iserasing = false;
//         }
//     }
    
    
    
//     function eraseline(x1,y1,x2,y2){
//         context.beginPath();
//         context.strokeStyle = "beige";
//         context.lineWidth = width.value;
//         context.lineCap = "round";
//         context.moveTo(x1, y1);
//         context.lineTo(x2, y2);
//         context.stroke();
//         context.closePath();
    
//     }

    
    
// }
//for mobile

function startdrawing1(e){
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
    isdrawing = true;
}

function draw1(e){
    if (isdrawing === true){
        drawline1(x,y,e.touches[0].clientX,e.touches[0].clientY);
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
    } 
}

function finishdrawing1(e){
    if (isdrawing === true){
        drawline1(x,y,e.touches[0].clientX,e.touches[0].clientY);
        x = 0;
        y = 0;
        isdrawing = false;
    }
}



function drawline1(x1,y1,x2,y2){
    context.beginPath();
    context.strokeStyle = color.value;
    context.lineWidth = width.value;
    context.lineCap = "round";
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();

}