define([
  "./fuzzy",
  "./registry",
], function() {

  var Fuzzy = {};

  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      Fuzzy[k] = arguments[i][k];
    }
  }

  return Fuzzy;
});
