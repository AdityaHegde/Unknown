define([
  "ember",
  "ember-utils-core",
  "../entity",
], function(Ember, Utils, Entity) {

var Item = Entity.base.extend({
  weight : 0,

  class : "item",
});

return {
  baseItem : Item,
};

});
