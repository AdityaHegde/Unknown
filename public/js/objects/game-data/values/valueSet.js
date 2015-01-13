define([
  "ember",
  "ember-utils-core",
  "./value",
  "./valueRegistry",
], function(Ember, Utils, Value, ValueRegistry) {

var ValueSet = Value.base.extend({
  values : Utils.hasMany("Values.ValueList", "type", "id", ValueRegistry.ValueRegistry, "id"),

  getValue : function(game, entitySrc, entityTar, lastVal) {
    var
    values = this.get("values"),
    val = lastVal;
    values.forEach(function(value) {
      val += value.getValue(game, entitySrc, entityTar, val);
    });
    return val;
  },
});

return {
  valueSet : ValueSet,
};

});
