'use strict';

var Bunyan       = require('bunyan');
var lazyStreamEnhancer = require('./lazyStreamEnhancer');

var Conf         = require('./conf.js');



// TODO - put this into a transform architecture
// for nconf
function deserializedStreams(streamConfigs){
  return streamConfigs.map(lazyStreamEnhancer);
}

console.log(Conf.get('name'));

module.exports = Bunyan.createLogger({
  name:    Conf.get('name'),
  streams: deserializedStreams(Conf.get('streams'))
});
