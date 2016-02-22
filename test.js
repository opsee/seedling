var chai = require('chai');
var expect = chai.expect;
var vars = require('./src/vars');

expect(vars, 'obj').to.be.ok;
expect(vars, 'obj').to.be.an('object');
expect(vars, 'obj').to.have.keys('flat', 'plain');

var flat = vars.flat;

expect(flat, 'flat').to.be.ok;
expect(flat, 'flat').to.be.an('object');
expect(flat, 'flat').to.have.any.keys('colorPrimary', 'fontMono');

var plain = vars.plain;

expect(plain, 'plain').to.be.ok;
expect(plain, 'plain').to.be.an('object');
expect(plain, 'plain').to.have.any.keys('color', 'font');