
/*
 * Core Modules
 */
var assert = require('assert');

function propAssert(keyName, type){
 assert.ok(typeof this.props[keyName] === type, keyName+' should be '+type+' on props');
}

function PropsAsserter(props, validations){
  // Enforce `new`
  if (!(this instanceof PropsAsserter)){
    return new PropsAsserter(props, validations);
  }

  this.props = props;

  this.propAssert = propAssert.bind(this);

  Object.keys(validations).forEach(function(keyName){
    this.propAssert(keyName, validations[keyName]);
  }.bind(this));
}

module.exports = PropsAsserter;
