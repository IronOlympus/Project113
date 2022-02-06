function preload() {}

function setup() {
  canvas = createCanvas(400, 400);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video , 110, 15, 225 , 250);
  //horizontal rectangle1
  fill(128, 0, 0);
  stroke(128, 0, 0);
  rect(95, 30, 250, 35);
  //vertical rectangle1
  fill(128, 0, 0);
  stroke(128, 0, 0);
  rect(80, 30, 35, 250);
  //horizontal rectangle2
  fill(128, 0, 0);
  stroke(128, 0, 0);
  rect(95, 265, 250, 35);
  //vertical rectangle2
  fill(128, 0, 0);
  stroke(128, 0, 0);
  rect(330, 30, 35, 250);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  circle(350, 50, 70);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  circle(94, 50, 70);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  circle(94, 275, 70);

  fill(0, 128, 0);
  stroke(0, 128, 0);
  circle(350, 275, 70);
}

function take_snapshot(){
    save("avneesh.png");
}