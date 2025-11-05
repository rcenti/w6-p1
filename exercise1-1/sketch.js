let myFont;
const placeholder = "Lorem ipsum dolor sit amet"

function preload() {
    myFont = loadFont("assets/Roboto-VariableFont_wdth,wght.ttf");
}


function setup(){
    createCanvas(600, 600);
    
}

function draw() {
    textFont(myFont);
    background(0, 0, 150);
    fill(255)
    textAlign(RIGHT, BOTTOM);
    textSize(60);
    text(placeholder, 280, 290, 300, 300);
}



