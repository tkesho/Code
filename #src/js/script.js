let bubble2;
let bubble1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	bubble2 = new Bubble();
	bubble1 = new Bubble();
}

function draw() {
	background(255, 255, 0);

	bubble1.draw();
	bubble1.move();
	bubble2.draw();
	bubble2.move();
}

class Bubble {
	constructor() {
		this.x = width / 2;
		this.y = height / 2;
	}

	move() {
		this.x += random(-7, 7);
		this.y += random(-7, 7);
	}

	draw() {
		noFill();
		strokeWeight(8);
		ellipse(this.x, this.y, 50);
	}
}