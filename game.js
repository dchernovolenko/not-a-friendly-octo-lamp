var canvas = document.getElementById("thing");
var clear = document.getElementById("clear");
var stopv = document.getElementById("Stop");
var grow = document.getElementById("grow");
var screen = document.getElementById("screen");
var ctx = canvas.getContext("2d");
var r = 0;
var t = 0;
var z = 1;
var x = Math.random()*500;
var y = Math.random()*500;
var dx = 5;
var dy = 5;
var requestID;

ctx.beginPath();


var drawcirc = function(){
    ctx.beginPath();
    ctx.arc(250,250, r, 0, 2* Math.PI);
    clearcan()
    ctx.fill();
    ctx.stroke();
    if(r<250 && z == 1){
        r++;
    }
    if(r == 250){
       z = 0
    }
    if(z == 0){
        r--
    }
    if(r == 1){
        z = 1
    }
    requestID = window.requestAnimationFrame(drawcirc);

}

var screensaver = function(){
    ctx.beginPath();
    ctx.arc(x,y, 20, 0, 2* Math.PI);
    clearcan()
    ctx.fill();
    ctx.stroke();
    console.log(x);
    if(x>580 || x<20){
        dx = -dx;
    }
    if(y>480 || y<20){
       dy = -dy;
    }
    x += dx;
    y += dy;
    requestID = window.requestAnimationFrame(screensaver);

}

var clearcan = function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

var clearfull = function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    r = 0;
    x = Math.random()*500;
    y = Math.random()*500;
    dx = 5;
    dy = 5;
}
var stop = function(){
    window.cancelAnimationFrame (requestID)
}



stopv.addEventListener("click", stop);
clear.addEventListener("click", clearfull);
grow.addEventListener("click", drawcirc);
screen.addEventListener("click", screensaver);