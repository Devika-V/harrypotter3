var img, harry,harryImg;
var bg,timeImage, score=0;
var timeTurner,diary,diaryImg;
function preload(){
  img=loadImage("images/forest.jpg")
  timeImage=loadImage("images/timeturner.png")
  harryImg=loadImage("images/hary flying.png")
  diaryImg=loadImage("images/diary.png")
}


function setup() {
  createCanvas(1380,600);
  bg=createSprite(650,400)
  
  bg.addImage(img)
  bg.scale=0.7
  bg.velocityX=3

  harry=createSprite(90,500,60,60)
  harry.addImage(harryImg)
harry.scale=0.7
}

function draw() {
 
  background("black");
  textSize(25)
  text("score:"+score,100,30)
  
    
  if(bg.x>650){
    bg.x=550
  }
  //if (harry.isTouching(timeTurner)){
   // score=score+1
    //}

  harry.y=Math.round(random(450,525))

  if (keyCode===100){
    harry.x=harry.x+1
  }
  time();
dry();
  
  drawSprites();
  fill("white")
text(mouseX+","+mouseY,200,200)


}
function time(){
  if (frameCount%300===0){
     timeTurner=createSprite(1239,514,30,30)
    timeTurner.addImage(timeImage)
    timeTurner.scale=0.3
    timeTurner.velocityX=-3
    timeTurner.lifetime=700
  }
}
function dry(){
  if (frameCount%450===0){
    diary=createSprite(1200,323,30,30)
    diary.addImage(diaryImg)
    diary.scale=0.2
    diary.velocityX=-3
    diary.lifetime=700
  }
}

