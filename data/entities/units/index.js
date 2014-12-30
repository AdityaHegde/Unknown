module.exports = [];

var data = [
  "./player",
];

for(var i = 0; i < data.length; i++) {
  var d = require(data[i]);
  module.exports.push(d);
}
