let canvas = document.getElementById("square");
let ctx = canvas.getContext("2d");

ctx.beginPath();

ctx.fillStyle = "black";
ctx.fillRect(5, 5, 390, 390);

ctx.fillStyle = "white";
ctx.fillRect(50, 50, 300, 300);

ctx.fillStyle = "grey";
ctx.fillRect(75, 75, 250, 250);

ctx.fillStyle = "white";
ctx.fillRect(100, 100, 200, 200);
ctx.stroke();
ctx.closePath();
