// Import the function
const DoodleJs = require( '../src/doodle.core' );

// Run the test
test('Check setEventHandlers()', function () {
	expect(DoodleJs).toHaveProperty('setEventHandlers');
});

test('Check setPosition()', function () {
	expect(DoodleJs).toHaveProperty('setPosition');
});

test('Check resize()', function () {
	expect(DoodleJs).toHaveProperty('resize');
});

test('Check createCanvas()', function () {
	expect(DoodleJs).toHaveProperty('createCanvas');
});

test('Check draw()', function () {
	expect(DoodleJs).toHaveProperty('draw');
});

test('Check reDraw()', function () {
	expect(DoodleJs).toHaveProperty('reDraw');
});

test('Check renderButtons()', function () {
	expect(DoodleJs).toHaveProperty('renderButtons');
});






