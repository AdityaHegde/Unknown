module.exports = [];

var data = [
  "./beach",
  "./forest",
  "./village_simple",
];

for(var i = 0; i < data.length; i++) {
  var d = require(data[i]);
  module.exports.push(d);
}
