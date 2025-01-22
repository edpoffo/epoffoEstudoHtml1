// requestAnimationFrame Shim
(function() {
  var requestAnimationFrame = window.srequestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();
 

var canvas = document.getElementsByClassName('abilityProgress');

var curPerc = 0;

var counterClockwise = false;
var centerPos = Math.PI / 2;
var totalAngle = 4 * Math.PI / 3;
var minPos = centerPos + (((2 * Math.PI) - totalAngle)/2);
var maxPos = centerPos - (((2 * Math.PI) - totalAngle)/2);

var colorBG = '#000000';
var colorFill = '#FD6F00';

 


function animate(current) {
    console.log(canvas.length);
    
    for (let i = 0; i < canvas.length; i++) {
        c = canvas [i];
        var endPercent = c.getAttribute("value");

        if (curPerc <= endPercent){
            var context = c.getContext('2d');

            h = c.height;
            w = c.width;

            context.lineWidth = h/12;
            var radius = h/2 - context.lineWidth;

            var x = w / 2;
            var y = h / 2;
            var nameObj = c.getAttribute("name");
            var fontSize = c.getAttribute("fontsize");

            context.lineCap = "round";
            context.shadowOffsetX = 0;
            context.shadowOffsetY = 0;
            context.shadowBlur = 10;
            context.shadowColor = '#303030';

            context.clearRect(0, 0, c.width, c.height);
            context.strokeStyle = colorBG;
            context.beginPath();
            context.arc(x, y, radius, minPos, maxPos, false);
            context.stroke();
            context.strokeStyle = colorFill;
            context.beginPath();
            context.arc(x, y, radius, minPos, ((totalAngle) * current) + minPos, false);
            context.stroke();
            
            
            context.textAlign = "center";
            context.font = "1.5rem Lato";
            context.fillStyle = colorFill;
            context.measureText(curPerc+"%").w;
            context.fillText(curPerc + "%", x, 0.55 * c.height);
            context.font = "1rem Lato";
            context.fillStyle = "#959595";
            context.fillText(nameObj, x, .8 * c.height);
        }
    }
    
    curPerc++;
    if (curPerc <= 100) {
        requestAnimationFrame(function () {
            animate(curPerc / 100)
        });
    }
 }

 console.log("wow");
 

 animate();