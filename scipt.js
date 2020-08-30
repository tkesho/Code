function setup() {
	createCanvas(600, 1000);
	background(220, 100, 50);
}

function draw() {
	noStroke();
	fill(200, 180, 250, 70);
	ellipse(mouseX, mouseY, 50);
}

function mouseClicked() {
	background(220, 100, 50);
}