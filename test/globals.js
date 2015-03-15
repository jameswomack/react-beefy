require('babel/register');

/*
 * Dirty Chai
 *
 */
global.chai = require('chai');
global.expect = chai.expect;
global.chai.use(require('sinon-chai'));

require('./reactBeefyUtilities');
