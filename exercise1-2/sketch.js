let font1;
let font2;
let currentfont;


function preload(){
    font1 = loadFont("assets/NotoSerifJP-VariableFont_wght.ttf");
    font2 = loadFont("assets/SourceCodePro-VariableFont_wght.ttf");
}

function setup() {
    createCanvas(400, 400);
    currentfont = font1
    textFont(currentfont);
}

function draw() {
    background(0);
    fill(255);
    text("egg", 100, 100, 200, 200);
    textAlign(CENTER, CENTER);
    textSize(60);
    
}

function keyPressed(){
    if (keyCode === 70) {
        if (currentfont === font1){
            currentfont = font2;
        } else {
            currentfont = font1;
        }
        textFont(currentfont);
    }
}