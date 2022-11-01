let tCounter = 0;
function setup (){
  createCanvas (800,500);
  background (223, 211, 195);



noStroke();
  cloud ();

}

function draw(){

    background (223, 211, 195);
      fill(130, 148, 96);
      rect(200,100,500,300,35,35,35,35);
      fill(103, 71, 71);
    ellipse(400,245,225,135);
      fill(198, 235, 197,200)
      rect(150,50,500,300,35,35,35,35);
    monster ();
    cloud ();
     cloud2 ();

}
function monster(){
  push();
  translate(400,225);
  body();
  eye3();
  eye4();
  eye5();
  eye6();
  pop();
  push();
  translate(450,177);
  eye1();
  pop();
  push();
  translate(355,177);
  eye2();
  pop();

push();
translate(450,177);
  rotate(radians(mouseX,mouseY));
  translate(5,-5);
pupil1();

pop();

push();
translate(355,177);
rotate(radians(mouseX,mouseY));
translate(5,-5);
pupil2();
pop();

push();
translate(460,224);
rotate(radians(mouseX,mouseY));
translate(5,-5);
pupil3();
pop();

push();
translate(400,203);
rotate(radians(mouseX,mouseY));
translate(5,-5);
pupil4();
pop();

push();
translate(335,224);
rotate(radians(mouseX,mouseY));
translate(5,-5);
pupil5();
pop();

push();
translate(400,243);
rotate(radians(mouseX,mouseY));
translate(5,-5);
pupil6();
pop();

}
function cloud(){

translate(tCounter,100);

  tCounter ++;
  if (tCounter > width) {
    tCounter = -50;
  }

  fill(125, 110, 131);
  scale(.95)
    ellipse(0,0,100,100);
      ellipse(-50,-5,75,75);
      ellipse(50,0,75,75);
      ellipse(75,0,50,50);
        ellipse(-75,0,25,25);


}
function cloud2(){

translate(tCounter,300);

  tCounter ++;
  if (tCounter > width) {
    tCounter = -50;
  }

  fill(125, 110, 131);
  scale(.95)
    ellipse(0,0,100,100);
      ellipse(-50,-5,75,75);
      ellipse(50,0,75,75);
      ellipse(75,0,50,50);
        ellipse(-75,0,25,25);


}

function body(){

fill(204, 54, 54);
ellipse(0,0,225,135);
fill(249, 102, 102);
ellipse(0,-10,205,120);
}

function eye1(){
  rotate(148);
  fill(255, 233, 160);
ellipse(0,-2,51,29);

fill(255, 253, 227);
ellipse(0,0,46,24);
}
function eye2(){
  rotate(-148);
  fill(255, 233, 160);
ellipse(0,-2,51,29);
fill(255, 253, 227);
ellipse(0,0,46,24);
}
function eye3(){
  fill(255, 233, 160);
ellipse(60,0,45,29);
fill(255, 253, 227);
ellipse(60,-2,40,24);
}
function eye4(){
  fill(255, 233, 160);
ellipse(0,-20,45,29);
fill(255, 253, 227);
ellipse(0,-22,40,24);
}
function eye5(){
  fill(255, 233, 160);
ellipse(-65,0,45,29);
fill(255, 253, 227);
ellipse(-65,-2,40,24);
}
function eye6(){
  fill(255, 233, 160);
ellipse(0,20,45,35);
fill(255, 253, 227);
ellipse(0,18,40,30);
}

function pupil1(){

fill(208, 184, 168);
  ellipse(0,0,13,13);fill(125, 110, 131);
    ellipse(0,0,5,5);
}
function pupil2(){
  fill(208, 184, 168);
    ellipse(0,0,13,13);
    fill(125, 110, 131);
      ellipse(0,0,5,5);
}
function pupil3(){
  fill(208, 184, 168);
    ellipse(0,0,13,13);
  fill(125, 110, 131);
    ellipse(0,0,5,5);

}
function pupil4(){

    fill(208, 184, 168);
      ellipse(0,0,13,13);
      fill(125, 110, 131);
        ellipse(0,0,5,5);
}
function pupil5(){

    fill(208, 184, 168);
      ellipse(0,0,13,13);
      fill(125, 110, 131);
        ellipse(0,0,5,5);
}
function pupil6(){
    fill(208, 184, 168);
      ellipse(0,0,13,13);
      fill(125, 110, 131);
        ellipse(0,0,5,5);
}
