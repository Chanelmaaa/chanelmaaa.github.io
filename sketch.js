var Bv1 = 0; 
var Bv2 = 0;
var Bv3 = 0;
var Bh1 = 0;
var Bh2 = 0;
var Bh3 = 0;
var Bv0 = 0;
var Bh0 = 0;
var img1
var img2
var img3
var img4
var img5
var img6
var img7
var img8
var img9
var img10 
var img11
var img12
var img13
var img14
var img15
var img16
var imgs
var currentImgs=[]
var flag=0;
var timer;


  function preload() {
   img1 = loadImage("food1.png");
   img2 = loadImage("dog1.png");
   img3 = loadImage("food2.png");
   img4 = loadImage("dog2.png");
   img5 = loadImage("food3.png");
   img6 = loadImage("food4.png");
   img7 = loadImage("food5.png");
   img8 = loadImage("food6.png");
   img9 = loadImage("food7.png");
   img10 = loadImage("food8.png");
   img11 = loadImage("dog3.png");
   img12 = loadImage("dog4.png");
   img13 = loadImage("dog5.png");
   img14 = loadImage("dog6.png");
   img15 = loadImage("dog7.png");
   img16 = loadImage("dog8.png");
   imgA = loadImage("imgA.png");
   imgB = loadImage("imgB.png");
   imgC = loadImage("imgC.png");
   imgD = loadImage("imgD.png");
   imgE = loadImage("imgE.png");
   imgF = loadImage("imgF.png");
   imgG = loadImage("imgG.png");
   imgH = loadImage("imgH.png");
   imgI = loadImage("imgI.png");

  
    imgs= [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img10,img11,img12,img13,img14,img15,img16]
   
}



     

function setup() {
  createCanvas(450, 450);
 
  Bv0 = 0;
  Bv1 = 150;
  Bv2 = 300;
  Bv3 = width;
  Bh0 = 0;
  Bh1 = 150;
  Bh2 = 300;
  Bh3 = height;

  
 
}

function draw() {
  background (0,15,100)
  timer=second();
 if(flag===0){
    var img11=random(imgs)
    currentImgs[0]=img11
    image(img11, Bv0, Bh0, 150, 150);
    
    var img22=random(imgs)
    currentImgs[1]=img22
    image(img22, Bv1, Bh0, 150, 150);
    
    
    var img33=random(imgs)
    currentImgs[2]=img33
    image(img33, Bv2, Bh0, 150, 150);
    
    var img44=random(imgs)
    currentImgs[3]=img44
    image(img44, Bv0, Bh1, 150, 150);
    
    var img55=random(imgs)
    currentImgs[4]=img55
    image(img55, Bv0, Bh2, 150, 150);
    
    var img66=random(imgs)
    currentImgs[5]=img66
    image(img66, Bv1, Bh1, 150, 150);
    

    var img77=random(imgs)
    currentImgs[6]=img77
    image(img77, Bv1, Bh2, 150, 150);
    
    
    var img88= random(imgs)
    currentImgs[7]=img88
    image(img88, Bv2, Bh1, 150, 150);
    
    var img99 = random(imgs)
    currentImgs[8]=img99
    image(img99, Bv2, Bh2, 150, 150);
  }else{
    
    image(currentImgs[0], Bv0, Bh0, 150, 150);
    image(currentImgs[1], Bv1, Bh0, 150, 150);
    image(currentImgs[2], Bv2, Bh0, 150, 150);
    image(currentImgs[3], Bv0, Bh1, 150, 150);
    image(currentImgs[4], Bv0, Bh2, 150, 150);
    image(currentImgs[5], Bv1, Bh1, 150, 150);
    image(currentImgs[6], Bv1, Bh2, 150, 150);
    image(currentImgs[7], Bv2, Bh1, 150, 150);
    image(currentImgs[8], Bv2, Bh2, 150, 150);
    
    
    
    
  }
    
  
  ellipse(mouseX, mouseY, 10, 10);
  if (mouseX > Bv0 && mouseX < Bv1 && mouseY >Bh0 && mouseY < Bh1) { 
   currentArea = "area0";
  } else if (mouseX > Bv1 && mouseX < Bv2 && mouseY >Bh0 && mouseY < Bh1) {
    currentArea = "area1";
  } else if (mouseX > Bv2 && mouseX < Bv3 &&  mouseY >Bh0 && mouseY < Bh1) {
    currentArea = "area2";
  } else if (mouseX > Bv0 && mouseX < Bv1 &&  mouseY >Bh1 && mouseY < Bh2) {
    currentArea = "area3";
  } else if (mouseX > Bv1 && mouseX < Bv2 &&  mouseY >Bh1 && mouseY < Bh2) {
    currentArea = "area4";
  } else if (mouseX > Bv2 && mouseX < Bv3 &&  mouseY >Bh1 && mouseY < Bh2) {
    currentArea = "area5";
  }  else if (mouseX > Bv0 && mouseX < Bv1 &&  mouseY >Bh2 && mouseY < Bh3) {
    currentArea = "area6";
  }  else if (mouseX > Bv1 && mouseX < Bv2 &&  mouseY >Bh2 && mouseY < Bh3) {
    currentArea = "area7";
  }  else if (mouseX > Bv2 && mouseX < Bv3 &&  mouseY >Bh2 && mouseY < Bh3) {
    currentArea = "area8";
 
    }
  
if (mouseIsPressed){
 
  if (currentArea == "area0") {
    image(imgA, Bv0, Bh0, 150, 150);
  } else if (currentArea == "area1") {
    image(imgB, Bv1, Bh0, 150, 150);
  } else if (currentArea == "area2") {
    image(imgC, Bv2, Bh0, 150, 150);
  } else if (currentArea == "area3") {
    image(imgD, Bv0, Bh1, 150, 150);
  } else if (currentArea == "area4") {
   image(imgE, Bv1, Bh1, 150, 150);
  } else if (currentArea == "area5") {
  image(imgF, Bv2, Bh1, 150, 150);
  } else if (currentArea == "area6") {
  image(imgG, Bv0, Bh2, 150, 150);
  } else if (currentArea == "area7") {
  image(imgH, Bv1, Bh2, 150, 150);
  } else if (currentArea == "area8") {
  image(imgI, Bv2, Bh2, 150, 150);
  }
  }
  
}

  
  
  function keyPressed() {
   if(flag===0){
     
      flag=1;
   }else{
     
      flag=0;
   }
  }
  

 
 





