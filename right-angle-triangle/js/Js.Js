let canvas = document.getElementById("triAngle");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 150); 
ctx.lineTo(50, 150); 
ctx.closePath(); 
ctx.fillStyle = 'black'; 
ctx.fill();
ctx.stroke();