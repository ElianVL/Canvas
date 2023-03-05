let canvas = document.getElementById("smile");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 2;
ctx.arc(200, 200, 100, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(175, 180, 12, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(220, 180, 12, 0, Math.PI * 2);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(231,180);
ctx.lineTo(162, 180);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(200, 200, 80, Math.PI, Math.PI * 2, Math.PI * 2);
ctx.stroke();
ctx.closePath();

