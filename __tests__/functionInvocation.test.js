// Import the function
const {DoodleJs} = require( '../src/doodle.core' );

// Run the test
test('Run Test funciton with even num', function () {
	expect(DoodleJs.testFunc(2)).toBeTruthy();
});

test('Run Test funciton with odd num', function () {
	expect(DoodleJs.testFunc(5)).toBeFalsy();
});