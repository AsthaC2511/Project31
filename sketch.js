const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1, ground2,ground3, ground4;
var divisionsHeight=300;
var divisions=[];
var plinko=[];
var particles=[];

function setup() {
  createCanvas(480,800);

  engine=Engine.create();
  world=engine.world;

  ground1= new Ground(240,798,480,10);
  ground2= new Ground(8,400,15,800);
  ground3=new Ground(479,400,15,800);
  ground4=new Ground(240,788,460,10);
  
  for( var d=0; d<=width; d=d+80){
    divisions.push(new Division(d,height-divisionsHeight/2,10,270));
  }

  for( var p=0; p<=width; p=p+50){
    plinko.push(new Plinko(p,100,10));
   
    }

    for( var p=0; p<=width; p=p+60){
      plinko.push(new Plinko(p,200,10));
     
      }

    for( var p=0; p<=width; p=p+50){
        plinko.push(new Plinko(p,300,10));
       
        }

     for( var p=0; p<=width; p=p+60){
          plinko.push(new Plinko(p,400,10));
         
          }

     
 

  
}

function draw() {
  background(0);  
  Engine.update(engine);
  
  for( var d=0; d<divisions.length;d++){
    divisions[d].display();
  }

  for( var p=0; p<plinko.length;p++){
    plinko[p].display();
  }
   if(frameCount%60===0)
   {
     particles.push(new Particle(random(width/2-10,width/2+10),10,10));
   }
      
   for(var j=0; j< particles.length; j++){
      particles[j].display();
    }
  

  fill("brown");
  ground1.display();
  ground2.display();
  ground3.display();
  
  fill("white");
  ground4.display();

  

  
  drawSprites(); 
}