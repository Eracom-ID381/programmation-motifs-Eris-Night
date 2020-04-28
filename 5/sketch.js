function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    let x = 10;
    fill(0);
    noFill();
    ellipseMode(CORNER);
    frameRate(0);
    for (var y = 0; y < width; y = y + 10) {
        rotate(PI / 3.0);
        circle(width / 2, height / 2, y);
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}