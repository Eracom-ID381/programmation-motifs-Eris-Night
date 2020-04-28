function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    fill(0);
    for (var x = 0; x < width; x = x + 55) {
        for (var y = 0; y < height; y = y + 55) {
            strokeWeight(1);
            stroke(255, 0, 102);
            line(width / 2, height / 2, x, y);
        }
    }
    for (var x = 0; x < width; x = x + 55) {
        for (var y = 0; y < height; y = y + 55) {
            stroke(0);
            strokeWeight(3);
            line(0, 10000000, x, y);
        }
    }
    for (var x = 0; x < width; x = x + 55) {
        for (var y = 0; y < height; y = y + 55) {
            line(10000000, 0, x, y);
        }
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}