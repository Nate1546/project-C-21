var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }

  if(isTouching(movingRect, gameObject2)){
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }

  if(isTouching(movingRect, gameObject3)){
    movingRect.shapeColor = "red";
    gameObject3.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject3.shapeColor = "green";
  }

  if(isTouching(movingRect, gameObject4)){
    movingRect.shapeColor = "red";
    gameObject4.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject4.shapeColor = "green";
  }

  
  drawSprites();
}

function isTouching(objectA,objectB){
  if (objectA.x - objectB.x < objectB.width/2 + objectA.width/2
    && objectB.x - objectA.x < objectB.width/2 + objectA.width/2
    && objectA.y - objectB.y < objectB.height/2 + objectA.height/2
    && objectB.y - objectB.y < objectB.height/2 + objectA.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}