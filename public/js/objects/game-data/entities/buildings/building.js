define([
  "ember",
  "ember-utils-core",
  "../entity",
], function(Ember, Utils, Entity) {

var Building = Entity.base.extend({
  class : "building",
});

return {
  baseBuilding : Building,
};

});
