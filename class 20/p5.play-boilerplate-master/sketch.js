var mr//moving rectangle 
var fr//fixed rectangle

function setup() {
  createCanvas(800,400);
  mr = createSprite(400, 200, 50, 50);
  mr.shapeColor = "red";
  fr = createSprite(400, 300, 50, 50);
  fr.shapeColor = "blue";
  mr.debug = true;
  fr.debug = true;
}

function draw() {
  background(255,255,255);  
  mr.x = mouseX
  mr.y = mouseY
  if (mr.x - fr.x < fr.width/2 + mr.width/2
    && fr.x - mr.x < fr.width/2 + mr.width/2
    && mr.y - fr.y < fr.height/2 + mr.height/2
    && fr.y - mr.y < fr.height/2 + mr.height/2) {
  mr.shapeColor = "green";
  fr.shapeColor = "green";
}
else {
  mr.shapeColor = "red";
  fr.shapeColor = "blue";
}
  drawSprites();
}