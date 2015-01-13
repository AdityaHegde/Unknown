define([
  "./area",
  "./village",
], function() {
  var Areas = {};

  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      Areas[k] = arguments[i][k];
    }
  }

  return Areas;
});
