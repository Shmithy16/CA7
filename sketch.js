let x1 = 0;  //This along with all the lines done to 12 are just declaring variables that will be used later
let y1 = 0;
let x2 = 400;
let y2 = 400;
let u1 = 100;
let v1 = 0;
let u2 = 400;
let v2 = 300;
let a1 = 0;
let b1 = 100;
let a2 = 300;
let b2 = 400;

function preload(){  //this function is used to load in sounds or images that i have uploaded to p5
  aMajor = loadSound("A-Major.mp3")  //this along with the next 5 lines are loading in sounds that i have uploaded
  cMajor = loadSound("C-Major.mp3")
  gMajor = loadSound("G-Major.mp3")
  bongos = loadSound("Bongos.mp3")
  drums  = loadSound ("Ba-dum-tss.mp3")
  falcon = loadSound("falcon-punch-vocals.mp3")  //this sound in particular was used as a tester to make sure that the code was working before i upload the sounds i was going to use
}

function setup() {  //this is simply a a function that creates the canvas once and declares the strokeWeight once and only once
  createCanvas(400, 400);
  strokeWeight(10)
}

function draw(){  //this funcion is a loop that will repeat the code insie of it constantly 
  background(180,220,10);  //this simple gives the background its blue colour
  let px = mouseX  //this assigns the variable px to the mouses position x
  let py = mouseY  //this is the same with py and mouseY
  Collide(px,py,x1,y1,x2,y2,u1,u2,v1,v2,a1,b1,a2,b2);  //this simply calls the collide function
  
  rect(50,300,50,50)  //This creates the square in the corner
  rect(300,50,50,50)  //this does the same except in the opposite corner
  point(px,py)  //this creates a dot on your mouse
  
  line(x1,y1,x2,y2)  //this creates the lines
  line(u1,v1,u2,v2)  //this does the same along with the next
  line(a1,b1,a2,b2)  
}
  
function mousePressed(){  //this function will run this code only when the mo=use is pressed
  if(mouseX >= 50 && mouseX <= 100 && mouseY >= 300 && mouseY <= 350){  //if the mouse is in the square then play the sound and change it to the colour 
  bongos.play()  //this plays the bongo sound i had loaded
  fill("red")  //this changes the squares colours to red
  }
  else if(mouseX >= 300 && mouseX <= 350 && mouseY >= 50 && mouseY <= 100){  //if the mouse is in the other square then play the sound and change the colour
  drums.play()  //this plays the drum sound i had loaded in
  fill("lime")  //this changes the colour to lime
  }else{  //if you click and you are not in either box the change the colour
  fill("white")  //change the colour to white
  }
  
}

function Collide(px,py,x1,y1,x2,y2,u1,u2,v1,v2,a1,b1,a2,b2){  //this function is for the collision detection for the three lines

  
  let d1 = dist(px,py,x1,y1);  //this fines the distance between the top point of the line and the mouses position
  let d2 = dist(px,py,x2,y2);  //this does the same except it is for the bottom point of the line
  let lineLength1 = dist(x1,y1,x2,y2);  //this finds the length of the line
  
  let d3 = dist(px,py,u1,v1);  //this code is copied and is basically the same as the code above except the values are changed for the top and bottom of the lines
  let d4 = dist(px,py,u2,v2);
  let lineLength2 = dist(u1,v1,u2,v2);
  
  let d5 = dist(px,py,a1,b1);  //same as said above
  let d6 = dist(px,py,a2,b2);
  let lineLength3 = dist(a1,b1,a2,b2);
  
  let buffer = 0.5  //this is simple to make sure that you do not have to be exactly on the line and as long as you are mostly touching the line it will work
  
  if(d1 + d2 >= lineLength1 - buffer && d1 + d2 <= lineLength1 + buffer){  //if the distance from the top and bottom of the line is less than the length og the line minus the buffer and if the distance from the top and bottom of the line is greater than the line plus the buffer then run the code
    aMajor.play()  //this plays the aMajor sound
    background(60,255,60);  //this changes the background colour to a green
 }
  else if(d3 + d4 >= lineLength2 - buffer && d3 + d4 <= lineLength2 + buffer){  //this is the same as the prior code but its simply changed for the other line
    cMajor.play()  //plays the cMajor sound 
    background(200,50,100);  //this changes the colour to a redish colour
 }
  else if(d5 + d6 >= lineLength3 - buffer && d5 + d6 <= lineLength3 + buffer){  //same as above
    gMajor.play()  //this plays the gMajor sound
    background(255,120,0);  //this changes the background to orange
  }
  else{  //if you dont collide with anything
   background(0,160,255);  //change the background to blue
 }
}