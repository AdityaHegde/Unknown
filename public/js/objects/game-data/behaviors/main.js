define([
  "./behaviorList",
  "./behaviorRegistry",
], function() {
  var Behaviors = Ember.Namespace.create();
  window.Behaviors = Behaviors;

  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      Behaviors[k] = arguments[i][k];
    }
  }

  return Behaviors;
});
