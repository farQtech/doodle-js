// Import the function
const Doodle = require( '../src/doodle' );

// Run the test
test('Library Initialization', function () {
	console.log(Doodle.getInstance)
	expect(Doodle.getInstance()).toEqual({});
});