var chai = require('chai');
var expect = chai.expect;
var vars = require('./src/vars');

expect(vars, 'fn').to.be.ok;
expect(vars, 'fn').to.be.a('function');

var data = vars();
var plain = vars({plain: true});

expect(data, 'data').to.be.ok;
expect(data, 'data').to.be.an('object');

expect(plain, 'plain').to.be.ok;
expect(plain, 'plain').to.be.an('object');