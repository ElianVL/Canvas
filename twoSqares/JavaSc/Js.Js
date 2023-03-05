let canvas = document.getElementById("twoSqares");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.fillStyle = "#FF0000";
ctx.fillRect(150, 30, 120, 120);
ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
ctx.fillRect(200, 70, 120, 120);
ctx.lineWidth = 5;
ctx.closePath();