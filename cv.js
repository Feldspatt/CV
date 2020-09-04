 /* document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems);
  });*/

var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");

var grd = ctx.createRadialGradient(100, 100, 5, 100, 100, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");


// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 600, 400); 
