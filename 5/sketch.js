function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    frameRate();
    ellipseMode(CENTER);
    for (let x = 0; x < height; x = x + 50) {
        for (let y = 0; y < width; y = y + 110) {
            strokeWeight(random(1, 25));
            stroke(color(random(0, 255), random(0, 255), random(0, 255)))
            point(random(y, width), random(x, height));
        }
    }
    for (let x = 0; x < height; x = x + 100) {
        for (let y = 0; y < width; y = y + 100) {
            strokeWeight(random(1, 500));
            stroke(color(random(0, 255), random(0, 255), random(0, 255)))
            point(1000, 500);
        }
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}