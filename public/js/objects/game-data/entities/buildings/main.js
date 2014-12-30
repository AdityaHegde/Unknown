define([
  "./building",
], function() {
  var Buildings = {};

  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      Buildings[k] = arguments[i][k];
    }
  }

  return Buildings;
});
