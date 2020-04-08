function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    frameRate(25);
    stroke(0);
    strokeWeight(random(0, 30));
    for (let x = 0; x < width; x = x + 50) {
        for (var i = 0; i < height; i = i + 50) {
            circle(x, i, random(0, 50));
        }
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}