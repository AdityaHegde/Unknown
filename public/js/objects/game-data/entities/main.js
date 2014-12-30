define([
  "./entityInstance",
  "./entityList",
  "./entityRegistry",
  "./loot",
], function() {
  var Entities = Ember.Namespace.create();
  window.Entities = Entities;

  for(var i = 0; i < arguments.length; i++) {
    for(var k in arguments[i]) {
      Entities[k] = arguments[i][k];
    }
  }

  return Entities;
});
