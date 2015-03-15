/*
 * React Compiler
 * Originally seen here: https://github.com/Khan/react-components
 *
 */

/*
 * Core Modules
 *
 */
var fs = require('fs');

/*
 * NPM Modules
 *
 */
var ReactTools = require('react-tools');

require.extensions['.jsx'] = function(module, filename) {
  var content = fs.readFileSync(filename, 'utf8');

  // TODO - have a debug flag and use colors
  console.log('Using React Tools to compile ' + filename);

  var compiled = ReactTools.transform(content, {harmony: true});
  return module._compile(compiled, filename);
};
