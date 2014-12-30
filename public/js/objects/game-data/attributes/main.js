define([
  "./attributeList",
  "./attributeInstance",
  "./attributeRegistry",
], function() {
  var Attributes = {};

  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      Attributes[k] = arguments[i][k];
    }
  }

  return Attributes;
});
