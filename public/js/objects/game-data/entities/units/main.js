define([
  "./unit",
  "./playerUnit",
], function() {
  var Units = {};

  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      Units[k] = arguments[i][k];
    }
  }

  return Units;
});
