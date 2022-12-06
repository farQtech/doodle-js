// Import the function
const Doodle = require( '../src/doodle.core' );

// Run the test
test('Library Initialization', function () {
	expect(typeof Doodle).toBe('object');
});