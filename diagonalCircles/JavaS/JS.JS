let canvas = document.getElementById("diagonalCircles");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(30, 30, 15, 0, Math.PI * 2);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(70, 70, 15, 0, Math.PI * 2);
ctx.lineWidth = 2;
ctx.fillStyle = 'rgb(240, 240, 240)';
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(110, 110, 15, 0, Math.PI * 2);
ctx.lineWidth = 2;
ctx.fillStyle = 'rgb(200, 200, 200)';
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(150, 150, 15, 0, Math.PI * 2);
ctx.lineWidth = 2;
ctx.fillStyle = 'rgb(120, 120, 120)';
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(190, 190, 15, 0, Math.PI * 2);
ctx.lineWidth = 2;
ctx.fillStyle = 'rgb(80, 80, 80)';
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.arc(230, 230, 15, 0, Math.PI * 2);
ctx.lineWidth = 2;
ctx.fillStyle = 'rgb(40, 40, 40)';
ctx.fill();
ctx.stroke();
ctx.closePath();