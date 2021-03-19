var bgimg,bg;
var b1,b2,b3;
var b4,b5,b6;;
var w1,w2,w3,w4;
var w5,w6,w7,w8;
var w9,w10,w11,w12;
var w13,w14,w15,w16,w17,w18,w19,w20,w21;
var w22,w23,w24,w25,w26,w27,w28,w29,w30;
var w31,w34,w35,w33,w36,w37,w38,w39,w40;
var w41,w42,w43,w44,w45,w46,w47,w48,w49,w50;
var w51,w52,w53,w54,w55,w56,w57,w58,w59,w60;
var w61,w62,w63,w64,w65,w66,w67,w68,w69,w70;
var superhero;
var mate;

function preload(){
bgimg = loadImage("bgimg.png")
superhero = loadImage("super hero-1.png")
}

function setup(){
 canvas = createCanvas (900,700)
 edges=createEdgeSprites()
//bg = createSprite(600,350,10,10)
//bg.addImage(bgimg)
//bg.scale=3;
b1 = createSprite(600,10,1200,5)
b2 = createSprite(600,690,1200,5)
b3 = createSprite(10,150,5,300)
b4 = createSprite(1190,150,5,300)
b5 = createSprite(10,550,5,300)
b6 = createSprite(1190,550,5,300)
w1 = createSprite(60,400,100,5)
w2 = createSprite(110,425,5,50)
w3 = createSprite(35,265,50,5)
w4 = createSprite(55,485,5,100)
w5 = createSprite(155,485,200,5)
w6 = createSprite(110,540,5,100)
w7 = createSprite(60,590,100,5)
w8 = createSprite(160,335,5,300)
w9 = createSprite(160,185,100,5)
w10 = createSprite(110,160,5,50)
w11 = createSprite(185,300,50,5)
w12 = createSprite(210,275,5,50)
w13 = createSprite(235,250,50,5)
w14 = createSprite(260,190,5,120)
w15 = createSprite(210,130,100,5)
w16 = createSprite(75,310,50,5)
w17 = createSprite(100,275,5,75)
w18 = createSprite(75,235,50,5)
w19 = createSprite(50,160,5,150)
w20 = createSprite(175,80,250,5)
w21 = createSprite(300,210,5,250)
mate = createSprite(40,350,15,15)
mate.addImage(superhero)
mate.scale=0.15
w22 = createSprite(275,335,50,5)
w23 = createSprite(255,365,5,50)
w24 = createSprite(250,390,75,5)
w25 = createSprite(210,420,5,75)
w26 = createSprite(260,460,100,5)
w27 = createSprite(210,420,5,75)
w28 = createSprite(310,510,5,100)
w29 = createSprite(235,565,150,5)
w30 = createSprite(160,600,5,75)
w31 = createSprite(155,640,200,5)
w32 = createSprite(255,650,5,20)
w33 = createSprite(310,660,110,5)
w34 = createSprite(350,600,110,5)
w35 = createSprite(330,630,5,50)
w36 = createSprite(400,520,5,175)
w37 = createSprite(420,430,50,5)
w38 = createSprite(450,400,5,60)
w39 = createSprite(395,370,150,5)
w40 = createSprite(470,315,5,100)
w41 = createSprite(400,275,5,200)
w42 = createSprite(480,180,150,5)
w45 = createSprite(555,135,5,75)
w46 = createSprite(725,95,350,5)
w47 = createSprite(755,35,5,50)
w48 = createSprite(850,55,50,5)
w49 = createSprite(350,120,100,5)
w50 = createSprite(400,145,5,50)
w51 = createSprite(390,60,5,75)
w52 = createSprite(445,70,80,5)
w53 = createSprite(400,145,5,50)
w55 = createSprite(870,175,5,150)
w56 = createSprite(840,145,5,50)
w57 = createSprite(845,300,100,5)
w58 = createSprite(790,370,5,500)
w59 = createSprite(815,200,5,100)
w60 = createSprite(735,615,95,5)
w61 = createSprite(690,560,5,95)
w62 = createSprite(715,515,50,5)
w63 = createSprite(740,390,5,280)
w64 = createSprite(700,355,5,200)
w65 = createSprite(690,560,5,95)
w66 = createSprite(660,450,75,5)
w67 = createSprite(690,560,5,95)
w68 = createSprite(630,550,5,185)
w69 = createSprite(720,635,180,5)
w70 = createSprite(810,460,5,320)







}

function draw(){
background(bgimg)
text(mouseX+ "," +mouseY,mouseX,mouseY)
if(keyIsDown(UP_ARROW)){
    mate.y=mate.y-2
}
if(keyIsDown(DOWN_ARROW)){
    mate.y=mate.y+2
}
if(keyIsDown(LEFT_ARROW)){
    mate.x=mate.x-2
}
if(keyIsDown(RIGHT_ARROW)){
    mate.x=mate.x+2
}
drawSprites();
}