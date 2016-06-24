var chai = require('chai');
var _ = require('lodash');
var expect = chai.expect;
var vars = require('./src/vars');

expect(vars, 'obj').to.be.ok;
expect(vars, 'obj').to.be.an('object');
expect(vars, 'obj').to.have.keys('flat', 'plain', 'flatLight', 'plainLight');

var flats = _.pickBy(vars, (val, key) => key.match('flat'));
_.mapValues(flats, (val, key) => {
  expect(val, key).to.be.ok;
  expect(val, key).to.be.an('object');
  expect(val, key).to.have.any.keys('colorPrimary', 'fontMono');  
});

var plains = _.pickBy(vars, (val, key) => key.match('plain'));
_.mapValues(plains, (val, key) => {
  expect(val, key).to.be.ok;
  expect(val, key).to.be.an('object');
  expect(val, key).to.have.any.keys('color', 'font');  
});