/*funcunit@3.1.0-pre.3#browser/adapters/jasmine*/
define(function (require, exports, module) {
    module.exports = function (jasmine) {
        var paused = false;
        return {
            pauseTest: function () {
                paused = true;
                waitsFor(function () {
                    return paused === false;
                }, 60000);
            },
            resumeTest: function () {
                paused = false;
            },
            assertOK: function (assertion, message) {
                expect(assertion).toBeTruthy();
            },
            equiv: function (expected, actual) {
                return jasmine.getEnv().equals_(expected, actual);
            }
        };
    };
});