var fixSprite1, fixSprite2, fixSprite3, fixSprite4
var movingSprite
var canvas;

var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
movingSprite=createSprite(random(10,750),300,20,20);
movingSprite.shapeColor="white";
movingSprite.velocityX=3;
movingSprite.velocityY=3;
    //create 4 different surfaces


fixSprite1=createSprite(100,590,180,20);
fixSprite1.shapeColor="red";


    
fixSprite2=createSprite(300,590,180,20);
fixSprite2.shapeColor="green";

    
fixSprite3=createSprite(500,590,180,20);
fixSprite3.shapeColor="blue";

    
fixSprite4=createSprite(700,590,180,20);
fixSprite4.shapeColor="yellow";

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
if(movingSprite.x<0){
music.stop()
movingSprite.velocityX=3
}

else if(movingSprite.x>800){
    music.stop()
    movingSprite.velocityX=-3
}
else if(movingSprite.isTouching(fixSprite1)&&fixSprite1.bounceOff(movingSprite)){
music.stop()
movingSprite.shapeColor="red"


}

else if(movingSprite.isTouching(fixSprite2)&&fixSprite2.bounceOff(movingSprite)){
    music.stop()
    movingSprite.shapeColor="green"
}
    
else if(movingSprite.isTouching(fixSprite3)&&fixSprite3.bounceOff(movingSprite)){
    music.stop()
    movingSprite.shapeColor="blue"
}
    
else if(movingSprite.isTouching(fixSprite4)&&fixSprite4.bounceOff(movingSprite)){
    music.stop()
    movingSprite.shapeColor="yellow"
}
    //add condition to check if box touching surface and make it box
    if(movingSprite.y<0){
        music.stop()
        movingSprite.velocityY=3
    }
    drawSprites()
}
