define([
  "./actionList",
  "./actionRegistry",
  "./createAction",
], function() {
  var Actions = Ember.Namespace.create();
  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      Actions[k] = arguments[i][k];
    }
  }

  return Actions;
});
