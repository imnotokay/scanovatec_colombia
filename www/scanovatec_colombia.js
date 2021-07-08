var exec = require('cordova/exec');

// exports.coolMethod = function (arg0, success, error) {
//     exec(success, error, 'scanovatec_colombia', 'coolMethod', [arg0]);
// };


module.exports.start = function (arg0, success, error) {
    exec(success, error, 'scanovatec_colombia', 'start', [arg0]);
};