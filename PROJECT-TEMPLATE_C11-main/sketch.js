var navio,navioAnimacao,mar,marImagem
function preload(){
navioAnimacao = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
marImagem = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  mar = createSprite(width/2,height/2)
  mar.addImage(marImagem)
  mar.scale = 0.5
  mar.velocityX = -5
  navio = createSprite(width/2,300)
 navio.addAnimation("navioAnimacao",navioAnimacao)
 navio.scale = 0.2

}

function draw() {
  background("blue");
    drawSprites();
if(mar.x < 0 ){
  mar.x = mar.width/4
}
 
}
