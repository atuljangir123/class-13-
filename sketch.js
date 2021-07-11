var garden,rabbit;
var gardenImg,rabbitImg;
var apple_Img , red_Img, leaf_Img , orange_Img;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple_Img=loadImage("apple.png");
  red_Img=loadImage("redImage.png");
  leaf_Img=loadImage("leaf.png");
  orange_Img=loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  rabbit.x=World.mouseX

  edges= createEdgeSprites();
  rabbit.collide(edges);

  createApples()
  createredleaf()
  createleaves()
  createorangeleaf()

  drawSprites();
}

function createApples(){
 // write your code here 
 if(frameCount % 80 === 0 ){
 apple=createSprite(random(50, 350),40, 10, 10);
 apple.velocityY=3;
apple.addImage(apple_Img);
apple.scale=0.05;
apple.lifetime=80;
}
}

function createredleaf(){
  if(frameCount % 80 === 0 ){
  var redleaf=createSprite(random(100,200),40,10,10); 
  redleaf.velocityY=2;
  redleaf.addImage(red_Img) ; 
  redleaf.scale=0.05;
  redleaf.lifetime=110;
}
 }   

 function createleaves(){
  if(frameCount % 80 === 0 ){
  var leaves=createSprite(random(50,350),80,10,10); 
  leaves.velocityY=2;
  leaves.addImage(leaf_Img) ; 
  leaves.scale=0.05; 
  leaves.lifetime=100;  
 }
}   

function createorangeleaf(){
  if(frameCount % 80 === 0 ){
  var orangeleaf=createSprite(random(50,350),80,10,10); 
 orangeleaf.velocityY=2;
 orangeleaf.addImage(orange_Img) ; 
 orangeleaf.scale=0.05; 
 orangeleaf.lifetime=100;  
 }
}   
