var fish;
var shark;
var npcfish;
var coin;
var backgroundImg;
var fishImg;
var coinImg;
var npcfishImg;
var gameState = "play";

function preload(){
backgroundImg = loadImage("images/background.jpg");
fishImg = loadImage("images/fish.jpg");
npcfishImg = loadImage("images/npcfish.png");
coinImg = loadImage("images/coin.png");
sharkImg = loadImage("images/shark.jpg");
}

function setup(){
    createCanvas(1000,600);
    fish = createSprite(300,300,50,50);
    fish.addImage("fish", fishImg);
    fish.scale = 0.6
    shark = createSprite(500,300,50,50);
    shark.addImage("shark", sharkImg);
    shark.scale = 0.8;
    shark.velocityX = 1;
    background.addImage(backgroundImg);
    npcfishGroup = new Group();
    invisibleBlockGroup = new Group();
}

function draw(){
    background(400);
    if(gameState === "play"){
        if(keyDown("up_arrow")){
            fish.y = fish.y + 3;
        }
        if(keyDown("down_arrow")){
            fish.y = fish.y - 3;
        }
        fish.velocityX = fish.velocityX + 0.8;
        if(npcfishGroup.isTouching(fish)){
            fish.velocityX = 0
        }
        if(invisibleBlockGroup.isTouching(fish) || fish.x > 1000){
            fish.destroy();
        }
        spawnNpcfish();
        drawSprites();
    }
    if(gameState = "end"){
        text("Game Over", 470,250)
    }
}

function spawnNpcfish(){
    if(frameCount % 240 === 0){
        var npcfish = createSprite(600,-50);
        npcfish.addImage(npcfish.png);
        var invisibleBlock = createSprite(620,-50);
        npcfish.y = Math.round(random(320, 700));
        npcfish.velocityX = -1;
        invisibleBlock.y = npcfish.y;
        invisibleBlock.velocityX = -1; 
        npcfish.lifetime = 800;
        invisibleBlock.debug = true;
        invisibleBlock.add(invisibleBlock);
        npcfishGroup.add(npcfish);
    }
}


