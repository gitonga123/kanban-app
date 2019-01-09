// object - collection of key value pair
// Factory Function
function createCircle(radius) {
	return {
		radius: radius,

		draw: function () {
			console.log('draw');
		}
	};
}

const circle = createCircle(1);
circle.draw();

// constructor Function
function Circle(radius) {
	this.radius = radius;
	this.draw = function() {
		console.log('Draw');
	}
}

const circles = new Circle(1);
(circles.draw());

console.log(circles.constructor);
console.log(circle.constructor);

const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle) {
	console.log("Circle has a radius.");
}