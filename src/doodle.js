/**
 * Function implements SingleTon pattern to provide single instance for doodle js in whole application scope.
 */
var Doodle = (function () {
    // private member to hold doodle js instance 
    var _instance;

    // private factory method
    function createInstance() {
        var object = new Core("I am the instance");
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