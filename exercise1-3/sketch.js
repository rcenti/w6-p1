let font1;
let FONT_SIZE = 50;
let numberOfLet = 0
const message = "vidah go to bed"
let index;

function preload() {
    font1 = loadFont("assets/NotoSerifJP-VariableFont_wght.ttf");
}

function setup(){
    createCanvas(400, 400);
    textFont(font1);
    textSize(FONT_SIZE);
}

function draw(){
    frameRate(50)
    background(0);
    writeText();
    if (index < message.length){
        index+1
    } else {

    }
}

function writeText() {
if (frameCount % 60 < 30) {
    fill(255);
    textAlign(CENTER, CENTER);
    text(message, width/2, height/2);
    textSize(FONT_SIZE);
}
    
}