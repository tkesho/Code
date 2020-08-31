let circle = {
	x: 0,
	y: 0,
	diameter: 0
};

let color = {
	r: 0,
	g: 0,
	b: 0
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255, 255, 100);
}

function draw() {
	circle.x = random(0, width);
	circle.y = random(0, height);
	circle.diameter = random(20, 30);
	color.r = random(100, 200);
	color.b = random(100, 200);
	noStroke();
	fill(color.r, color.g, color.b, 150);
	ellipse(circle.x, circle.y, circle.diameter);
}
/* let x = 26;

let counter = 2;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(220, 110, 200);
	if (mouseX > width / 2) {
		fill(100, 50, 250);
	} else {
		noFill();
	}
	strokeWeight(4);
	stroke(255);
	ellipse(x, 250, 50);

	if (x >= width - 25 || x <= 25) {
		counter = -counter;
	}

	x += counter;
} */