define([
  "./plot",
], function() {
  var Plots = {};

  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      Plots[k] = arguments[i][k];
    }
  }

  return Plots;
});
