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
	let defaultLocation = {x: 0, y: 9};

	this.getDefaultLocation = function () {
		return defaultLocation;
	}

	this.draw = function() {

		console.log('Draw');
	}

	Object.defineProperty(this, 'defaultLocation',{ 
		get: function() {
			return defaultLocation
		},
		set: function(value) {
			// perform validation
			if (!value.x || !value.y) {
				throw new Error('Invalid Location.');
			}
			defaultLocation = value;
		}

	});
}

const circles = new Circle(1);
(circles.draw());

console.log(circles.constructor);
console.log(circle.constructor);

const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle) {
	console.log ("Circle has a radius.");
}

console.log(circles.defaultLocation);

circle.defaultLocation = 1;