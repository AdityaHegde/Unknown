define([
  "ember",
  "ember-utils-core",
  "../entity",
], function(Ember, Utils, Entity) {

var Unit = Entity.base.extend({
  class : "unit",

  busy : false,
  //operation
  busyWith : null,

  
});

return {
  baseUnit : Unit,
};

});
