function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    stroke(0;)
    for (var x = 0; x < height; x = x + 10) {
        for (var y = 0; y < width; y = y + 10) {
            square(windowHeight / 2, windowWidth / 2, x);
        }
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}