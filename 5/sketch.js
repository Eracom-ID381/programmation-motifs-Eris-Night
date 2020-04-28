function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    for (let x = 0; x < height; x = x + 50) {
        for (let y = 0; y < width; y = y + 110) {
            strokeWeight(random(1, 50));
            stroke(color(random(0, 255), random(0, 255), random(0, 255)))
            point(y, x);
        }
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}