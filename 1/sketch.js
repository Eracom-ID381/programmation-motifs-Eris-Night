function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    fill(0);
    stroke(0);
    for (var x = 0; x < width; x = x + 10) {
        for (var y = 0; y < height; y = y + 10) {
            line(width / 2, height / 2, x, y);
        }
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}