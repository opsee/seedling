var chai = require('chai');
var expect = chai.expect;
var vars = require('./src/vars');

expect(vars, 'vrrrr').to.be.ok;
expect(vars, 'Teh vars').to.be.an('object');
expect(vars, 'Varr').to.have.all.keys('colors', 'fonts', 'shadows', 'transitions');