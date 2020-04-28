function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    noFill();
    ellipseMode(CORNER);
    frameRate(0);
    for (var y = 0; y < width; y = y + 30) {
        circle(width / 2, height / 2, y);
    }
    for (var y = 0; y < width; y = y + 30) {
        circle(width / 2 - y, height / 2, y);
    }
    for (var y = 0; y < width; y = y + 30) {
        circle(width / 2, height / 2 - y, y);
    }
    for (var y = 0; y < width; y = y + 30) {
        circle(width / 2 - y, height / 2 - y, y);
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}