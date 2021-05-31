var bg, backgroundImg;

function preload() {
  backgroundImage = loadImage("images/bg.jpg");
  ironImage = loadImage("images/iron.png");
  stoneImage = loadImage("images/stone.png");
  }

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImage);
  bg.scale =2;
 
  ironMan = createSprite(57, 505, 20, 50);
  ironMan.addImage("running", ironImage);
  ironMan.scale = 0.3;
  ironMan.debug = true;
  ironMan.setCollider("rectangle",100,0,200,400)
  stoneGroup = new Group();

  ground=createSprite(200,580,450,10)
  ground.visible = false;
  
}

function draw() {

  if (keyDown("up")) {
    ironMan.velocityY = -10;
  }
  if (keyDown("left")) {
    ironMan.x = ironMan.x - 5;
  }
  if (keyDown("right")) {
    ironMan.x = ironMan.x + 5;
  }
  ironMan.velocityY = ironMan.velocityY + 0.5;

  ironMan.collide(ground)
    drawSprites();
   
generatestone();
for (var i = 0; i < stoneGroup.length; i++) {
  var temp = stoneGroup.get(i);

  if (temp.isTouching(ironMan)) {
    ironMan.collide(temp);
  }
}
  drawSprites();
 
}
function generatestone() {
if (frameCount % 80 === 0) {
  var stone = createSprite(1200, 10, 40, 10);
  stone.x = random(50, 850);
  stone.addImage(stoneImage);
  stone.velocityY = 5;
  stone.lifetime = 250;
  stoneGroup.add(stone);
}
}