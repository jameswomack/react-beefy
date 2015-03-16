var PrettyStream;

function lazyStreamEnhancer(object){
  Object.defineProperty(object, 'stream', {
    // Enumerable is essential for interoperation
    // with most extend & merge utility functions
    enumerable: true,
    get: function(){
      PrettyStream || (PrettyStream = require('bunyan-prettystream'));
      var prettyStdOut = new PrettyStream({mode: 'short'});
      prettyStdOut.pipe(process.stdout);
      return prettyStdOut;
    }
  });
  return object;
}

module.exports = lazyStreamEnhancer;
