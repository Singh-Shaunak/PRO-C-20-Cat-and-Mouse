var cat, catImage1,catImage2;
var mouse, mouseImage1,mouseImage2;
var bg,bgImg;

function preload() {
    //load the images here
  catImage1=loadImage("cat1.png");
  catImage2=loadImage("cat2.png");
  mouseImage1=loadImage("mouse2.png");
  mouseImage2=loadImage("mouse1.png");
  bgImg=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,600,20,20);
    cat.addImage(catImage1);
    cat.scale=0.2;
    //cat.debug=true;
    cat.setCollider("rectangle",500,10,50,50,30);

    mouse=createSprite(200,500,20,20);
    mouse.addImage(mouseImage1);
    mouse.scale=0.2;
    
    bg=createSprite(1000,800,1000,800);
    bg.addImage(bgImg);
    bg.scale=0.2;
}

function draw() {
    background(bgImg);
    edges=createEdgeSprites();
    cat.collide(edges);
    mouse.collide(edges);
    //Write condition here to evalute if tom and jerry collide
    if(cat.collide(mouse)){
        mouse.addAnimation("running",mouseImage1);
        textSize(40);
        text("Tom caught Jerry",150,400);
        fill(0,102,153,51);
        cat.velocityX=0;
        mouse.velocityX=0;
    }
    drawSprites();
    keyPressed();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyDown("LEFT_ARROW")){
        cat.velocityX=-4;
        
    
    }
    if(keyDown("RIGHT_ARROW")){
        cat.velocityX=4;
    }
}