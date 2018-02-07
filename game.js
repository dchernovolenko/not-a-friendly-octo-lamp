var canvas = document.getElementById("thing");
var clear = document.getElementById("clear");
var stopv = document.getElementById("Stop");
var ctx = canvas.getContext("2d");
var t = 0;
var z = 1;
var requestID;

ctx.beginPath();


var drawcirc = function(){
    ctx.beginPath();
    ctx.arc(250,250, t, 0, 2* Math.PI);
    clearcan()
    ctx.fill();
    ctx.stroke();
    console.log(t)
    if(t<250 && z == 1){
        t++;
    }
    if(t == 250){
        z = 0
    }
    if(z == 0){
        t--
    }
    if(t == 0){
        z = 1
    }
    requestID = window.requestAnimationFrame(drawcirc);

}

var clearcan = function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

var clearfull = function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    t = 0;
}
var stop = function(){
    window.cancelAnimationFrame (requestID)
}

stopv.addEventListener("click", stop);
clear.addEventListener("click", clearfull);
canvas.addEventListener("click", drawcirc);