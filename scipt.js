function setup() {
	createCanvas(300, 500);
	background(220, 100, 50);
}

function draw() {
	noStroke();
	fill(200, 180, 250, 70);
	ellipse(mouseX, mouseY, 20);
}

function mouseClicked() {
	background(220, 100, 50);
}