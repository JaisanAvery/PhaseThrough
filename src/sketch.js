// Phase Through sketch
let frames1 = [];
let frames2 = [];
let frames3 = [];
let frames4 = [];
let frames5 = [];
let frames6 = [];
const FRAME_RATE = 60;
const DELAY = .3;
let delay1 = FRAME_RATE * DELAY * 1;
let delay2 = FRAME_RATE * DELAY * 2;
let delay3 = FRAME_RATE * DELAY * 3;
let delay4 = FRAME_RATE * DELAY * 4;
let delay5 = FRAME_RATE * DELAY * 5;
let delay6 = FRAME_RATE * DELAY * 6;

let canvas;



let capture;

function setup() {
    describe('Video capture from the device webcam.');
    canvas = createCanvas(displayWidth, displayHeight);
    canvas.position(0, 0);

    frameRate(FRAME_RATE);

    capture = createCapture(VIDEO);

    capture.size(displayWidth, displayHeight);

    capture.hide();
}

function draw() {
    background(51);

    fullscreen(true);

    frames1.push(capture.get());
    frames2.push(capture.get());
    frames3.push(capture.get());
    frames4.push(capture.get());
    frames5.push(capture.get());
    frames6.push(capture.get());

    if (frames6.length > delay6) { frames6.shift(); }
    if (frames6.length === delay6) {
        tint(127, 0, 255, 75);
        image(frames6[0], 0, 0, displayWidth, displayHeight);
    }

    if (frames5.length > delay5) { frames5.shift(); }
    if (frames5.length === delay5) {
        tint(0, 0, 255, 75);
        image(frames5[0], 0, 0, displayWidth, displayHeight);
    }

    if (frames4.length > delay4) { frames4.shift(); }
    if (frames4.length === delay4) {
        tint(0, 255, 0, 75);
        image(frames4[0], 0, 0, displayWidth, displayHeight);
    }

    if (frames3.length > delay3) { frames3.shift(); }
    if (frames3.length === delay3) {
        tint(255, 255, 0, 75);
        image(frames3[0], 0, 0, displayWidth, displayHeight);
    }

    if (frames2.length > delay2) { frames2.shift(); }
    if (frames2.length === delay2) {
        tint(255, 128, 0, 75);
        image(frames2[0], 0, 0, displayWidth, displayHeight);
    }

    if (frames1.length > delay1) { frames1.shift(); }
    if (frames1.length === delay1) {
        tint(255, 0, 0, 75);
        image(frames1[0], 0, -0, displayWidth, displayHeight);
    }

    tint(255, 75);
    image(capture, 0, 0, displayWidth, displayHeight);

    // TESTING COORDINATES
    // text(str(displayHeight), 50, 50);
    // text(str(displayWidth), 50, 65);
    // text(str(mouseX), 50, 80);
    // text(str(mouseY), 50, 95);
}

