define([
  "ember",
  "ember-utils-core",
  "../entity",
], function(Ember, Utils, Entity) {

var Area = Entity.base.extend({
  class : "area",
});

return {
  baseArea : Area,
};

});
