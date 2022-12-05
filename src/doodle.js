const Core = require('./doodle.core')

/**
 * Function implements SingleTon pattern to provide single instance for doodle js in whole application scope.
 */
var Doodle = (function () {
    // private member to hold doodle js instance 
    var _instance;

    // private factory method
    function createInstance() {
        var object = new Core();
        return object;
    }

    return {
        getInstance: function () {
            if (!_instance) {
                _instance = createInstance();
            }
            return _instance;
        }
    };
})();
window.doodly = Doodle;
module.exports = Doodle;