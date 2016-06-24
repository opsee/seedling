var _ = require('lodash');

var initial = {
  color: {
    background: '#303030',
    primary: '#42A5F5',
    success: '#7CB342',
    info: '#01579B',
    warning: '#FFA726',
    danger: '#f05223',
    error: '#FFD600',
    gray: '#fafafa',
    gray1: '#f5f5f5',
    gray2: '#eeeeee',
    gray3: '#e0e0e0',
    gray4: '#bdbdbd',
    gray5: '#9e9e9e',
    gray6: '#757575',
    gray7: '#616161',
    gray8: '#424242',
    gray9: '#212121',
    text: 'rgba(255, 255, 255,0.85)',
    text2: 'rgba(255, 255, 255, 0.56)',
    header: '#37474f'
  },
  font: {
    gotham: '"Gotham SSm A", "Gotham SSm B", sans-serif',
    tungsten: '"Tungsten A", "Tungsten B", sans-serif',
    mono: '"Droid Sans Mono", "InconsolataMedium", monospace'
  },
  shadow: {
    bottomZ1: '0 2px 5px 0 rgba(0, 0, 0, 0.26)',
    bottomZ2: '0 4px 8px 0 rgba(0, 0, 0, 0.4)'
  },
  transition: {
    easeOut: '0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
    bounce: '0.4s cubic-bezier(0.25, 1.25, 0.75, 1.25)'
  }
}

var schemes = {
  light: {
    color: {
      background: '#f1f1f1',
      header: '#b3b3b3'
    }
  }
}

function flatten(initial){
  var data = {};
  Object.keys(initial).forEach(function(key){
    var parent = initial[key];
    var childKeys = Object.keys(parent);
    childKeys.forEach(function(ck){
      var capitalized = ck.charAt(0).toUpperCase() + ck.slice(1);
      data[key + capitalized] = parent[ck];
    });
  });
  return data;
}

function applyScheme(scheme){
  return _.mapValues(initial, (value, key) => {
    return _.assign(value, schemes[scheme][key]);
  })
}

module.exports = {
  flat: flatten(initial),
  plain: initial,
  flatLight: flatten(applyScheme('light')),
  plainLight: applyScheme('light')
}