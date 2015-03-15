var fs = require('fs');
var React    = require('react');
var DOMReady = require('domready');
require('babel/register');

var Hello = require('./hello.jsx');

/*
 * Configuration
 *
 */
var packageJSONText = fs.readFileSync(__dirname + '/../package.json');

DOMReady(function(){
  var packageJSON = JSON.parse(packageJSONText);
  React.render(<Hello {...packageJSON} />, document.getElementById('is_anybody_out_there'));
});
