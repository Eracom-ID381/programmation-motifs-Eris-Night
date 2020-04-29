function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    frameRate(25);
    for (var x = 0; x < height; x = x + 10) {
        for (var y = 0; y < width; y = y + 10) {
            let r = random(10);
            stroke(color(random(0, 255), random(0, 255), random(0, 255)));
            line(-100, y, 1900 + r, x);
        }
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}