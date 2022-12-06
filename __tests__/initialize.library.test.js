// Import the function
const {DoodleJs} = require( '../src/doodle.core' );

// Run the test
test('Library Initialization', function () {
	expect(typeof DoodleJs).toBe('object');
});