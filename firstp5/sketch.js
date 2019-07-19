let x1=300;
let x2 = 250;
let x3 = 350;
function setup(){
   createCanvas(600,600);
   background('black');
}

 function mouseClicked({clientX,clientY}){
    
 }

function keyPressed({clientX,clientY}){
   if(keyPressed === UP_ARROW){
       
   }
   if(keyPressed === LEFT_ARROW){
    x1-=2;
    x2-=2;
    x3-=2;
    
}
}

function makeUser(){
   
}

function makeDefense(){
   fill('red');
   rect(90, 600, 150, 100);
   rect(270, 600, 150, 100);
   rect(440, 600, 150, 100);
}

function makeEnemy(){
fill('limegreen');
   ellipse(90, 90, 80, 80);
   ellipse(180, 90, 80, 80);
   ellipse(270, 90, 80, 80);
   ellipse(360, 90, 80, 80);
   ellipse(450, 90, 80, 80);
   ellipse(90, 180, 80, 80);
   ellipse(180, 180, 80, 80);
   ellipse(270, 180, 80, 80);
   ellipse(360, 180, 80, 80);
   ellipse(450, 180, 80, 80);
}

function draw(){
triangle(x1,500,x2,550,x3,550);
   makeDefense();
   makeEnemy();
   makeUser();
}