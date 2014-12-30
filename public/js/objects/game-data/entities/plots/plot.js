define([
  "ember",
  "ember-utils-core",
  "../entity",
  "../../operations/main",
], function(Ember, Utils, Entity, Operations) {

var Plot = Entity.base.extend({
  class : "plot",

  availableOperations : Utils.hasMany(Operations.OperationList, "type", "base", Operations.OperationRegistry, "id"),
});

return {
  basePlot : Plot,
};

});
