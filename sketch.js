var movrect, fixrect
var obg1, obg2




function setup() {
  createCanvas(800, 400);
  movrect = createSprite(400, 200, 50, 80);
  fixrect = createSprite(600, 200, 80, 50);
  movrect.shapeColor = 'pink';
  fixrect.shapeColor = 'pink';
  obg1 = createSprite(200, 100, 50, 50);
  obg2 = createSprite(400, 100, 50, 50);





}

function draw() {
  background('green');
  movrect.x = mouseX;
  movrect.y = mouseY;
  if(isTouching(movrect,obg2)||isTouching(obg1,movrect)){
    text('oops',200,300);
  }
  drawSprites();
}


