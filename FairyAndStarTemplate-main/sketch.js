var angle , star;
var angle_image , star_image;
var back;

function preload(){
   //preload the images here
   //angle_image = loadImage("airy1.png");
   //star_image = loadImage("star.png");
   //back = loadImage("starnight.png")
}

function setup() {
   angle = createSprite(150,450,10,50)
   //angle.addImage(angle_image);
   star = createSprite(630,100,10,50)
   //star = addImage(star_imahe)
	createCanvas(800, 750);
}


function draw() {
  background("black");
  //backgrpundd(back);

    if (keyDown("right_arrow")) {
      angle.velovityX = -2;
    }

    if (keyDown("left_arrow")) {
      angle.velovityX = 2;
    }

    if (keyDown("down_arrow")) {
      star.velovitYX = 2;
    }
  drawSprites();
}
