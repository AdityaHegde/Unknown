define([
  "ember",
  "ember-utils-core",
  "./unit",
], function(Ember, Utils, Unit) {

var PlayerUnit = Unit.baseUnit.extend({
  containers : Ember.computed.filterBy("childEntities", "entity.type", "container"),
});

return {
  playerUnit : PlayerUnit,
};

});
