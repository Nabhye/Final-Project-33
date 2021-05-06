const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
// const World = Matter.World,
// const Events = Matter.Events,
// const Bodies = Matter.Bodies;
 
var engine,world;

var particle;
var divisions = [];
var particles = [];
var plinkos = [];
var line;

var divisionHeight=300;

var gameState = "PLAY";

var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  Engine.update(engine);
  textSize(20)
 text("Score : "+score,20,30);
 fill(255);

 textSize(20)
  // text("SCORE: "+score,60,40);
  text("500",100,520);
  text("500",25,520);
  text("500",180,520);
  text("500",260,520);
  text("200",340,520);
  text("200",420,520);
  text("200",500,520);
  text("200",580,520);
  text("100",660,520);
  text("100",740,520);

  ground.display();
  if(gameState=="END"){
    background("black");
    fill(255);
    textSize(100);
    text("Game Over",200,400);
  }
  
    for (var i = 0; i < divisions.length; i++) {
     
      divisions[i].display();
     
    }

   if (particle!=null){
     particle.display();
     if(particle.body.position.y>700){
       if(particle.body.position.x<300){
         score = score + 500;
         particle = null;
         if(count>= 5) gameState = "END";
      }


      else if(particle.body.position.x < 300 && particle.body.position.x > 301){
        score = score + 100;
        particle = null;
        if(count>= 5) gameState = "END";
      }
     }
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
    for (var k = 0; k < plinkos.length; k++) { 
     
      plinkos[k].display();
    }
}

function mousePressed(){
  if(gameState !== "END"){
    count++;
    particle = new Particle(mouseX, 50,10,10)
  }
}