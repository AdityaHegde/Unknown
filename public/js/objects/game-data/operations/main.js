define([
  "./operationList",
  "./operationRegistry",
  "./createOperation",
], function() {
  var Operations = Ember.Namespace.create();
  window.Operations = Operations;

  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      Operations[k] = arguments[i][k];
    }
  }

  return Operations;
});
