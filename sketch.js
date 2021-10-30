var ground,fred, parede1, parede2;
var groundImg,fredImg;


function preload(){
  groundImg = loadImage("path.png");
  fredImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Fundo em movimento
ground=createSprite(200,200);
ground.addImage(groundImg);
ground.velocityY = 4;
ground.scale=1.2;

//criando menino que corre
fred = createSprite(180,340,30,30);
fred.scale=0.08;
fred.addAnimation("correr",fredImg);
  
// crie Boundary (Limite) esquerdo
parede1=createSprite(0,0,100,800);
parede1.visible = false;

//crie Boundary direito
parede2=createSprite(410,0,100,800);
parede2.visible = false;
}

function draw() {
  background(0);
  ground.velocityY = 4;
  
  // menino se movendo no eixe X com o mouse
  fred.x = World.mouseX;
  
  edges= createEdgeSprites();
  fred.collide(edges[3]);
  fred.collide(parede1);
  fred.collide(parede2);
  
  //código para reiniciar o fundo
  if(ground.y > 400 ){
    ground.y = height/2;
  }
  
  drawSprites();
}
