/*
 * Core Modules
 *
 */
var path = require('path');
var assert = require('assert');

/*
 * NPM Modules
 *
*/
// TODO: Fix this spacing
var React    = require('react');

/*
 * Local Modules
 *
 */
// TODO Rename this file
var propsAsserter = require('./propsValidator');


class Index extends React.Component {
  constructor(packageJSON) {
    super(packageJSON);
    propsAsserter(packageJSON, {name: 'string'});
    this.state = {name: packageJSON.name};
  }
  helloMyNameIs() {
    this.setState({name: this.state.name + Date.now()});
  }
  render() {
    return (
      <div onClick={this.helloMyNameIs.bind(this)}>
        {this.state.name}
      </div>
    );
  }
}

module.exports = Index;
