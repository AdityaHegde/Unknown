define([
  "./valueList",
  "./valueRegistry",
  "./createValue",
], function() {
  var Values = Ember.Namespace.create();
  window.Values = Values;

  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      Values[k] = arguments[i][k];
    }
  }

  return Values;
});
