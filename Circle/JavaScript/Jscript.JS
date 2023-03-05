//circle is first
let c = document.getElementById("circcleIsFirst");
let ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.strokeStyle = 'red';
ctx.stroke();
ctx.closePath();




