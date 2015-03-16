var util = require('util');


// https://github.com/joyent/node/commit/c6c6f98f1c33e9569b885e89750278fc6a211080
var useNativeExtend = util.isFunction(util._extend);
module.exports = useNativeExtend ? util._extend : require('util-extend');
