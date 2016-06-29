var chai = require('chai');
var _ = require('lodash');
var expect = chai.expect;
var vars = require('./src/vars');

expect(vars, 'obj').to.be.ok;
expect(vars, 'obj').to.be.an('object');
expect(vars, 'obj').to.have.keys('flat', 'plain', 'flatLight', 'plainLight');

var flats = _.pickBy(vars, (val, key) => key.match('flat'));
_.mapValues(flats, (val, key) => {
  var scheme = _.last(_.split(key, 'flat')).toLowerCase();
  expect(val, key).to.be.ok;
  expect(val, key).to.be.an('object');
  var shouldHaveKeys = ['colorPrimary', 'fontMono'];
  if (scheme){
    shouldHaveKeys = shouldHaveKeys.map(str => {
      return scheme + _.upperFirst(str);
    });
  }
  expect(val, key).to.have.any.keys(shouldHaveKeys);
});

var plains = _.pickBy(vars, (val, key) => key.match('plain'));
_.mapValues(plains, (val, key) => {
  var scheme = _.last(_.split(key, 'plain')).toLowerCase();
  expect(val, key).to.be.ok;
  expect(val, key).to.be.an('object');
  var shouldHaveKeys = ['color', 'font'];
  expect(val, key).to.have.any.keys(shouldHaveKeys);
});