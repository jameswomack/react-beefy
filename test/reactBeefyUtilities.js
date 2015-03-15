/*
 * Core modules
 *
 */
var path = require('path');
var assert = require('assert');
/*
 * Local Modules
 *
 */
var ChangeCase = require('change-case');

/*
 * React
 */
global.React = require('react/addons');
global.TestUtils = global.React.addons.TestUtils;


/*
 * React Beefy Utilities
 *
 */
global.cwd  = process.cwd();
assert.ok(typeof cwd === 'string', 'cwd is not a string?');

global.join = path.join;

global.moquire = function moquire(requirePath){
  assert.ok(typeof requirePath === 'string', 'moquire passed a non-string requirePath');
  return require(join(cwd, 'js', requirePath));
};

Object.defineProperty(global, '__testName', {
  get: function(){
    return path.basename(__filename);
  }
});


function assertNamedFunction(functionKey, namedBlock){
  var wrapperName = ChangeCase.upperCaseFirst(functionKey);

  assert.ok(typeof namedBlock === 'function', wrapperName + ' requires a function');
  assert.ok(typeof namedBlock.name === 'string', wrapperName + ' requires a named function');
}

function testBlockForNamedFunction(functionKey, namedBlock){
  var wrapperName = assertNamedFunction.apply(null, arguments);
  var printableName = ChangeCase.sentenceCase(namedBlock.name);
  return global[functionKey](printableName, namedBlock);
}

function setupTestBlockForName(name){
  global[name] = function(namedBlock){
    assert.ok(!ChangeCase.isLowerCase(name), 'setupTestBlockForName needs a non-lowercased name');

    var lowerCasedName = ChangeCase.lowerCase(name);
    testBlockForNamedFunction(lowerCasedName, namedBlock);
  };
}

function setupTestBlocksForNames(...names){
  return names.forEach(setupTestBlockForName);
}

setupTestBlocksForNames('Describe', 'It');
