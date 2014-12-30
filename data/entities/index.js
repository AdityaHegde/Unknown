module.exports = [];

var data = [
  "./areas",
  "./items",
  "./buildings",
  "./units",
  "./containers",
];

for(var i = 0; i < data.length; i++) {
  var d = require(data[i]);
  for(var j = 0; j < d.length; j++) {
    module.exports.push(d[j]);
  }
}
