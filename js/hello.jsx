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
var React    = require('react');

/*
 * Local Modules
 *
 */
// TODO - rename
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
