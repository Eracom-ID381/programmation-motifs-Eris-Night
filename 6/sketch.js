function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight, WEBGL);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    noFill();
    frameRate(25);
    for (var x = 0; x < height; x = x + 300) {
        for (var y = 0; y < width; y = y + 300) {
            rotateZ(millis() / 1000);
            square(x, y, 55);
        }
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}