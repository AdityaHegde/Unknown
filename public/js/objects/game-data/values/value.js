define([
  "ember",
], function(Ember) {

var Value = Ember.Object.extend({
  val : 0,

  getValue : function(game, entitySrc, entityTar, lastVal) {
    return this.get("val");
  },
});

return {
  base : Value,
};

});
