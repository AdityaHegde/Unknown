define([
  "./item",
], function() {
  var Items = {};

  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      Items[k] = arguments[i][k];
    }
  }

  return Items;
});
